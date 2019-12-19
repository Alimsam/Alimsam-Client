<template>
  <div class="wrap">
    <h1>Human</h1>
    <ul class="people">
      <div v-for="(human, idx) in people" :key ="idx">
        <span class="rank">{{human.id}}</span>
        <div class="detail">
          <strong class="tit">{{human.name}}</strong>
          <router-link :to="{ name: 'human', params: { id: human.id}}">1 info</router-link>
        </div>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  created () {      
    this.$http.get('/api/people')
        .then((response) => {
          this.people = response.data
        })
  },
  data () {
    return {
      people: []
    }
  }
}
</script>

