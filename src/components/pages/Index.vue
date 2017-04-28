<template lang="pug">
  #app
    img.vue(src="./../../assets/logo.png")
    p 我
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  p
    color red
</style>
