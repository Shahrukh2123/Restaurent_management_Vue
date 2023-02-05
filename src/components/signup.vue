
<template>

        <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-header bg-warning">
                    <img src="">
                <h4>Sign Up</h4>
                <p class="text-dark"> Already a customer ? <span class="router-link"><router-link to="/login">Log In</router-link></span></p>
                <img src="../images/signup_thumbnail.png" style="border-radius: 50px; width: 80px;background: mediumvioletred;">
                </div>
                <div class="card-body">
                    <div class="form-group">
                   <input class="form-control" v-model="email" placeholder="enter your email" type="email">
                    </div><br />
                  <div class="form-group">
                   <input class="form-control" v-model="password" placeholder="enter your password" type="password">
                  </div><br />
                   <div class="form-group">
                    <input class="form-control" v-model="password" placeholder="enter your confirm password" type="password">
                   </div><br />
                    <div class="form-group">
                        <input class="form-control" v-model="phone" placeholder="enter your mobile number" type="number">
                       </div><br />
                       <div class="form-group">
                        <input class="form-control"  v-model="username" placeholder="enter your name" type="string">
                       </div><br />
                   <div class="group" style="justify-content:space-around;display: flex;">
                    <button class="btn btn-success col-md-4" v-on:click="register()">Sign up</button> 
                    <button class="btn btn-danger col-md-4" v-on:click="cancel()">Cancel</button>
                   </div>
                   </div>
        </div>
        </div>
</template>


<script>
import axios from 'axios'
export default {
    // eslint-disable-next-line no-undef, vue/multi-word-component-names
    name:'signup',
    methods:{
        register(){
            let result = axios
        .post("https://fakestoreapi.com/users", {
          username: this.username,
          email: this.email,
          phone:this.phone,
          password: this.password,
        })
        .then((response) => {
          if (response.status === 200) {
            alert("Customer Registered Successfully");
            this.$router.push({ name: "Login" });
          }
          localStorage.setItem("user_info", JSON.stringify(result));
        });
        }
    }
}
</script>

<style>

</style>