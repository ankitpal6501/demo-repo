<template>
  <div>
    <ul>
      <li v-for="product in saleproducts" :key="product.name">
        <span>{{ product.name }}</span>
        <span>${{ product.price }}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduce price</button>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
import {mapActions} from "vuex"
export default {
  name: "Product1",
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(['saleproducts'])
  },
  methods:{
    // reducePrice(amount){
      // this.$store.dispatch('reducePrice',amount)
      ...mapActions(['reducePrice'])
    }
  }
  
</script>