// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

let app
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
export default{
  apiKey: 'AIzaSyAe6cmws6CvOHRd5ds2Xb-QvH4Dr4uAbGE',
  authDomain: 'arkdoaibu.firebaseapp.com',
  databaseURL: 'https://arkdoaibu.firebaseio.com',
  projectId: 'arkdoaibu',
  storageBucket: 'arkdoaibu.appspot.com',
  messagingSenderId: '577326144586'
}
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
})
