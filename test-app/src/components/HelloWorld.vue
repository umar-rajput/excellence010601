<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p> -->
    <h3>Go to next pages</h3>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/profile/av">Av's Profile</router-link></li>
      <li><router-link to="/profile/dv">Dv's Profile</router-link></li>
      <li><router-link to="/profile/uv">Uv's Profile</router-link></li>
    </ul>

    <Transition>
      <router-view></router-view>
    </Transition>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
