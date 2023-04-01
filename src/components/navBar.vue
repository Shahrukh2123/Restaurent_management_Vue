<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="col-lg-12" style="margin-top: -108px;">
    <nav class="navbar sticky-top navbar-light bg-white shadow-sm p-3 mb-5 bg-body rounded" style="background-color: white;height:49px;border-bottom: 1px solid; border-color: #ccc;position: fixed;width: 100%;">
  <a class="navbar-brand" href="#">
    <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022011/fourpointssheraton-converted.png?itok=3HdxuhXG" class="logoImg" alt="" width="150" height="100">
  </a>
  <form class="d-flex">

      <a style="float: right;
    font-size: 24px;
    position: relative;
    top: -54px;" v:on-click="logout()" type="button"><i style="color:#004772;" class="fa fa-sign-out" aria-hidden="true"></i></a>
    </form>
    </nav>

</div>
    </template>
    
    <script>
    import swal from 'sweetalert';
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Navbar',
    data(){
        return{
            email: "",
      password: "",
      list: undefined,
      name: "",
              
        }
        
    },
        methods:{
          logout(){
            alert("logout");
        swal({
  title: "Are you sure? You want to Logout",
  icon: "info",
  buttons: true,
  dangerMode: true,
})
.then((willLogout) => {
  if (willLogout) {
    this.$router.push({ name: 'Login' });
  } 
});
        
      }
        }
    }
    </script>
    
    <style>
   .logoImg{
      position: relative;
      top: -3.2rem;
   }
  
    
    </style>