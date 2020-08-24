import apiObj from './api.js';

export default class Http {
    constructor() {
        this.apiKeyObj = {};
        this.apiObj = apiObj;
    };

    //请求参数转换
    transformRequest(data) {
        let ret = '';
        let _encodeURIComponent = encodeURIComponent;

        for (let key in data) {
            const item = data[key];

            if (item.__proto__.constructor === Array) {
                for (let index = 0, len = item.length; index < len; index++) {
                    ret += _encodeURIComponent(key + '[]') + '=' + _encodeURIComponent(item[index]) + '&';
                }
            } else {
                ret += _encodeURIComponent(key) + '=' + _encodeURIComponent(item) + '&';
            }
        }
        return ret;
    };

    //微信请求
    wxRequest(options, api) {
        return new Promise(async (resolve, reject) => {
            const {
                ajaxType,
                data
            } = options;

            // if (api === this.lastRequestApi && JSON.stringify(data) === JSON.stringify(this.lastRequestData)) {
            //     // uni.$toast({
            //     //     msg: '请求中，请稍候~',
            //     // });
            //     reject('请求中，请稍候~');
            //     return false;
            // }

            this.lastRequestApi = api;
            this.lastRequestData = data;

            uni.request({
                url: 'https://lexue.ozkoalas.cn' + api,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": uni.getStorageSync("token") || "",
                },
                method: ajaxType || 'POST',
                // transformRequest: [this.transformRequest],
                dataType: 'json',
                data: data || {},
                success: (respon = {}) => {
                    resolve(respon);
                },
                fail: (error) => {
                    reject(error)
                },
                complete: () => {
                    delete this.lastRequestApi;
                    delete this.lastRequestData;
                }
            });
        });
    };

    wxUploadFile(options, api) {
        return new Promise((resolve, reject) => {
            const {
                filePath
            } = options;

            uni.uploadFile({
                url: 'https://yuequn.ozkoalas.cn' + api,
                filePath,
                name: 'image',
                header: {
                    "Authorization": uni.getStorageSync("token") || '',
                },
                formData: {},
                success: (respon = {}) => {
                    resolve(respon);
                },
                fail: (error) => {
                    reject(error);
                },
            });
        });
    };


    //请求成功
    requestSuccess(requestRet) {
        const { code, msg, res } = requestRet;

        console.error('code', code);

        switch (code) { // -1 错误数据  -90001: 要登录 -90002: 没有客户资质
            case 1:
                return true;
            case -1:
                throw msg;
            case -90001:
                this.toLogin();
                throw null;
            case -90002:
                // res && res.token && uni.setStorageSync('token', res.token); //保存token
                throw msg;

                // this.toRegister();
                // throw null;
        }
    }

    async toLogin() {

        console.info('toLogin', 2323);
        await uni.$router.push({
            getUserPermise: true,
            name: 'login',
        });


        // try {
        //     if (this.isToLogined === true) {
        //         console.info('已经去登录了', '');
        //         return false
        //     };;
        //     this.isToLogined = true;

        //     await uni.$router.push({
        //         getUserPermise: true,
        //         name: 'login',
        //     });

        //     this.isToLogined = false;

        // } catch (error) {
        //     this.isToLogined = false;
        // }
    }

    async toRegister() {

        await uni.$router.push({
            getUserPermise: true,
            name: 'register',
        });



        // try {
        //     if (this.isRegisted === true) {
        //         console.info('已经去注册了', '');
        //         return false
        //     };
        //     this.isRegisted = true;

        //     await uni.$router.push({
        //         getUserPermise: true,
        //         name: 'register',
        //     });

        //     this.isRegisted = false;

        // } catch (error) {
        //     this.isRegisted = false;
        // }
    }

    showLoading() {
        clearTimeout(this.showLoadingTimer);
        this.showLoadingTimer = setTimeout(() => {
            uni.showLoading();
            this.showLodding = true;
        }, 150);
    }

    hideLoading() {
        clearTimeout(this.showLoadingTimer);

        if (this.showLodding === true) {
            uni.hideLoading();
            this.showLodding = false;
        }
    }

    ajax(options = {}) {
        return new Promise(async (resolve, reject) => {
            const { apiKey, isUploadFile } = options;

            try {
                const api = this.apiObj[apiKey];

                if (!api) throw '请求地址有误';

                this.showLoading();

                //请求开始
                const {
                    statusCode,
                    data
                } = !isUploadFile ? await this.wxRequest(options, api) : await this.wxUploadFile(options, api);

                console.info('---请求返回结果---：', data)

                switch (statusCode) {
                    case 200:
                        await this.requestSuccess(data);
                        resolve(data);
                        break;
                    case 500:
                        throw '网络欠佳';
                    default:
                        throw '网络请求出错，未知错误';
                }


            } catch (error) {
                //请求完毕：处理错误
                console.error('ajax出错详情：', error);

                if (error && /request:fail/.test(error.errMsg)) {
                    error = "请求失败，请检查网络"
                }

                reject(error);
            } finally {
                this.hideLoading();
            }
        });
    };
}