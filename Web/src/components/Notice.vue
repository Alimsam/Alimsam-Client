<template>
  <div class="snowflakes" aria-hidden="true">
      <div class="snowflake">❄</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❄</div>
  <div class="hello">
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
    <div class="pngdiv">
      <img src="../assets/notice.png" width="40%" class="pngstyle">
    </div>
    <div class="hellodiv">
      <p class="plznotice">공지사항이 없습니다 새로운 공지사항을 등록해보세요!</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return{
      
    }
  },
  methods: {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:800&display=swap&subset=korean');
@import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css');

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

 .topimg{
    margin-top: 0.8%;
  }

  .copyright{
    padding-top: 50%;
    font-size:0.8em;
    color: #859199;
  }

  .copydiv{
    text-align: center;
  }

  .wrapper{
    display: flex;
    align-items: stretch;
  }

  .sidebar{
    z-index: 999;
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

  .pngdiv{
    text-align: center;
    margin-top: 8%;
    margin-left: 10%;
  }

  .hellodiv{
    text-align: center;
    margin-left: 10%;
  }

  .hellotext{
    font-family: 'NanumSquare', sans-serif;
    font-weight: 700;
    font-size: 2em;
    color:black;
  }

  .helloim{
    color:#6C63FF;
    font-size:1.5em;
  }

  .plznotice{
    font-family: 'NanumSquare', sans-serif;
    font-weight: 600;
    color:black;
    font-size:2em;
  }

  .snowflake {   color: black;   font-size: 1em;   font-family: Arial;   text-shadow: 0 0 1px #000; }   @-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}
</style>