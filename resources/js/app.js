require('./bootstrap');
require('bootstrap/js/src/index');
window.Vue = require('vue');
window.$ = require('jquery');
window.JQuery = require('jquery');
import JQuery from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
window.$ = JQuery;
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
import VueWebsocket from "vue-websocket";
Vue.use(VueWebsocket, "wss://relay.arzypto.com/ws");
// import autobahn from 'autobahn';
// Vue.use(autobahn);
// WSS
// const wsuri = "wss://relay.arzypto.com/ws";
// const connection = new autobahn.Connection({
//     url: wsuri,
//     realm: "realm1"
// });


import BitcoinInfo from './components/BitcoinInfo.vue';
Vue.component('BitcoinInfo', BitcoinInfo);
Vue.config.productionTip = false;
const app = new Vue({
    el: '#app'
});