import { createWebHistory,createRouter } from "vue-router";
import Login from './components/Login.vue';
import signup from './components/signup.vue';
import forgot from './components/forgot_password.vue'
import Home from './components/home.vue'
import Dashboard from './components/Dashboard.vue'
import AddHotel from './components/AddHotel.vue'
import HotelList from './components/HotelList.vue'

const routes=[
{
    name:'Login',
    path:'/login',
    component:Login,
},
{
    name:'AddHotel',
    path:'/add_hotel',
    component:AddHotel,
},
{
    name:'HotelList',
    path:'/hotel_list',
    component:HotelList,
},
{
    name:'Dashboard',
    path:'/dashboard',
    // eslint-disable-next-line no-undef
    component:Dashboard,
},
{
    name:'Login',
    path:'/',
    component:Login,
},
{
    name:'signup',
    path:'/signup',
    // eslint-disable-next-line no-undef
    component:signup,
},
{
    name:'forgot',
    path:'/forgot',
    // eslint-disable-next-line no-undef
    component:forgot
},
{
    name:'Home',
    path:'/home_page',
    // eslint-disable-next-line no-undef
    component:Home
}
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router