<template>
    <div>
      <button @click="a++">add to A</button>
      <button @click="b++">add to B</button>
      <p>A-{{a}}</p>
      <p>B-{{b}}</p>
      <p>Age + A={{addtoA}}</p>
      <p>Age + B={{addtoB}}</p>
    </div>
</template>
<script>
export default {
    name:"computed",
    data(){
     return{
        age:20,
        a:0,
        b:0
     }
    },
    methods:{
    //  addtoA(){
    //      console.log("A is running")
    //      return this.a+this.age
         
    //  },
    //  addtoB(){
    //      console.log("B is running")
    //      return this.b+this.age
         
    //  }
    },
    computed:{
        addtoA(){
         console.log("A is running")
         return this.a+this.age
         
     },
     addtoB(){
         console.log("B is running")
         return this.b+this.age
         
     }
    }
}
</script>