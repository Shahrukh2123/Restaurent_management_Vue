<template>
    <div class="row">
    <div class="container" style="width: 100vw;margin-left: -12px;">
   <div class="col-md-3 mt-5">
    <Header></Header>
   </div>
   <div class="col-md-9 mt-5" style="float: right;">
    <div class="card-container" style="display: flex;justify-content: space-between;margin-top: -78px;">
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
       <img class="card-img-top img-thumbnail" src="https://media.istockphoto.com/id/1163498940/photo/interior-of-a-modern-luxury-hotel-double-bed-bedroom.jpg?s=612x612&w=0&k=20&c=75KFjgY3RHrQq2yTV4boA4A89qMeccMQZotFKIMURS8=" alt="Card image cap">
       <div class="card-body">
        <h5 class="card-text text-danger">Book Delux Room </h5>
        <button type="button" class="btn btn-info">Book</button>
        </div>
     </div>
     <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
       <img class="card-img-top img-thumbnail" src="https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Card image cap">
       <div class="card-body">
        <h5 class="card-text text-danger">Book Convection Hall </h5>
        <button type="button" class="btn btn-info">Book</button>
        </div>
     </div>
     <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
       <img class="card-img-top img-thumbnail" src="https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=" alt="Card image cap">
       <div class="card-body">
        <h5 class="card-text text-danger">Book SuperDelux Room</h5>
        <button type="button" class="btn btn-info">Click Here</button>
        </div>
     </div>
    </div>
    <div class="card-container" style="display: flex;justify-content: space-between;">
      <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
       <img class="card-img-top img-thumbnail" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/06/grain-bowl-1296x728-header.jpg?w=1155&h=1528" alt="Card image cap">
       <div class="card-body">
        <h5 class="card-text text-danger">Order Delicious Dinner </h5>
        <button type="button" class="btn btn-warning">Order Dinner</button>
        </div>
     </div>
     <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
       <img class="card-img-top img-thumbnail" src="https://static.toiimg.com/photo/msid-92406590/92406590.jpg?90240" alt="Card image cap">
       <div class="card-body">
        <h5 class="card-text text-danger">Order Fresh Breakfast </h5>
        <button type="button" class="btn btn-warning">Book Dinner</button>
        </div>
     </div>
     <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
       <img class="card-img-top img-thumbnail" src="https://static.toiimg.com/thumb/90934370.cms?width=400&height=300&resizemode=4&imgsize=222624" alt="Card image cap">
       <div class="card-body">
        <h5 class="card-text text-danger">Order Crispy Lunch </h5>
        <button type="button" class="btn btn-warning">Order Lunch</button>
        </div>
     </div>
    </div>
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
       name: 'Dashboard',
       components:{
        Header,Navbar
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
    
     </style>
     