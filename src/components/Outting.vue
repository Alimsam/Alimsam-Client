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
      <img src="../assets/third.png" width="10%" class="topimg" v-on:click="realMain('Main')">
    </div>    
    <div class = "wrapper">
      <nav class="sidebar">
        <div class="header">
          <button class="sidebar-header" v-on:click="gotoMain('MainNext')">
            <h2><b>AlimSam</b></h2>
          </button>          
        </div>
        <div class="group">
          <button class = "sidemenu" v-on:click="gotoMeal('Meal')"><span><img src="../assets/meal2.png" width="40%" class="icon"></span><span><img src="../assets/school.png" width="40%" class="icon"></span><h4><b>급식/학사일정 확인</b></h4></button>
          <button class = "sidemenu" v-on:click="gotoNotice('Notice')"><span><img src="../assets/schedule.png" width="40%" class="icon"></span><h4><b>공지사항 확인</b></h4></button>
          <button class = "sidemenu" v-on:click="gotoOutting('Outting')"><span><img src="../assets/out.png" width="40%" class="icon"></span><h4><b>저녁외출</b></h4></button>
          <button class = "sidemenu" v-on:click="gotoMoving('Moving')"><span><img src="../assets/run2.png" width="40%" class="icon"></span><h4><b>자습이동</b></h4></button>          
        </div>
        <div class = "copydiv"><p class = "copyright">Copyright.2019.MSD.All rights reserved.</p></div>
      </nav>
    </div>
    <div class="pngdiv">
      <img src="../assets/outting.png" width="50%" class="pngstyle">

    </div>

    <div class="hellodiv">
      <b-button v-b-modal.modal-out variant="outline-primary" class = "plznotice" v-on:click="go_out()">외출 / 복귀하기</b-button>
      <b-button v-b-modal.prohibit-out variant="outline-primary" class = "DontOut_text"><b>외출 금지</b></b-button>
      <div>
        <button v-b-modal.modal-prevent-closing class = "register_finger">아직 지문을 등록하지 않으셨다면?</button>
      </div>

        <b-modal 
        hide-footer="true"
        id="modal-prevent-closing"
        ref="modal"
        title="학생분의 이름과 학번을 입력해주세요!"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        >
            <ValidationObserver v-slot="{invalid}">
                <form @submit.prevent="onSubmit" method="GET">
                    <ValidationProvider :rules="{ regex: /[(가-힣)]/gi }" v-slot="{ errors }" name="이름">
                      <div class = "form_group">
                        <input v-model="name" type="text" placeholder="이름" class = "form_field" id="name" autocomplete="off">
                        <label for="name" class="form_label">이름</label>
                        <div class = "form_error">{{ errors[0] }}</div>
                      </div>
                    </ValidationProvider>
                    <ValidationProvider rules="required|integer" v-slot="{ errors }" name="학번">
                     <div class = "form_group">
                        <input v-model="studentID" type="text" placeholder="학번(ex 1학년 1반 6번: 1106)" class = "form_field" id="ID" autocomplete="off">
                        <label for="ID" class="form_label">학번(ex 1학년 1반 6번: 1106)</label>
                        <div class = "form_error">{{ errors[0] }}</div>
                      </div>                      
                    </ValidationProvider>
                    <div>
                        <button v-b-modal.modal-center type="submit" class="form_submit" :disabled="invalid">등록하기</button>                        
                    </div>                    
                </form>
            </ValidationObserver>
            <b-modal 
            id="modal-center" 
            centered title="FingerPrint" 
            hide-footer="true"
            no-close-on-backdrop
            >
                <div class="fingerbtn_img">
                    <img src="../assets/fingerp.png" width="30%">
                </div>
                <p class="my-4">지문인식 기계에 지문을 두 번 대주세요</p>
            </b-modal>
        </b-modal>

        <b-modal 
        id="modal-out" 
        centered title="FingerPrint" 
        hide-footer="true"
        no-close-on-backdrop
        >
            <div class="fingerbtn_img">
                <img src="../assets/fingerp.png" width="30%">
            </div>
            <p class="my-4">지문인식 기계에 지문을 한 번 대주세요</p>
        </b-modal>

          <b-modal
            hide-header-close
            hide-footer="true"
            id="prohibit-out"
            ref="modal"
            title="학년부 선생님이신가요? 키를 입력해주세요."
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
            >

            <ValidationObserver v-slot="{invalid}" v-if="key_success_option == ''">
                <form @submit.prevent="prohibit_checkValue">
                    <ValidationProvider rules="required|integer" v-slot="{ errors }" name="키">
                        <div class = "form_group">
                            <input v-model="key" type="text" placeholder="키" class = "form_field" id="key" autocomplete="off">
                            <label for="key" class="form_label">키</label>
                            <div class = "form_error">{{ errors[0] }}</div>
                        </div>
                    </ValidationProvider>
                    <div>
                        <button type="submit" class="form_submit" :disabled="invalid">인증하기</button>
                    </div>
                </form>
            </ValidationObserver>

          <div v-if="key_success_option == true">
            <p class="grade_text"><b>{{option_value}}</b></p>
            <b-button v-b-modal.prohibit-out-add class="fingerbtn">추가하기</b-button>            

            <b-modal
            hide-footer="true"
            id="prohibit-out-add"
            ref="modal"
            title="금지시킬 학생의 학번을 입력해주세요!"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
            >
                <ValidationObserver v-slot="{invalid}">
                    <form @submit.prevent="onProhibit" method="GET">
                        <ValidationProvider rules="required|integer" v-slot="{ errors }" name="학번">
                        <div class = "form_group">
                            <input v-model="studentID" type="text" placeholder="학번(ex 1학년 1반 6번: 1106)" class = "form_field" id="ID" autocomplete="off">
                            <label for="ID" class="form_label">학번(ex 1학년 1반 6번: 1106)</label>
                            <div class = "form_error">{{ errors[0] }}</div>
                          </div>                      
                        </ValidationProvider>
                        <div>
                            <button type="submit" class="form_submit" :disabled="invalid">등록하기</button>                        
                        </div>                    
                    </form>
                </ValidationObserver>
            </b-modal>
          </div>
        </b-modal>
    </div>
  </div>
</div>
</template>

<script>
import { extend } from 'vee-validate';
import { required,integer,regex } from 'vee-validate/dist/rules'

extend('regex', {
  ...regex,
  message: '이름에는 한글이나 영어만 가능해요.'
})

extend('integer', {
  ...integer,
  message: '숫자만 입력해 주세요.'
})

extend('required', {
    ...required,
    message: '{_field_} 입력칸이 공백입니다.'
})

export default {
    computed: {

    },
    mounted (){
      const register_finger = document.querySelector('.register_finger')
      register_finger.addEventListener("mouseover", (event)=>{
        event.target.style.color="#6C63FF"
      })
      register_finger.addEventListener("mouseleave", (event)=>{
        event.target.style.color="gray"
      })
    },
  data () {
    return{
        name: '',
        studentID: '',
        ShowfingerBoolean: false,
        fingerBoolean: '',
        first_key: '202020',       
        key_success_option: false, 
    }
  },
  methods: {
    prohibit_checkValue(){
        if(this.key == this.first_key){
            this.key_success_option = true
            this.key = ''
            this.option_value = '선생님 안녕하세요!'
        } else {
            this.$swal({
                icon: 'error',
                title: '이런!',
                text: '담당 선생님이 아니신가요?',
                footer: '담당 선생님만 외출 금지 기능을 사용하실 수 있습니다.'
            })
        }
    },
    onProhibit() {
      this.$http.get('/outing/prohibitOuting', {
        params:{
          studentID: this.studentID
        }
      }).then((response)=> {
        if(response.data.result == 'prohibit'){
          this.studentID = ''
          this.$swal("좋아요!", `${response.data.name} 학생이 외출금지 목록에 추가 완료 되었습니다!`, "success")
        } else if(response.data.result == 'permit') {
          this.studentID = ''
          this.$swal("좋아요!", `${response.data.name} 학생의 외출금지가 풀렸습니다.`, "success")
        }
      }).catch(e => {
        this.$swal({
                icon: 'error',
                title: `코드 : ${e}`,
                text: '에러가 발생했어요..',
                footer: '죄송합니다. 다시 시도 해 주세요'
            })
            this.$bvModal.hide('')
      })
    },
    onSubmit() {
        this.$http.get('/register/fingerStart', {
            params:{
                name: this.name,
                studentID: this.studentID
            }
        }).then((response)=> {
          if(response.data.result == 'true'){
            this.$swal("좋아요!", `${response.data.name}님 지문이 성공적으로 등록 되었습니다`, "success")
            this.$bvModal.hide('modal-prevent-closing')
            this.$bvModal.hide('modal-center')
          } else if (response.data == 'false'){
            this.$swal({
                icon: 'error',
                title: '이런!',
                text: '지문인식이 제대로 되지 않았어요!',
                footer: '죄송합니다. 한번 더 등록절차를 밟아주세요'
            })
            this.$bvModal.hide('modal-prevent-closing')
            this.$bvModal.hide('modal-center')                        
          } else if (response.data == 'already'){
            this.$swal({
                icon: 'info',
                title: '이런!',
                text: '지문이 이미 존재합니다!',
                footer: '바로 외출하기를 눌러보세요.'
            })
            this.$bvModal.hide('modal-prevent-closing')
            this.$bvModal.hide('modal-center')
          }
        }).catch(e => {
        this.$swal({
                icon: 'error',
                title: `코드 : ${e}`,
                text: '에러가 발생했어요..',
                footer: '죄송합니다. 다시 시도 해 주세요'
            })
            this.$bvModal.hide('modal-prevent-closing')
            this.$bvModal.hide('modal-center')
        })
        this.ShowfingerBoolean = true
        setTimeout(() => {
            this.name =''
            this.studentID =''
        }, 1000);        
        // this.$swal("좋아요!", "사용자, 지문 등록이 완료 되었습니다", "success")
    },
    go_out(){
      this.$http.get('/outing/fingerStart', {
        
      }).then((response) => {
        if(response.data.result == 'out'){
            this.$bvModal.hide('modal-out')
            this.$swal("좋아요!", `${response.data.name}님 꼭 늦지 않게 돌아오세요`, "success")
        } else if(response.data.result == 'back') {
          this.$bvModal.hide('modal-out')
          this.$swal("좋아요!", `${response.data.name}님 귀가시간이 등록 되었습니다.`, "success")
        } else if (response.data == 'false'){
            this.$swal({
                icon: 'error',
                title: '이런!',
                text: '지문인식이 제대로 되지 않았어요!',
                footer: '죄송합니다. 다시 시도 해 주세요'
            })          
            this.$bvModal.hide('modal-out')                     
          } else if(response.data == 'unable'){
            this.$swal({
                icon: 'error',
                title: '이런!',
                text: '외출금지를 당한 학생입니다',
                footer: '담당선생님께 문의해보세요.'
            })              
          }
      }).catch((e) => {
        this.$swal({
                icon: 'error',
                title: `코드 : ${e}`,
                text: '에러가 발생했어요..',
                footer: '죄송합니다. 다시 시도 해 주세요'
            })          
        this.$bvModal.hide('modal-out')                              
      })
    },
    realMain(option) {
      this.$router.push({name : option})
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:800&display=swap&subset=korean');
@import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css');

$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;

.DontOut{
  text-align: right;
  margin-right:4%;
}

.DontOut_text{
  font-family: 'Noto Sans KR', sans-serif;
  margin-left: 1%;
  color: lightcoral;
  font-size:2em;
  border: 0!important;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); 
}

.topnav{
    background-color: white;
    overflow: hidden;
    width: 100%;
    height: 70px;
    /* box-shadow: 0px 8px 15px rgba(194, 194, 194, 0.397); */
    text-align: right;
    vertical-align: center;
    padding-right:4%;
  }

 .topimg{
    margin-top: 0.8%;
  }

  .copyright{
    padding-top: 70%;
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
  .grade_text{
    font-size:1.2em;
  }

  .sidebar{
    z-index: 999;
    position: fixed;
    min-width: 12%;
    max-width: 12%;
    height: 100vh;
    float:left;
    background:#F9F9F9;
    display: table;
  }

  .sidebar .sidebar-header {
    margin: 3%;
    width: 94%;
    padding: 20px;
    background-color: transparent;
    font-family: 'NanumSquare', sans-serif;
    color: #6C63FF;
    border-radius: 10px;
    border: 0;
    outline: 0
  }

  .sidebar .sidebar-header:hover {
    background-color:#f5f6fa;  
  }

  .group{
    margin:3%;
    vertical-align: middle;
    background-color: transparent;
    border-radius: 10px;
  }

  .icon{
    margin:2%;
  }

  .sidemenu{
    padding:5%;
    font-family: 'NanumSquare', sans-serif;
    border:0;
    outline: 0;
    background-color: transparent;
    display:table-cell;
    width: 100%;
    color :  #6C63FF;
    vertical-align: middle;
  }

  .sidemenu:hover{
    background-color: #f5f6fa;
  }

  .pngdiv{
    text-align: center;
    margin-top: 4%;
    margin-left: 10%;
  }

  .form_group{
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 80%;
  }


  .form_field{
    width: 100%;
    border: 0;
    border-bottom: 2px solid #6C63FF;
    outline: 0;
    font-size: 1.3rem;
    color: black;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form_label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form_label{
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.8em;
    color: $gray; 
  }

  .form_label:focus {
    ~ .form_label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight:700;    
    }
    padding-bottom: 6px;
    border-bottom: 2px solid #6C63FF;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary,$secondary);
    border-image-slice: 1;
  }
  
  .form_error{
      color:red;
      font-family: 'NanumSquare', sans-serif;
  }

  .form_div{
      font-family: 'NanumSquare', sans-serif;
      font-weight: bold;
      color:#6C63FF;
      font-size:1.4em;
  }

  .form_submit{
      /* all:unset; */
      width:30%;
      height: 50px;
      border-radius: 10%;
      border:0;
      background-color: transparent;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);      
      font-size: 1.3em;
      font-family: 'NanumSquare', sans-serif;
  }

  .fingerbtn{
    all:unset;
    align-items: center;
    background-color:white;
    color:#6C63FF;
    font-size:2em;
    font-family: 'NanumSquare', sans-serif;
  }

  .fingerbtn:hover{
    background-color: #f5f6fa; 
    color:#6C63FF;
  }

  .fingerbtn_img{
    text-align: center;
  }

  .my-4{
    font-size:1.3em;
    font-family: 'NanumSquare', sans-serif;
    text-align:center;
  }

  .hellodiv{
    text-align: center;
    padding-left: 14%;
  }

  .plznotice{
    margin-left: 1%;
    color: #6C63FF;
    font-size:2em;
    border: 0!important;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);  
}

  .plznotice:focus{
    outline: none!important
  }

  .register_finger{
    all:unset;
    color:gray;
    padding-top: 1%;
    padding-left:1%;
    font-size:1.5em;
  }

  .register_finger:focus{
    outline:none;
  }

  .snowflake {   color: skyblue;   font-size: 1em;   font-family: Arial;   text-shadow: 0 0 1px #000; }   @-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}
</style>