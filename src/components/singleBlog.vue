<template>
    <div>
        
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
         <ul>
              <li v-for='item in blog.categories' :key="item.id">Categories:{{item}}</li>
          </ul>
    </div>
</template>
<script>
export default {
    name:"singleBlog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){   
        console.log(this.id)
        this.$http.get('https://blog-list-d7797-default-rtdb.firebaseio.com/posts/'+this.id +'.json').then((data)=>{
            return data.json()
        }).then((data)=>{
            this.blog=data
        })
    }
}
</script>