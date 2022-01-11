<template>
    <div id="all-blogs">
      <h2>Sow all Blogs</h2>
      <input type="text" v-model="search" placeholder="Search Blogs">
      <div id="one-blog" v-theme="'wide'" v-for="blog in filterBlog" :key="blog.id">
          <router-link v-bind:to="'/singleBlog/'+ blog.id">
          <h3 v-rainbow>{{blog.title | to-ucase}}</h3>
          </router-link>
          <article>{{blog.content | snippet}}</article>
          <ul>
              <li v-for='item in blog.categories' :key="item.id">Categories:{{item}}</li>
          </ul>
      </div>
        
    </div>
</template>
<script>
import Searchmixin from "../mixin/Searchmixin"
export default {
    name:"form2",
    data(){
        return{
            blogs:[],
            search:''
        }
    },
    created(){
        this.$http.get('https://blog-list-d7797-default-rtdb.firebaseio.com/posts.json').then((data)=>{
            
           return data.json()
            
        }).then((data)=>{
            
            var blogsArray=[]
            for(let key in data){
                data[key].id=key
               blogsArray.push(data[key])

            }
            this.blogs=blogsArray
          

        })
    },
    //custom filter
    mixins:[Searchmixin]
    
}
</script>
<style scoped>
#all-blogs{
    max-width: 800px;
    margin:0 auto;
}
#one-blog{
    padding: 20px;
    margin: 20px o;
    box-sizing: border-box;
    background: #eee;
}
</style>