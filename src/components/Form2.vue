<template>
    <div>
     <h1>form2:{{title}}</h1>
        
    </div>
</template>
<script>
import {bus} from "../main"
export default {
    name:"form2",
    props:['title'],
     
     created(){
      bus.$on("updatetitle",(data)=>{
          this.title=data
      })
     }
}
</script>