<template>
    <body>
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 mx-auto mt-5">
                <div class="card shadow p-3 mb-5 bg-body rounded">
                    <div class="card-header bg-info">
                        <img src="../images/login.jpg" style="border-radius: 50px; width: 100px;background: mediumvioletred;">
                    <h4>Login</h4>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                       <input class="form-control" placeholder="enter your email" v-model="email" type="email">
                        </div><br />
                      <div class="form-group">
                       <input class="form-control" placeholder="enter your password" v-model="password" type="password">
                      </div><br />
                       <div class="group" style="justify-content:space-around;display: flex;">
                        <button class="btn btn-success col-md-4" v-on:click="login()">Login</button> 
                        <button class="btn btn-danger col-md-4" v-on:click="cancel()">Cancel</button>
                       </div>
                       <div class="links mx-auto" style="display:flex;justify-content: space-between;">
                        <router-link to="/signup">SignUp</router-link>
                        <router-link to="/forgot">forgot Password?</router-link>
                       </div>
                       </div>
            </div>
            </div>

        </div>

    </div>
    <img src="../images/myproject.png" id="imageicon">
    </body>
    

</template>


<script>
import axios from 'axios'
import swal from 'sweetalert'
export default{
    
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Login',
    data(){
        return{
            email: "",
      password: "",
      list: undefined,
      name: "",
              
        }
        
    },
    methods: {
      login() {
      var  result = axios
        .get(
          "https://jsonplaceholder.typicode.com/users?email=" +
            this.email
        )
        .then((response) => {
          if (response.status === 200 && response.data.length > 0) {
            swal("Login Successfully", "", "success");
             console.log(result)
            localStorage.setItem(
              "user_info",
              JSON.stringify({
                email: this.email,
                password: this.password,
                name: response.data.name,
              })
            );
            this.$router.push({ name: 'Home' });
          } else{
            swal({
  title: "Invalid Credential",
  "text":"Please try again letter",
  icon: "danger",
  buttons: true,
  dangerMode: true,
})
          }
        });
    },
  },
    
}
</script>

<style>

#imageicon{
    height: 300px;
    vertical-align: middle;
    position: relative;
    left: 18%;
    margin-top: -57%;
}
a{
  font-size: 16px;
    color: lightblue;
    text-decoration: none;
    margin-top: 12px;
    font-weight: 500;
}


</style>