<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2>Users are</h2>
    <ul>
      <li v-for="user in users">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  let allUsers = [{'body': 'something'}, {'body': 'something else'}]
  async function getUsers () {
//    const myUsers = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const myUsers = await axios.get('/api/users')

    console.log(myUsers.data)
    this.users = myUsers.data
  }
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        users: allUsers
      }
    },
//    async created () {
    created () {
//      allUsers = await axios.get('https://jsonplaceholder.typicode.com/posts')
//      console.log('async stuff')
//      this.users = allUsers.data
//      getUsers.bind(this)()
      getUsers.call(this)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
