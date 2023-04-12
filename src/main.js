/*
 * @FilePath: \vue2.7_template\src\main.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-04-12 13:19:55
 * @Description:
 */
import Vue from "vue";
import { extendRouter } from "@/extend/router";
import { extendPinia } from "@/extend/pinia";
import { extendElement } from "@/extend/element";
import { extendScroll } from "@/extend/scroll";
import * as echarts from "echarts";
import "./permission";
import App from "@/layout/App.vue";
import "normalize.css";
import "@/assets/style/index.scss";
Vue.prototype.$echarts = echarts; //挂载到Vue实例上面

const router = extendRouter(Vue);
const pinia = extendPinia(Vue);
extendElement(Vue);
extendScroll(Vue);
const app = new Vue({
    render: (h) => h(App),
    router,
    pinia,
});

app.$mount("#app");

export default app;
