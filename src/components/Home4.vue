<template>
    <div>
       
        
        
        <Product1 />
        <Product2 />
        
    </div>
</template>
<script>


import Product2 from"./Product2.vue"
import Product1 from "./Product1.vue"

export default {
    name:"Home1",
    data(){
        return{
         title : " please complete vue tutorial "
        }
    },
    
    components:{
        
        
        
        Product1,
        Product2
    },
  
}
</script>