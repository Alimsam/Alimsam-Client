<template>
  <div class="wrap">
    <section>
      <div class = "main-grid">
        <div class = "main-text">
          <div></div>
          <div><img src="../assets/first.png" width="29%"></div>
          <div><img src="../assets/second.png" width="45%"></div>
          <div><img src="../assets/third.png" width="45%"></div>
          <div><p>Beta v0.1 AlimSam</p></div>
        </div>
        <div class = "main">
          <img src="../assets/Main.png" width="100%" height="100%">
        </div>
      </div>
      <div class = "start">
          <router-link :to="{ name: 'MainNext'}" tag="button" class="button">알림쌤</router-link>
      </div>
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
    </section>
  </div>
</template>
<script>
export default {
  created () {
  },
  data () {
    return {
      human: {},
    }
  }
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:500&display=swap');
.main-grid{
  display:grid;
  grid-template-columns: 50% 50%;
  margin-top:2%;
  margin-bottom: 13%;
  
}

.main-text{
  display: grid;
  grid-template-rows: 35% 15% 15% 15% 35%;
  text-align: left;
  margin-left: 20%;
}

.start{
    display: flex;
    align-items: center;
    justify-content: center;
}

.button{
    width:15%;
    height: 15%;
    font-size: 2.5em;
    font-family: 'Noto Sans KR', sans-serif;
    color: white;
    font-weight: 500;
    border:none;
    border-radius: 20px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease 0s;
    background-color:#A0A6E8;
    cursor: pointer;
    outline: none;
}

.button:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.7);
  color: #fff;
  transform: translateY(-7px);
}

section{
  position: relative;
  width:100%;
  height:100vh;
  overflow: hidden;
}

section .wave{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('../assets/wave.png');
  background-size: 1000px 100px
}
/* 
section .wave1{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('../assets/wave1.png');
  background-size: 1000px 100px
} */


section .wave.wave1{
  animation: animate 30s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}

section .wave.wave2{
  animation: animate2 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}

section .wave.wave3{
  animation: animate 30s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15;
}

section .wave.wave4{
  animation: animate2 5s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
}


@keyframes animate{
  0%
  {
    background-position-x: 0;
  }
  100%
  {
    background-position-x: 1000px;
  }
}

@keyframes animate2{
  0%
  {
    background-position-x: 0;
  }
  100%
  {
    background-position-x: -1000px;
  }
}
</style>