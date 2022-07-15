<template>
  <NavBar/>
  <HeroImg/>
  <LogIn/>
  <NewUser/>
  <CardContainer v-bind:products="products"/>
  <ProductCart/>
  <SiteFooter/>
</template>

<script>
import HeroImg from "@/components/Hero";
import CardContainer from "@/components/CardContainer";
import ProductCart from "@/components/ProductCart";
import LogIn from "@/components/login";
import NavBar from "@/components/Navbar";
import SiteFooter from "@/components/footer";
import axios from "axios";
import NewUser from "@/components/Registration";

export default {
  name: 'App',
  components: {
    NewUser,
    HeroImg,
    LogIn,
    CardContainer,
    ProductCart,
    SiteFooter,
    NavBar
  },
  data(){
    return {
      products: [],
      cart: []
    }
  },
  methods: {
    renameKey(obj, oldKey, newKey){
      obj[newKey] = obj[oldKey];
      delete obj[oldKey]
    },
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products/')
        console.log(response.data)
        response.data.forEach(obj => this.renameKey( obj, '_id', 'id'))
        this.products = response.data
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    addToCart(){
      console.log(this.id)
    }
  },
  beforeMount(){
    this.fetchProducts();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
