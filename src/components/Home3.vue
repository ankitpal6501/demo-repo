<template>
    <div>
        
        <form-one v-bind:title='title' ></form-one>
        <form-two v-bind:title='title'></form-two>
        
        
    </div>
</template>
<script>

import Form1 from "./Form1.vue"
import Form2 from "./Form2.vue"

export default {
    name:"Home1",
    data(){
        return{
         title : " please complete vue tutorial "
        }
    },
    
    components:{
        
        "form-one" : Form1,
        "form-two":Form2   
        
    },
  
}
</script>