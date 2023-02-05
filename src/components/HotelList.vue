<template>
  <div class="row">
  <div class="container" style="width: 100vw;margin-left: -12px;">
 <div class="col-md-3 mt-5">
  <Header></Header>
 </div>
 <div class="col-md-9 text-center mt-2" style="float: right;">
  <table class="table table-striped table-hover bg-white float-right">
  <thead>
    <tr class="bg-primary text-white">
      <th scope="col">Hotel Name</th>
      <th scope="col">City Located</th>
      <th scope="col">Owner</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="item in restaurent" :key="item.id">
      <td>{{item.hotel_name}}</td>
      <td>{{item.city }}</td>
      <td>{{item.owner }}</td>
      <td> 
        <button type="button" class="btn btn-primary text-white text-right"><i class="fa fa-pencil"></i></button>&nbsp;
        <button type="button" class="btn btn-danger text-white text-right"><i class="fa fa-trash"></i></button>

      </td>
    </tr>
  </tbody>
</table>
 </div>
 <div class="col-md-12">
<Navbar></Navbar>
 </div>
  </div>
</div>
   </template>
     
     <script>
     import axios from 'axios'
     import Header from './header.vue'
import Navbar from './navBar.vue'
     export default {
       // eslint-disable-next-line vue/multi-word-component-names
       name: 'HotelList',
       components:{
        Header,Navbar
       },
       data(){
        return{
         name:'',
         restaurent:[]
        }
       },
       mounted(){
      var  result = axios.get("https://mocki.io/v1/134fa970-5c8f-434c-8d72-29b658058954").then((response)=>{
         this.restaurent=response.data;
        console.log(result)
      });
      
  
       }
        
       }
     
     </script>
     
     <!-- Add "scoped" attribute to limit CSS to this component only -->
     <style scoped>
    .bg-primary{
      background-color:#004772;
    }
 
     </style>
     