<template>
    <div class="main">
        <FullCalendar
            defaultView="dayGridMonth"
            :plugins="calendarPlugins"
            :weekends="false"
            :events="events"
            :selectable="true"
            @select="handleSelect"
            @clickDate="handleDateClick"
            />
            {{school}}
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  created () {
    this.$http.get(`/calender`)
        .then((response) => {
          this.school = response.data
        })
        .catch((e)=>{
          console.log(e)
        })
  },
  data() {
    return {
      school : {},
        events:[
            { title: 'event 1', date: '2019-12-19' },
            { title: 'event 2', date: '2019-12-19' }
        ],
      calendarPlugins:[dayGridPlugin, interactionPlugin]
    }
  },
  methods:{
    handleDateClick(e){
      alert(e);
    },
    handleSelect(e){
      alert(e);
    }
  }
}

</script>

<style lang='scss'>

@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';

div.main{
    width:50%;
    height:50%;
    margin: 0 auto;
}

</style>