import Vue from 'vue'
import App from './App'

//共用css
import '@/static/css/xx-base.css';
import '@/static/css/animate.css';

//页面路由
import '@/static/js/routerList.js';

//全局组件
import navBar from '@/components/global/navBar.vue';
import mainContainer from '@/components/global/mainContainer.vue';
import imgWithLoading from '@/components/global/imgWithLoading.vue';

Vue.component('navBar', navBar);
Vue.component('mainContainer', mainContainer);
Vue.component('imgWithLoading', imgWithLoading);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
	...App
})
app.$mount();
