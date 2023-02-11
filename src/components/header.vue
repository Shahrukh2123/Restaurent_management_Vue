<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div id="wrapper" class="active">
      <!-- Sidebar -->
            <!-- Sidebar -->
      <div id="sidebar-wrapper">
      <ul id="sidebar_menu" class="sidebar-nav">
           <li class="sidebar-brand"><a id="menu-toggle" href="#"><img src="../images/admin.png" style="background:transparent;border-radius:50px;width: 66px;margin-bottom:12px;margin-top: 16px;margin-left: 0px;"><span id="main_icon" class="glyphicon glyphicon-align-justify"></span></a></li>
      </ul>
        <ul class="sidebar-nav" id="sidebar">     
          <li><router-link  to="/dashboard" style="color:white;"><i class="fa fa-home"></i>&nbsp;&nbsp;&nbsp;&nbsp;Home<span class="sub_icon glyphicon glyphicon-link"></span></router-link></li>
          <li><router-link  to="/add_hotel" style="color:white;"><i class="fa fa-hotel"></i>&nbsp;&nbsp;&nbsp;&nbsp;Add Hotel<span class="sub_icon glyphicon glyphicon-link"></span></router-link></li>
          <li><router-link  to="/hotel_list" style="color:white;"><i class="fa fa-hotel"></i>&nbsp;&nbsp;&nbsp;&nbsp;List of Hotels<span class="sub_icon glyphicon glyphicon-link"></span></router-link></li>
          <li style="text-align:initial"><a style="color:white;"><i class="fa fa-hotel"></i>&nbsp;&nbsp;&nbsp;&nbsp;Update Hotel<span class="sub_icon glyphicon glyphicon-link"></span></a></li>
          <li><a style="color:white;"><i class="fa fa-key"></i>&nbsp;&nbsp;&nbsp;&nbsp;Book Room<span class="sub_icon glyphicon glyphicon-link"></span></a></li>
          <li><a style="color:white;"><i class="fa fa-star"></i>&nbsp;&nbsp;&nbsp;&nbsp;Add Facility<span class="sub_icon glyphicon glyphicon-link"></span></a></li>
          <li><a style="color:white;" v-bind:on-click="logout()"><i class="fa fa-sign-out"></i>&nbsp;&nbsp;&nbsp;&nbsp;Log Out<span class="sub_icon glyphicon glyphicon-link"></span></a></li>
        </ul>
      </div>
          
      <!-- Page content -->
      <div id="page-content-wrapper">
        <!-- Keep all page content within the page-content inset div! -->
        <div class="page-content inset">
       
        </div>
      </div>
      
    </div>
    

</template>

<script>
import swal from 'sweetalert';
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Header',
    methods:{
      logout(){
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
.row{
    margin-left:0px;
    margin-right:0px;
}

#wrapper {
    padding-left: 70px;
    transition: all .4s ease 0s;
    height: 100%;
    
}

#sidebar-wrapper {
    margin-left: -150px;
    left: 70px;
    width: 150px;
    background-color: #004772;
    position: fixed;
    height: 100%;
    z-index: 10000;
    transition: all .4s ease 0s;
}

.sidebar-nav {
    display: block;
    float: left;
    width: 150px;
    list-style: none;
    margin: 0;
    padding: 0;
}
#page-content-wrapper {
    padding-left: 0;
    margin-left: 0;
    width: 100%;
    height: auto;
}
#wrapper.active {
    padding-left: 150px;
}
#wrapper.active #sidebar-wrapper {
    left: 150px;
    top:50px;
    box-shadow: 0 4px 8px 0 #0003, 0 6px 20px 0 #00000030;
    width:17vw;
}


#page-content-wrapper {
  width: 100%;
}

#sidebar_menu li a, .sidebar-nav li a {
    color: #fff;
    display: block;
    float: left;
    text-decoration: none;
    width: 230px;
    border-top: 1px solid #0b171f ;
    border-bottom: black;
    transition: background .5s;
    font-family: cursive;
}
.sidebar_name {
    padding-top: 25px;
    color: #fff;
    opacity: .7;
}

.sidebar-nav li {
  line-height: 40px;
  text-indent: 20px;
}

.sidebar-nav li a {
  color: #999999;
  display: block;
  text-decoration: none;
}

.sidebar-nav li a:hover {
  color: #fff;
  background: #fff3!important;
  text-decoration: none;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  height: 65px;
  line-height: 60px;
  font-size: 18px;
}

.sidebar-nav > .sidebar-brand a {
  color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}

#main_icon
{
    float:right;
   padding-right: 65px;
   padding-top:20px;
}
.sub_icon
{
    float:right;
   padding-right: 65px;
   padding-top:10px;
}
.content-header {
  height: 65px;
  line-height: 65px;
}

.content-header h1 {
  margin: 0;
  margin-left: 20px;
  line-height: 65px;
  display: inline-block;
}

@media (max-width:767px) {
    #wrapper {
    padding-left: 70px;
    transition: all .4s ease 0s;
}
#sidebar-wrapper {
    left: 70px;
}
#wrapper.active {
    padding-left: 150px;
}
#wrapper.active #sidebar-wrapper {
    left: 150px;
    width: 150px;
    transition: all .4s ease 0s;
}
}

</style>