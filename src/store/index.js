import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            { name: "red color", price: 20 },
            { name: "black color", price: 30 },
            { name: "blue color", price: 40 },
            { name: "bnana skin", price: 25 },
            { name: "blueberry", price: 60 }
        ]
    },
    getters:{
        saleproducts:state=>{
            const saleproduct= state.products.map( arg =>{
                return   {
                    name:"**"+arg.name+"**",
                   price:arg.price}
            })
            return saleproduct
        }
    },
    mutations:{
        reducePrice(state,payload){
            // setTimeout(() => {
              state.products.forEach( product =>{
                product.price-=payload
            })  
            // }, 3000);
           
        }
    },

    actions:{
        reducePrice(context,payload){
            setTimeout(() => {
                context.commit('reducePrice',payload)
            }, 3000);
        }
    }
});