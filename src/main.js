
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import store from './store/'
import Routes from './routes'
import VueRouter from 'vue-router'

export const bus=new Vue()

Vue.use(VueRouter)

Vue.use(VueResource)

const router=new VueRouter({
  routes : Routes,
  mode:"history"
})
//custom directives
Vue.directive("rainbow",{
  bind(el){
    el.style.color="#"+Math.random().toString().slice(2,8)
  }
})

Vue.directive('theme',{
  bind(el,binding){
    if(binding.value=='wide'){

      el.style.maxwidth='2000px'
    }
  }
})

//filters
 Vue.filter('to-ucase',(value)=>{
    return value.toUpperCase()
 })
 Vue.filter('snippet',(value)=>{
  return value.slice(0,100)
})
Vue.config.productionTip = false

new Vue({
   router:router,
  store,
  render: h => h(App),
}).$mount('#app')

