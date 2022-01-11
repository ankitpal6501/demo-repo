<template>

    <div class="add-blog">
     <h1>this is the blog application</h1>
     <form v-if="!submitted">
         <label >Blog title:</label>
         <input type="text" v-model.lazy="blog.title" required ><br><br>
         <label >Blog Content:</label>
         <textarea cols="30" rows="10" v-model.lazy="blog.content" lazy></textarea>
         <div class="checkbox">
             <label>Action</label>
             <input type="checkbox" value="Action" v-model="blog.categories">
             <label>Thriller</label>
             <input type="checkbox" value="Thriller" v-model="blog.categories">
             <label>Comedy</label>
             <input type="checkbox" value="Comedy" v-model="blog.categories">
             <label>Animation</label>
             <input type="checkbox" value="Animation" v-model="blog.categories">
         </div>
         <button v-on:click="addblog">Add Blog</button>
     </form>
    
    <div  v-if="submitted" class="preview">
     <h3>blog preview</h3>
     <p>Blog title:{{blog.title}}</p>
     <p>Blog content:{{blog.content}}</p>
     <p > Blog category:</p>
     <ul>
         <li v-for='item in blog.categories' :key="item.id">{{item}}</li>
     </ul>
    </div>

    
    </div>
</template>
<script>

export default {
    name:"Blog",
    data(){
        return{
            blog:{
            title:'',
            content:'',
            categories:[]
            },
            submitted:false
        }
    },
    methods:{

       async addblog(){
           this.submitted=true
            await this.$http.post('https://blog-list-d7797-default-rtdb.firebaseio.com/posts.json',this.blog)
            console.log("everything is running")
        }
    }
    
}
</script>
<style scoped>
 .add-blog*{
     box-sizing: border-box;
 }
 .add-blog{
     margin: 20px auto;
     max-width: 500px;
 }

lable{
    margin: 20px 0 10px;
    display: block;
}
input,textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
.preview{
    border: 1px solid #ccc;
    margin: 30px 0;
    padding: 10px 20px;
}
h3{
    margin-top:10px;
}










</style>