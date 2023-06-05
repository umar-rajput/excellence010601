<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <router-link to="/HelloWorld"></router-link> -->
    <!-- <h3>Go to next pages</h3>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/home/login">Login</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/profile/av">Av's Profile</router-link></li>
      <li><router-link to="/profile/dv">Dv's Profile</router-link></li>
      <li><router-link to="/profile/uv">Uv's Profile</router-link></li>
    </ul> -->
    <!-- <router-view></router-view> -->

    <!-- <CallApi/> -->
    <!-- <Products/> -->
    <!-- <AddCars/> -->
    <Bikes/>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import CallApi from './components/CallApi.vue';
// import Products from './components/Products.vue'
// import AddCars from './components/AddCars.vue'
import Bikes from './components/Bikes.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // CallApi,
    // Products,
    // AddCars,
    Bikes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* // h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// } */

</style>
