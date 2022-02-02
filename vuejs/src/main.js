// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// this file is root component i.e; entry point

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/* eslint-disable */

// this is an object instance with key value pairs
new Vue({  
  // we are connecting all components in this instance like element,route,component and template
  el: '#app',  
  router,
  // in larger application there will be multiple components so that we connect within curly braces.
  components: { App }, 
  //binding the html
  template: '<App/>'  
})
