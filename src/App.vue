

<template>

  <button @click="show = !show">Toggle List</button>
  <button @click="list.push(list.length + 1)">Push Number</button>
  <button @click="list.pop()">Pop Number</button>
  <button @click="list.reverse()">Reverse List</button>

  <ul v-if="show && list.length">
    <li v-for="item of list" v-bind:key="item.id">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">List is not empty. but hidden</p>
  <p v-else>list empty.</p>
</template>




<script>
export default {
  data(){
    return{
      show : true, 
      list : [1,2,3]
    }
  },
  // methos:{

  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
