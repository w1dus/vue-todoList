

<template>
  <h1>{{message}}</h1>
  <button @click="reserveMessage">reverse Message</button>
  <!-- <button @click="message += '!'">Append "!"</button> -->
  <button @click="appendI">Append "!"</button>
  <a href="https://www.naver.com" @click.prevent="notify">네이버 링크 이동이지만, preventDefault()</a>
</template>

<style>
  button{ display: block; margin: 0 auto; margin-bottom: 10px;  }
</style>

<script>
export default {
  data(){
    return{
      message: "Hello World!",
    }
  },
  methods:{
    appendI(){
      this.message += '!';
    },
    reserveMessage(){
      // console.log(this.message);
      this.message = this.message.split('').reverse().join('');
      // console.log(this.message)
    },
    notify(){
      alert('navigation was prevented.')
      //e.preventDefault(); 를 하고싶으면 @click.prevent를 꼭 써주자!
    }
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
</style>
