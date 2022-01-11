<template>
    <div>
       
        
        
        <Blog/>
        
    </div>
</template>
<script>


import Blog from"./Blog.vue"


export default {
    name:"Home1",
    data(){
        return{
         title : " please complete vue tutorial "
        }
    },
    
    components:{
        Blog
    },
  
}
</script>