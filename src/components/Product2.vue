<template>
  <div>
    <ul>
      <li v-for="product in saleproducts" :key="product.name">
        <span>{{ product.name }}</span>
        <span>${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  name: "Product2",
  computed: {
    // products() {
    //   return this.$store.state.products;
    // },
    
//     saleproducts(){
//     return this.$store.getters.saleproducts
//   }
     ...mapGetters(['saleproducts'])
  },
};
</script>