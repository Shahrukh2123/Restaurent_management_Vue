<template>
    <div class="row">
    <div class="container" style="width: 100vw;margin-left: -12px;">
   <div class="col-md-3 mt-5">
    <Header></Header>
   </div>
   <div class="col-md-9 text-center mt-2" style="float: right;">
    <div class="card">
  <h5 class="card-header bg-warning text-white">Book New Resort</h5>
  <div class="card-body">
    <form>
  <div class="mb-3">
    <label for="label text-left" class="form-label">Email address</label>
    <input type="email" v-model="email" placeholder="Email" class="form-control" required="true">
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" v-model="password" placeholder="Password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputUsername" class="form-label">Username</label>
    <input type="string" v-model="username" placeholder="Username" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputResort" class="form-label">Resort</label>
   <select placeholder="Select Resort" v-model="hotel" class="form-control">
    <option>Oberoi New Delhi</option>
    <option>Taj Hotel ,Mumbai</option>
    <option>Clark Shiraj, Agra</option>
   </select>
  </div>
  <div class="options" style="display:flex;justify-content:space-between">
    <button type="submit" class="btn btn-success text-white text-right" v-on:click="addHotel()">Register</button>
  <button type="button"  v-on:click="cancelAction()" class="btn btn-danger text-white ">Cancel</button>
  </div>
  
</form>
  </div>
</div>
   </div>
   <HotelList></HotelList>
   <div class="col-md-12">
<Navbar></Navbar>
   </div>
    </div>
 </div>
     </template>
     
     <script>
   
import Header from './header.vue'
import Navbar from './navBar.vue'
import axios from 'axios'
     export default {
       // eslint-disable-next-line vue/multi-word-component-names
       name: 'AddHotel',
       components:{
        Header,Navbar
       },data(){
        return{
        
            email:'',
          password:'',
          username:'',
          resort:'',
          
          
        }
      },
      methods:{
        addHotel(){
          let result = axios.post("https://api.instantwebtools.net/v1/airlines", {
         "name": this.username,
    "country": this.city,
    "slogan": this.resort,
    "head_quaters": this.city,
    "website": "www.srilankaairways.com",
    "established": ""
        })
        .then((response) => {
          if (response.status === 200) {
            alert("Hotel Registered Successfully");
           
          }
          localStorage.setItem("user_info", JSON.stringify(result));
        });
        }
        },
        cancelAction(){

        }
      }
        
     
     </script>
     
     <!-- Add "scoped" attribute to limit CSS to this component only -->
     <style scoped>
 .card-img-top{
  border-radius: 50px;
  height: 186px;
    width: 261px;
 }
 label{
  float:left;
  color:red;
 }
 .form-control{
  border: 3px solid lightcyan;
    background-color: skyblue;

 }
 .form-control:focus{
  border:3px solid lightcyan;
  background-color: #fff;

 }
     </style>
     