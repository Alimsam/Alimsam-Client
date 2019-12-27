<template>
  <div class="wrap">
    {{school}}
      <!-- <b-card>
          header="SchoolFood"
          <b-card-text>

          </b-card-text>
      </b-card> -->
  </div>
</template>
<script>
export default {
  created () {
    this.$http.get(`/school`)
        .then((response) => {
          this.school = response
        })
        .catch((error)=>{
            console.log(error)
        })
  },
  data () {
    return {
      school: {}
    }
  }
}
</script>