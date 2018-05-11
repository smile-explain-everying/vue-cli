<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 导航 -->
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">hi页面</router-link>
      <router-link :to="{name:'hi1',params:{username:'jspang',id:'888'}}">hi1页面</router-link>
      <router-link to='/hi/hi2'>hi2页面</router-link>
    </div> 
    <p>
      {{ $route.name}}
    </p>
    <router-view></router-view>
    <router-view name="left" style="float:left;width:50%;height:300px;background:orange"></router-view>
    <router-view name="right" style="float:right;width:50%;height:300px;background:red"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
