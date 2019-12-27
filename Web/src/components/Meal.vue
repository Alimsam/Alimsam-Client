<template>
  <div class='app'>
    <div class="topnav">
      <img src="../assets/third.png" width="10%" class="topimg">
    </div>
    <div class = "wrapper">
      <nav class="sidebar">
        <button class="sidebar-header" v-on:click="gotoMain('MainNext')">
          <h2>알림쌤</h2>
        </button>
        <div class="group">
          <button class = "sidemenu" v-on:click="gotoMeal('Meal')"><span><img src="../assets/meal.png" width="40%" class="icon"></span><h4>급식확인</h4></button>
          <button class = "sidemenu" v-on:click="gotoNotice('Notice')"><span><img src="../assets/schedule.png" width="40%" class="icon"></span><h4>공지사항 확인</h4></button>
          <button class = "sidemenu" v-on:click="gotoOutting('Outting')"><span><img src="../assets/out.png" width="40%" class="icon"></span><h4>저녁외출</h4></button>
          <button class = "sidemenu" v-on:click="gotoMoving('Moving')"><span><img src="../assets/run.png" width="40%" class="icon"></span><h4>자습이동</h4></button>          
        </div>
        <div class = "copydiv"><p class = "copyright">Copyright.2019.MSD.All rights reserved.</p></div>
      </nav>
    </div>

    <div>
      <div class="meal_calender_btn">
        <button v-on:click="meal_true(true)" class = "brbtn">급식</button>      
        <button v-on:click="calender_true(false)" class = "lubtn">학사일정</button>      
      </div>
      
      <div v-if="show_boolean == true" class = "btn_group">
        <button v-on:click="BreakfastBtn('breakfast')" class = "brbtn">아침</button>     
        <button v-on:click="LunchBtn('lunch')" class = "lubtn">점심</button>
        <button v-on:click="DinnerBtn('dinner')" class = "dibtn">저녁</button>
      </div>
    </div>

    <div class="wrap">
      <div class="grid">
        <div class = "column" v-if="show_boolean == true">
          <b-card>
            <span class = "date">그제</span>
            <b-card-text>
              <p class="p_meal" v-if="meal_option == ''">{{meal_dbefore.breakfast}}</p>
              <p class="p_meal" v-if="meal_option == 'breakfast'">{{meal_dbefore.breakfast}}</p>
              <p class="p_meal" v-if="meal_option == 'lunch'">{{meal_dbefore.lunch}}</p>
              <p class="p_meal" v-if="meal_option == 'dinner'">{{meal_dbefore.dinner}}</p>

              <p v-if="meal_option == '' && meal_dbefore.breakfast == undefined" class = "hometext">{{hometext}}</p>
              <p v-if="meal_option == 'breakfast' && meal_dbefore.breakfast == undefined" class = "hometext">{{hometext}}</p>              
              <p v-if="meal_option == 'lunch' && meal_dbefore.lunch == undefined" class = "hometext">{{hometext}}</p>
              <p v-if="meal_option == 'dinner' && meal_dbefore.dinner == undefined" class = "hometext">{{hometext}}</p>
            </b-card-text>        
          </b-card>
        </div>
        <div class = "column" v-if="show_boolean == true">
          <b-card>
            <span class = "date">어제</span>
            <b-card-text>
              <p class="p_meal" v-if="meal_option == ''">{{meal_before.breakfast}}</p>
              <p class="p_meal" v-if="meal_option == 'breakfast'">{{meal_before.breakfast}}</p>
              <p class="p_meal" v-if="meal_option == 'lunch'">{{meal_before.lunch}}</p>
              <p class="p_meal" v-if="meal_option == 'dinner'">{{meal_before.dinner}}</p>

              <p v-if="meal_option == '' && meal_before.breakfast == undefined" class = "hometext">{{hometext}}</p>
              <p v-if="meal_option == 'breakfast' && meal_before.breakfast == undefined" class = "hometext">{{hometext}}</p>              
              <p v-if="meal_option == 'lunch' && meal_before.lunch == undefined" class = "hometext">{{hometext}}</p>
              <p v-if="meal_option == 'dinner' && meal_before.dinner == undefined" class = "hometext">{{hometext}}</p>
            </b-card-text>                     
          </b-card>
        </div>
        <div class = "columntoday" v-if="show_boolean == true">
          <span><img src="../assets/crown.png" width="20%"></span>
          <b-card class = "todaycard">
            <span class = "date">오늘</span>
            <b-card-text>
              <p class="p_meal" v-if="meal_option == ''">{{meal_cur.breakfast}}</p>
              <p class="p_meal" v-if="meal_option == 'breakfast'">{{meal_cur.breakfast}}</p>
              <p class="p_meal" v-if="meal_option == 'lunch'">{{meal_cur.lunch}}</p>              
              <p class="p_meal" v-if="meal_option == 'dinner'">{{meal_cur.dinner}}</p>
              
              <p v-if="meal_option == '' && meal_cur.breakfast == undefined" class = "hometext">{{hometext}}</p>
              <p v-if="meal_option == 'breakfast' && meal_cur.breakfast == undefined" class = "hometext">{{hometext}}</p>              
              <p v-if="meal_option == 'lunch' && meal_cur.lunch == undefined" class = "hometext">{{hometext}}</p>
              <p v-if="meal_option == 'dinner' && meal_cur.dinner == undefined" class = "hometext">{{hometext}}</p>
            </b-card-text>                     
          </b-card>        
        </div>
        <div class = "column" v-if="show_boolean == true">
          <b-card>
            <span class = "date">내일</span>
            <b-card-text>
              <p class="p_meal" v-if="meal_option == ''">{{meal_next.breakfast}}</p>
              <p class="p_meal" v-if="meal_option == 'breakfast'">{{meal_next.breakfast}}</p>
              <p class="p_meal" v-if="meal_option == 'lunch'">{{meal_next.lunch}}</p>
              <p class="p_meal" v-if="meal_option == 'dinner'">{{meal_next.dinner}}</p>

              <p v-if="meal_option == '' && meal_next.breakfast == undefined" class = "hometext">{{hometext}}</p>
              <p v-if="meal_option == 'breakfast' && meal_next.breakfast == undefined" class = "hometext">{{hometext}}</p>              
              <p v-if="meal_option == 'lunch' && meal_next.lunch == undefined" class = "hometext">{{hometext}}</p>
              <p v-if="meal_option == 'dinner' && meal_next.dinner == undefined" class = "hometext">{{hometext}}</p>   
            </b-card-text>
          </b-card>    
        </div>
        <div class = "column" v-if="show_boolean == true">
          <b-card>
            <span class = "date">모레</span>
            <b-card-text>
              <p class="p_meal" v-if="meal_option == ''">{{meal_dnext.breakfast}}</p>
              <p class="p_meal" v-if="meal_option == 'breakfast'">{{meal_dnext.breakfast}}</p>
              <p class="p_meal" v-if="meal_option == 'lunch'">{{meal_dnext.lunch}}</p>
              <p class="p_meal" v-if="meal_option == 'dinner'">{{meal_dnext.dinner}}</p>

              <p v-if="meal_option == '' && meal_dnext.breakfast == undefined" class = "hometext">{{hometext}}</p>
              <p v-if="meal_option == 'breakfast' && meal_dnext.breakfast == undefined" class = "hometext">{{hometext}}</p>              
              <p v-if="meal_option == 'lunch' && meal_dnext.lunch == undefined" class = "hometext">{{hometext}}</p>
              <p v-if="meal_option == 'dinner' && meal_dnext.dinner == undefined" class = "hometext">{{hometext}}</p>   
            </b-card-text>            
          </b-card>    
        </div>

        <!-- 학사일정 -->
        <div v-if="show_boolean == false" class = "uldiv">
          <ul v-for="day in cardsOnday" v-bind:key="day.key" class="list-group list-group-flush">
            <span><span class = "cal_when_num">{{curmonth}}</span><span class = "cal_when_ko">월</span> <span class = "cal_when_num">{{day}}</span><span class = "cal_when_ko">일</span></span><div is = "app-id" v-bind:pdata="cards[day]" class="cal_text"></div>
          </ul>
        </div>
        <!-- 학사일정 -->
        <div class = "column" v-if="show_boolean == true">
          <b-card>
            <span class = "date">※ 필독 ※</span>
            <b-card-text v-if="show_boolean == true">
              <br>
              <p class = "notice">급식이 맛 없더라도<br>
                잔반을 최소한으로 줄이는<br>
                자랑스러운 GSM학생이 되도록 합시다.</p>
            </b-card-text>            
          </b-card>   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('app-id', {
  template: `<li class="list-group-item">{{pdata}}</li>`,
          props: ['pdata']
})
const date = new Date()
const curyear = date.getFullYear()
const curmonth = date.getMonth()+1
let curday = date.getDate()

let dbefore = curday-2
let before = curday-1
let next = curday+1
let dnext = curday+2

const endday = (new Date(curyear, curmonth, 0)).getDate()


export default {
  computed: {

  },
  created () {
    console.log("created")
    const loadingText = '빨리 로딩되라..'
    this.meal_dbefroe = loadingText
    this.meal_before = loadingText
    this.meal_cur = loadingText
    this.meal_next = loadingText
    this.meal_dnext = loadingText

  },
  mounted () {
    this.$nextTick(()=>{
      this.$http.get('/school/calendar', {
        params: {
          year: curyear,
          month: curmonth
        },
      }).then((response) => {
      this.cards = response.data;        
       for(let i = 1; i<=31; i++){
          if(response.data[i] !== ''){
            this.cardsOnday.push(i)                      
          }
        }        

      }).catch(e => {
        console.log("ERROR " + e)
      })
      })
      this.$http.get('/school/meal', {
        params: {
          year: curyear,
          month: curmonth
      },
      }).then((response) => {
        if(curday==endday){
          next = 1
          dnext = 2
        }
        this.meal_dbefore = (response.data[dbefore])
        this.meal_before = (response.data[before])
        this.meal_cur =  (response.data[curday])
        this.meal_next = (response.data[next])
        this.meal_dnext = (response.data[dnext])
        console.log(this.meal_cur)
      }).catch(e => {
        console.log("ERROR " + e)
      })
  },
  components: {
    
  },
  data: function() {
    return {
      hometext: '따뜻한 집밥으로 힐링',
      curmonth: curmonth,
      curday: curday,
      cards: [],
      cardsOnday: [],

      show_boolean: true,

      meal_dbefore: [],
      meal_before: [],
      meal_cur: [],
      meal_next: [],
      meal_dnext: [],
      meal_option: [],

      calendar_dbefore: [],
      calendar_before: [],
      calendar_cur: [],
      calendar_next: [],
      calendar_dnext: [],

    }
  },
  methods: {
      meal_true(boolean) {
        this.show_boolean = boolean
        console.log(this.show_boolean)
      },

      calender_true(boolean) {
        this.show_boolean = boolean
        console.log(this.show_boolean)
      },

      gotoMain(option) {
        this.$router.push({name : option})
      },
      gotoMeal(option) {
        this.$router.push({name : option})
      },
      gotoNotice(option) {
        this.$router.push({name : option})
      },
      gotoOutting(option) {
        this.$router.push({name : option})
      },
      gotoMoving(option) {
        this.$router.push({name : option})
      },

      LunchBtn(option) {
        this.meal_option = ''
        this.meal_option = option
      },

      BreakfastBtn(option) {
        this.meal_option = ''
        this.meal_option = option
      },

      DinnerBtn(option) {
        this.meal_option = ''
        this.meal_option = option
      },
    },
  }
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap');
@import url('https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap&subset=korean');

.topnav{
  background-color: white;
  overflow: hidden;
  width: 100%;
  height: 70px;
  box-shadow: 0px 8px 15px rgba(231, 175, 175, 0.1);
  text-align: right;
  vertical-align: center;
  padding-right:4%;
}

.copyright{
  padding-top: 50%;
  font-size:0.8em;
  color: #859199;
}

.copydiv{
  text-align: center;
}

.topimg{
  margin-top: 0.8%;
}

.wrapper{
  display: flex;
  align-items: stretch;
}

.sidebar{
  position: fixed;
  min-width: 12%;
  max-width: 12%;
  height: 100vh;
  float:left;
  background-color:#2F3436;
  display: table;
}

.sidebar .sidebar-header {
  margin: 3%;
  width: 94%;
  padding: 20px;
  background-color: #383D40;
  font-family: 'Noto Sans KR', sans-serif;
  color: white;
  border-radius: 10px;
  border: 0;
  outline: 0
}

  .group{
    margin:3%;
    vertical-align: middle;
    background-color: #383D40;
    border-radius: 10px;
  }

  .icon{
    margin:2%;
  }

  .sidemenu{
    padding:5%;
    font-family: 'Nanum Gothic', sans-serif;
    border:0;
    outline: 0;
    background-color: transparent;
    display:table-cell;
    width: 100%;
    color : #859199;
    vertical-align: middle;

  }

  .sidemenu:hover{
    background-color:#40464A;
    color: white;
  }

  .date{
    font-size: 2em;
    font-family: 'Yeon Sung', cursive;
  }

p .hometext{
    font-family: 'Nanum Pen Script', cursive;
    font-size: 1.8em;
    color: #FFCD74;
  }

.grid{
  display:inline-block;
  width: 100%;
  padding-left:18%;
  padding-right: 0%;
}

.column, .columntoday{
  display: inline;
  float:left;
  text-align: center;
  margin: 1%;
  width:14%;
}

.uldiv{
  width:95%
}

.cal_when_ko{
  font-size:1.2em;
  font-family: 'Nanum Gothic', sans-serif;
}

.cal_when_num{
    font-size: 2em;
    font-family: 'Yeon Sung', cursive;  
}

.cal_text{
  color:  #6C63FF;
  font-size: 1.2em;
  font-family: 'Noto Sans KR', sans-serif;  
}


.card.todaycard{
  margin-top: -0.1%;
}

.schbtn {
  float:right
}

p .p_meal, .p_calendar{
  color:  #6C63FF;
  font-size: 1.2em;
  white-space: pre-wrap;
  font-family: 'Noto Sans KR', sans-serif;
}

p .notice{
  font-size: 1.2em;
  font-family: 'Noto Sans KR', sans-serif;
}

.meal_calender_btn{
  text-align:right;
  margin-top:2%;
  margin-right:4%;
}

.meal_calender_btn button{
  border-top: 5px solid #A0A6E8;
  border-bottom : 5px solid #A0A6E8;
  background-color: rgba(0,0,0,0);
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  padding:1%;
  font-size: 1.5em;
  text-align:center;
  min-width:7%  
}

.meal_calender_btn button:hover{
  color:white;
  background-color: #A0A6E8  
}

.btn_group{
  text-align:right;
  margin-top:2%;
  margin-right:4%;
}

.btn_group button {
  border-top: 5px solid #A0A6E8;
  border-bottom : 5px solid #A0A6E8;
  background-color: rgba(0,0,0,0);
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  padding:1%;
  font-size: 1.5em;
  text-align:center;
}

.btn_group button:hover{
  color:white;
  background-color: #A0A6E8
}

.brbtn{
  border-top-left-radius: 10%;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  border-right: 5px solid #A0A6E8;
}

.brbtn:hover, .lubtn:hover, .dibtn:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

.lubtn{
  outline: 0;
  border: 0;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
}

.dibtn{
  border-bottom-right-radius: 10%;
  border-right:0;
  border-left: 5px solid #A0A6E8;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);  
}

.card{
  width: 100%;
  margin-top: 20%;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  cursor: pointer;
}

.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}


</style>