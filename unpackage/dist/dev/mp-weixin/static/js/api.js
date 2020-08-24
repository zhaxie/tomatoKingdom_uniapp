export default {

    //用户相关
    login: '/api.php/user/login',                                   //POST 微信登录
    updateUserInfo: '/api.php/user/updateUserRegisterInfo',         //POST 更新用户注册信息
    bindMobile: '/api.php/user/bindMobile',                         //POST 绑定与验证手机
    getUserInfo: '/api.php/user/getUserInfo',                       //POST 获取用户信息
    editUserInfo: '/api.php/user/edit_info',                        //POST 编辑用户信息
    changeMobile: '/api.php/user/changeMobile',                     //POST 更换手机号
    getFriendsManorInfoWithoutLogin: '/api.php/user/nologin_friends_manor',  //POST 没有登录获取好友庄园

    getAreaList: '/api.php/School/external_area_list',              //POST 获取区域列表
    searchSchool: '/api.php/School/external_school_list',           //POST 搜学校
    getLexueClassList: '/api.php/School/lexue_class_list',          //POST 搜学校
    getSchoolClassByID: '/api.php/School/external_grade_list',      //POST 获取学校年级列表

    getTomatoLabelList: '/api.php/label/label_list',                //POST 获取番茄标签列表
    getTomatoLableList_secondCategory: '/api.php/label/details_list',//POST 获取二级番茄标签列表
    getQuesListByLabelIDs: '/api.php/label/questions_list',         //POST 根据二级番茄标签id获取明细问题
    addTomatoLabelItem: '/api.php/user/labelAdd',                   //POST 获取番茄标签
    delTomatoLabel: '/api.php/user/labelDel',                       //POST 删除番茄标签
    editTomatoLabel: '/api.php/user/labelEdit',                     //POST 编辑番茄标签

    addPlantTomato: '/api.php/user/plantAdd',                       //POST 添加种植番茄记录
    editTomatoRecord: '/api.php/user/edit_plant',                   //POST 编辑番茄

    getTodayPlaintedTomatoNumber: '/api.php/user/plant_count_today',    //POST 获取今天种植的番茄数量
    getUserPlantRecordList: '/api.php/user/plantList',                  //POST 获取用户种植记录
    getIsReachMaxPlaintLimit: '/api.php/user/plant_chance',             //POST 获取用户是否达到了最大种植限制
    getPlantedTotalTomatoNumber: '/api.php/user/plant_count_all',       //POST 获取种植的总番茄数量
    isBindLexueClass: '/api.php/user/in_class_status',                  //POST 是否绑定乐学班级
    applyBindClass: '/api.php/user/in_class_apply',                     //POST 申请绑定乐学班级

    isSignInToday: '/api.php/user/clock_status_today',              //POST 今天是否打卡
    signIn: '/api.php/user/clock',                                  //POST 打卡
    getClockList: '/api.php/user/clock_list',                       //POST 获取打卡记录
    getClockAccount: '/api.php/user/plant_day_counts',              //获取用户种植天数

    getMyModelList: '/api.php/user/getModelList',                   //获取用户已拥有的勋章
    getAllModelList: '/api.php/achievement/medal_list',             //获取所有勋章列表
    getMedelRulesIntroduce: '/api.php/sundry/rule_introduce',       //获取成就规则介绍


    searchFriend: '/api.php/user/add_friend',                       //搜索好友
    focusFriend: '/api.php/user/follow_friend',                     //关注好友
    unFocusFriend: '/api.php/user/unfollow_friend',                 //取消关注好友
    getNoticeList: '/api.php/user/notice_list',                     //获取通知列表
    readNotice: '/api.php/user/notice_read',                        //已读通知
    getRankList: '/api.php/user/rank_list',                         //获取排行榜
    getUserPlantInfoByID: '/api.php/user/plantInfo',                //获取用户种植详情


    getServiceQRCode: '/api.php/ewn/service_code',                  //获取客服二维码
    getMyShareQrCode: '/api.php/ewn/invite_code',                   //获取分享好友二维码
    getPosterImage: '/api.php/advertising/coopen_pic',              //获取开屏广告图片
    getAboutUsText: '/api.php//sundry/about',                       //获取关于我们的文字
    getJoinedLexueTimeManageClassList: '/api.php/sundry/class_time',//获取已开班的乐学时间管理课程

}