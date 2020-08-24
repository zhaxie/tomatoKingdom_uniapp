<script>
import Common from "@/static/js/common.js";
import Http from "@/static/js/ajax.js";
import Bus from "@/static/js/bus.js";

export default {
  onLaunch: function () {
    console.log("App Launch");

    const http = new Http();
    const common = new Common();
    const Router = common.router();

    uni.$com = common;
    uni.$toast = common.showToast;
    uni.$router = new Router();
    uni.$ajax = http.ajax.bind(http);
    uni.$imgBaseUrl = "https://yuequn.ozkoalas.cn";
    uni.$bus = new Bus();
	  uni.$checkTapTooFaster = common.checkTapTooFaster; //频繁点击
	
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
  font-family: uniicons;
  src: url("/static/uni.ttf");
}
/* #endif */
</style>
