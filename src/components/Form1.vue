<template>
    <div>
        <h1 @click="Changetitle">form1:{{title}}</h1>
       
    </div>
</template>
<script>
import {bus} from "../main"
export default {
    name:"form1",
  
    props:['title'],
    
  methods:{
      Changetitle(){
          this.title="complete the tutorials successfully"
          bus.$emit("updatetitle","complete the tutorials successfully")
      }
  }
    
}
</script>