<template>
 <div class="row">
    <div class="container-fluid" style="width: 100vw;margin-left: -12px;">
   <div class="col-md-12 mt-5">
    <Header></Header>
   </div>
   <div class="col-md-12">
<Navbar></Navbar>
   </div>
    </div>
 </div>
  </template>
  
  <script>
import Header from './header.vue'
import Navbar from './navBar.vue'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components:{
     Header,Navbar
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>
  