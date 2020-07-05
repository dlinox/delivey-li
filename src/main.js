import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
*/

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCwYAGIXz6JwHI6Gam6t6_htHhCdwSTW0Q",
  authDomain: "piniateria-li.firebaseapp.com",
  databaseURL: "https://piniateria-li.firebaseio.com",
  projectId: "piniateria-li",
  storageBucket: "piniateria-li.appspot.com",
  messagingSenderId: "912008551602",
  appId: "1:912008551602:web:750bd49e19d184855c7dab"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {

  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});