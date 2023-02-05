
<template>
  <div class="content-section" style="display:flex;justify-content: space-between;">
  <div class="col-md-7 mx-auto" style="margin-top: -60px;width: 65vw;">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6f/a3/35/the-carousel-hotel-blackpool.jpg?w=700&h=-1&s=1" class="d-block w-100 alt11" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v18535910-1440.jpg" class="d-block w-100 alt11" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://carouselhotel.com/assets/images/galleries/152/1-home-gallery_home_gallery.jpg" class="d-block w-100 alt11" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
 <div class="col-md-4 mx-auto mt-5">
        <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-header bg-info">
                <img src="">
            <h4>Forgot Password?</h4>
            <img src="../images/forgotpssword.png
            " style="border-radius: 50px; width: 100px;background: mediumvioletred;">
            </div>
            <div class="card-body">
                <div class="form-group">
               <input class="form-control" v-model="email" placeholder="enter your email" type="email">
               <label>Your Current Password is {{ recoverpassword }}</label>
                </div><br />
              
               <div class="group" style="justify-content:space-around;display: flex;">
                <button class="btn btn-success col-md-4" v-on:click="reset()">Reset</button> 
                <button class="btn btn-danger col-md-4" v-on:click="cancelSection()">Cancel</button>
               </div>
               </div>
    </div>
    </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
// eslint-disable-next-line no-undef, vue/multi-word-component-names
name:'forgot',
data() {
    return {
      list: [],
      recoverpassword:''
    };
  },
methods:{
  reset(){
    
    var  result = axios.get(
          "https://fakestoreapi.com/users?email=" +this.email)
        .then((response) => {
          if (response.status === 200 && response.data.length > 0) {
            alert("Password Recovered Successfully");
           
            this.list=response.data;
            this.list.find((item)=>{
              if(item.email==this.email){
                this.recoverpassword=item.password;
                
              }
            })

            
            console.log(result)
          }
        });

    
  },
  cancelSection(){
    this.$router.push({ name: "Login" });
  }
}
}
</script>

<style>
.alt11{
    height: 100vh;
}

</style>