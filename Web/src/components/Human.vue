<template>
  <div class="wrap">
    <h1>Human info</h1>
        {{human}}
    <router-link :to="{ name: 'index', params: { id: human.id }}">Go back</router-link>
  </div>
</template>
<script>
export default {
  created () {    
    const id = this.$route.params.id;  
    this.$http.get(`/api/people/${id}`)
        .then((response) => {
          this.human = response.data
        })
  },
  data () {
    return {
      human: {}
    }
  }
}
</script>