<template>
    <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components: {
  }
}
</script>

<style lang="css">

body, html { margin: 0; height: 100%; } 

</style>
