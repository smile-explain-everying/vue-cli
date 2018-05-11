<template>
  <div>
    <h2>{{msg}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'i am hi page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
