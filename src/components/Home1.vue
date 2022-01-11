<template>
    <div>
        <showblog/>
      
    </div>
</template>
<script>
import showblog from"./Showblog.vue"

export default {
    name:"Home1",
    data(){
        return{
         title : " please complete vue tutorial "
        }
    },
    
    components:{
        showblog
        
    },
  
}
</script>