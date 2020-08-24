class Common {
    showToast({ msg, icon, duration, isShowMask }) {
        if (msg === null) return false;
        if (msg === undefined) { msg = '存在未定义的值' };

        if (typeof msg !== 'string') {
            console.error('有错误', msg);
            msg = JSON.stringify(msg)
        };

        console.info('msg', msg);

        uni.showToast({
            title: msg,
            icon: icon || 'none',
            duration: duration || 2500,
            mask: isShowMask || false,
            fail: (error) => {
                console.error('showToast', error);
            },
        });
    };

    openToWin(e) {
        console.info('e', e);
        const name = e.currentTarget.dataset.pagename;

        console.info('name', name);
        uni.$router.push({
            name,
        });
    };

    confirm(options = {}) {
        return new Promise((resolve, reject) => {
            const {
                title,
                content,
                showCancel,
                cancelText,
                cancelColor,
                confirmText,
                confirmColor
            } = options;

            uni.showModal({
                title: title || '是否确定',
                content: content || '',
                showCancel: showCancel !== undefined ? showCancel : true,
                cancelText: cancelText || '取消',
                cancelColor: cancelColor || '#000000',
                confirmText: confirmText || '确定',
                confirmColor: confirmColor || '#3CC51F',
                success: (result) => {
                    if (result.confirm) {
                        resolve(true);
                    }
                },
                fail: (error) => {

                    console.error('error', error);
                    reject(error)
                },
            });

        })
    }

    //去登录
    toLogin() {
        uni.navigateTo({
            url: '/pages/user/login/login',
            fail: (error) => {
                console.error('error', error);
            }
        });
    };

    router() {
        return class Router {
            constructor() {
                const routerList = require('./routerList.js').default;

                this.routerList = routerList;
                this.currentRouterInfo = null;

                this.routerResolveList = [];
            }

            push(options) {
                return new Promise(async (resolve, reject) => {
                    const { path, toRouterName } = await this.beforeRouterEnter(options, reject);

                    try {

                        uni.navigateTo({
                            url: path,
                            fail: error => {
                                uni.switchTab({
                                    url: path,
                                    fail: (err) => {
                                        reject(error);
                                    },
                                    success: () => {
                                        resolve();
                                    }
                                });
                            },
                            success: () => {
                                resolve();
                            },
                            complete: () => {
                                delete this[toRouterName];
                            }
                        });

                    } catch (error) {
                        console.error('error', error);

                        delete this[toRouterName];
                        reject(error);
                    }
                });
            };

            replace(options) {
                return new Promise(async (resolve, reject) => {
                    const { path, toRouterName } = await this.beforeRouterEnter(options, reject);

                    uni.redirectTo({
                        url: path,
                        success: () => {
                            resolve();
                        },
                        fail: (error) => {
                            reject(error);
                        }
                    });
                });
            };

            reLaunch(options) {
                return new Promise(async (resolve, reject) => {
                    const { path, toRouterName } = await this.beforeRouterEnter(options, reject);

                    uni.reLaunch({
                        url: path,
                        success: () => {
                            resolve();
                        },
                        fail: (error) => {
                            reject(error);
                        }
                    });

                });
            };

            async beforeRouterEnter(options, reject) {
                if (options.currentTarget) {
                    options = this.transfromPageOptions(options);
                }

                let { name: toRouterName, getUserPermise, query } = options;

                if (this[toRouterName] === true) {
                    console.error('正在打开目标页面');
                    return false;
                }

                this[toRouterName] = true;

                console.info('toRouterName', toRouterName);


                const currentRouterInfo = this.routerList[toRouterName];
                let { path, meta } = currentRouterInfo;

                if (!toRouterName) throw '路由名字有误';
                if (!path) throw '路由地址有误';

                if (meta && getUserPermise) {
                    try {
                        await this.checkByMetaBeforePushRouter(meta);
                    } catch (error) {
                        delete this[toRouterName];

                        reject(null);
                        return false;
                    }
                }

                this.currentRouterInfo = currentRouterInfo;

                //参数转化----开始
                let queryToString = '';

                for (let key in query) {
                    const item = query[key];

                    queryToString += ('&' + key + '=' + item);
                }

                queryToString = queryToString.replace('&', '?');

                //参数转化----结束
                path = '/' + path + queryToString;

                return {
                    path,
                    toRouterName
                };
            };
            //页面栈后退
            back(backLength, backObj) {
                return new Promise((resolve, reject) => {

                    if (this.isBacking === true) {
                        console.error('正在后退关闭页面');
                        return false;
                    }

                    this.isBacking = true;
                    const currentPageLen = getCurrentPages().length;

                    if (currentPageLen > 1 && backLength !== 'home') {
                        const deltaLen = Math.abs(backLength);

                        uni.navigateBack({
                            delta: deltaLen,
                            success: () => {
                                resolve();
                            },
                            fail: (error) => {
                                console.error('error', error);
                                reject(error);
                            },
                            complete: () => {
                                this.isBacking = false;
                            }
                        });
                    } else {
                        uni.switchTab({
                            url: '/' + this.routerList['home'].path,
                            success: () => {
                                resolve();
                            },
                            fail: (error) => {
                                console.info('error', error);
                                reject(error);
                            },
                            complete: () => {
                                this.isBacking = false;
                            }
                        });
                    }
                })
            };

            //打开新页面前，拦截处理
            checkByMetaBeforePushRouter(meta) {
                try {
                    const { title, content } = meta.entryBeforeUserPermise;

                    return new Promise((resolve, reject) => {
                        uni.showModal({
                            title,
                            content,
                            showCancel: true,
                            cancelText: '取消',
                            cancelColor: '#000000',
                            confirmText: '确定',
                            confirmColor: '#3CC51F',
                            success: (result) => {
                                if (result.confirm) {
                                    resolve(true);
                                } else {
                                    reject(false);
                                }
                            },
                            fail: (err) => {
                                reject(err);
                            },
                        });

                    });
                } catch (error) {
                    console.error('error', error);
                    throw error;
                }
            };

            transfromPageOptions(e) {
                console.info('e', e);

                try {
                    let dataset = e.currentTarget.dataset;
                    let newOptions = {
                        name: null,
                        path: null,
                        query: {},
                    };
                    let query = newOptions.query;

                    for (let key in dataset) {
                        const item = dataset[key];

                        if (newOptions[key] !== undefined) {
                            newOptions[key] = item;
                        } else {
                            query[key] = item;
                        }
                    }

                    console.info('transfromnewOptions', newOptions);

                    if (!newOptions.name) {
                        throw '路由参数有误';
                    }

                    return newOptions;
                } catch (error) {
                    uni.$toast({
                        msg: error,
                    });
                }
            }

        }

    };

    getDomRect({ _this, dom }) {
        return new Promise((resolve) => {
            const domQuery = uni.createSelectorQuery().in(_this);
            const _pageRect = domQuery.select(dom).boundingClientRect();

            console.info('_pageRect', _pageRect)

            _pageRect.exec((res) => {
                console.info('res', res);
                resolve(res[0]);
            });
        });
    };

    checkValueByRules(inputList) {
        let valueObj = {};

        inputList.forEach(item => {
            const {
                id,
                value: inputValue,
                emptyValueTips,
                mapKey,
                rules,
            } = item;

            if (emptyValueTips && (!inputValue || !inputValue.trim())) {
                valueObj = null;
                throw emptyValueTips || '输入不能为空';
            };

            if (rules) {
                rules.forEach(ruleItem => {
                    const checkRuleRet = ruleItem(inputValue);

                    if (typeof checkRuleRet === 'string') {
                        valueObj = null;
                        throw checkRuleRet;
                    }
                });
            }

            valueObj[mapKey] = id || inputValue || '';
        });

        return valueObj;
    };

    // onPageScroll(e) {
    //     let onPageScrollToBottom =
    //       this.onPageScrollToBottom ||
    //       (this.onPageScrollToBottom = uni.$com.isScrollToBottom.bind(this));

    //     const isScrollToBottom = onPageScrollToBottom({
    //       e,
    //       keepBottom: 10,
    //     });

    //     if (isScrollToBottom === true) {
    //       this.getAndSetUserPlantRecordList({
    //         isGetNewList: false,
    //       })
    //     }

    //   },

    // isScrollToBottom({ e, keepBottom }) {
    //     const scrollTop = e && e.scrollTop;
    //     const pageHeight = this.pageHeight;
    //     const screenHeight = this.screenHeight || (this.screenHeight = uni.getSystemInfoSync().windowHeight);

    //     // console.info('scrollTop', scrollTop);
    //     // console.info('pageHeight', pageHeight);
    //     // console.info('screenHeight', screenHeight);
    //     // console.info('scrollTop + screenHeight', scrollTop + screenHeight);

    //     if (scrollTop && pageHeight && scrollTop + screenHeight >= pageHeight - keepBottom) {

    //         if (this.isPageBottom !== true) {
    //             console.error('到底了');

    //             this.isPageBottom = true;

    //             return true;
    //         }

    //     } else {
    //         this.isPageBottom = false;
    //     }
    // };

    onShareAppMessage() {
        let myInfo = uni.getStorageSync('userInfo');
        let _routerList = uni.$router.routerList;
        let path;

        if (myInfo === null) {
            path = _routerList.home.path;
        } else {
            path = _routerList.friendManor.path + '?userID=' + myInfo.user_id + '&isEntryByShare=true';
        };

        console.info('path', path);

        return {
            title: '快来我的番茄王国吧~',
            path,
        };
    };

    //频繁点击限制
    checkTapTooFaster(timeInterval = 200) {
        const lastTapNavTime = this.lastTapNavTime || 0;
        let checkRet;

        if (new Date().getTime() - lastTapNavTime < (timeInterval)) {
            uni.$toast({
                msg: '',
            });
            checkRet = true;
        } else {
            checkRet = false;
        }

        this.lastTapNavTime = new Date().getTime();
        return checkRet;
    };

    onDevelopingTips() {
        uni.$toast({
            msg: '开发中，请耐心等待',
        })
    };


    //获取并绑定用户信息
    getAndBindUserClient() {
        return new Promise(async (resolve, reject) => {
            try {
                const { res } = await uni.$ajax({
                    apiKey: 'getUserClientList',
                });

                const clientList = res.data;
                const clientListLen = clientList.length;

                console.info('去绑定客户信息', '')

                //有客户信息，就弹出actionSheet选择后, 并绑定客户信息
                if (clientListLen > 0) {

                    await uni.$com.confirm({
                        title: '请先绑定客户信息',
                        content: '服务需要，请先选择并绑定客户信息',
                        showCancel: false,
                    });

                    uni.$router.push({
                        name: 'clientList',
                    });

                    uni.$bus.on('changeClientInfo', async () => {
                        await uni.$router.back(-1); //特殊操作：用于关闭绑定
                        uni.$bus.off('changeClientInfo');
                        resolve(true);
                    });

                } else {
                    // 没有客户信息, 直接返回

                    console.info('没有客户信息', '')
                    resolve(true);
                }
            } catch (error) {
                reject(error);
            }
        });
    };

}

export default Common;