<template>
<div>
    <div v-for="day in cardsOnday" v-bind:key="day.key" class="wrap">
      <div is="app-id" v-bind:pdata="cards[day]">
      </div>
    </div>    
</div>
</template>

<script>
import Vue from 'vue'
const date = new Date()
const curyear = date.getFullYear()
const curmonth = date.getMonth()+1
  export default {
    data() {
      return {
          todos: [{
            id: 1,
            title: "hi",
            name: 'mouse'
          },
          {
            id: 2,
            title: "bye",
            name: 'keyboard'
          }],
          cards: [],
          cardsOnday: []
      }
    },
    mounted () {
      this.$nextTick(()=>{
        this.$http.get('/school/calendar', {
          params: {
            year: curyear,
            month: curmonth
          },          
        }).then((response)=>{
        this.cards = response.data;
       for(let i = 1; i<=31; i++){
          if(response.data[i] !== ''){
            this.cardsOnday.push(i)                      
          }
        }                        
        Vue.component('app-id', {
            template: `<span>{{pdata}}</span>`,
            props : ['pdata']
        })         
        // for(let i = 1; i<=31; i++){
        //   if(response.data[i] !== ''){           
        //     this.fixcards = response.data[i]
        //     console.log(i, this.fixcards)          
        //   }
        // }
        })
      })
    }
  }
</script>