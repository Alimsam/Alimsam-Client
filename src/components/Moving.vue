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
    <div class="movingdiv">
    <div class="movingdiv_column">
      <b-container class="bv-example-row">
        <b-row class="place_row">
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('1-1')">1-1</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('1-2')">1-2</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('1-3')">1-3</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('1-4')">1-4</button></b-col>
        </b-row>
      </b-container>
      <b-container class="bv-example-row">
        <b-row class="place_row">
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('2-1')">2-1</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('2-2')">2-2</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('2-3')">2-3</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('2-4')">2-4</button></b-col>
        </b-row>
      </b-container>
      <b-container class="bv-example-row">
        <b-row class="place_row">
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('3-1')">3-1</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('3-2')">3-2</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('3-3')">3-3</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn" v-on:click="moving('3-4')">3-4</button></b-col>
        </b-row>
      </b-container>
      <b-container class="bv-example-row">
        <b-row class="place_row">
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('멀/미 1실')">멀/미 1실</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('멀/미 2실')">멀/미 2실</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('소/개 1실')">SW 1실</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('소/개 2실')">SW 2실</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('임베디드실')">임베디드실</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('IOT실')">IOT실</button></b-col>
        </b-row>
      </b-container>
      <b-container class="bv-example-row">
        <b-row class="place_row">
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('음악실')">음악실</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('강당')">강당</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('전기실습실')">전기실습실</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('UI/UX실')">UI/UX실</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('학생부실')">학생부실</button></b-col>
          <b-col class="place_col"><button v-b-modal.go_outting class = "place_btn_special" v-on:click="moving('교무실')">교무실</button></b-col>
        </b-row>
      </b-container>
    </div>
    <div class="movingdiv_btn">
      <div class="moving_btn">
        <button v-b-modal.go_outting v-on:click="moving('comeback')" class = "brbtn">복귀</button>
        <button v-b-modal.modal-prevent-closing class = "lubtn">등록</button>

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
        <p></p>
        <p class="comeback_p"><b>MSD</b></p>
      </div>      
    </div>
      <b-modal 
      id="go_outting" 
      centered title="FingerPrint" 
      hide-footer="true"
      no-close-on-backdrop
      hide-header-close
      >
          <div class="fingerbtn_img">
              <img src="../assets/fingerp.png" width="30%">
          </div>
          <p class="my-4">지문인식 기계에 지문을 한 번 대주세요</p>
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
  data () {
    return{
        name: '',
        studentID: '',
        ShowfingerBoolean: false,
        fingerBoolean: ''
    }
  },
  methods: {    
    onSubmit() {
        this.$http.get('/register/fingerStart', {
            params:{
                name: this.name,
                studentID: this.studentID
            }
        }).then((response)=> {
          if(response.data.result == 'true'){
            
            this.$swal("좋아요!", "지문이 성공적으로 등록 되었습니다", "success")
            this.$bvModal.hide('modal-prevent-closing')
            this.$bvModal.hide('modal-center')
          } else if (response.data == false){
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
    },    
    moving(place){
      this.$http.get('/moving/fingerStart', {
        params: {
          place: place
        }
      }).then((response) => {
        if(response.data.result == 'true'){
          this.$swal("좋아요!", `${response.data.name}님 이동상황이 저장 되었습니다.`, "success")
          this.$bvModal.hide('go_outting')
        } else if(response.data.result == 'back'){
          this.$swal("좋아요!", `${response.data.name}님 복귀상황이 저장 되었습니다.`, "success")
          this.$bvModal.hide('go_outting')
        } else {
          this.$swal({
              icon: 'error',
              title: '이런!',
              text: '지문인식이 제대로 되지 않았어요!',
              footer: '죄송합니다. 다시 시도 해 주세요'
          })          
          this.$bvModal.hide('go_outting')
        }
      }).catch(e => {
        this.$swal({
                icon: 'error',
                title: `코드 : ${e}`,
                text: '에러가 발생했어요..',
                footer: '죄송합니다. 다시 시도 해 주세요'
            })
            this.$bvModal.hide('go_outting')          
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

.moving_btn{
  text-align:center;
  margin-top:2%;
}

.moving_btn button{
  border-top: 5px solid #A0A6E8;
  border-bottom : 5px solid #A0A6E8;
  background-color: rgba(0,0,0,0);
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  padding:5%;
  font-size: 1em;
  text-align:center;
  min-width:10%  
}

.moving_btn button:focus{
  outline:none;
}

.comeback_p{
  padding-top:90%;
  font-size:2em;
  color:black;
  
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
    border-top:2px solid gray;
    border-bottom: 2px solid gray;
    align-items: center;
    background-color:transparent;
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
    margin-left: -10%;
  }

  .plznotice{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    color: #6C63FF;
    font-size:2em;
}

.bv-example-row{
  text-align: center;

}

.place_col{
  width:10%!important;
}

.place_row_class{
  width:120%;
}

.movingdiv{
  display:grid;
  grid-template-columns: 75% 25%;
  text-align: center;
  font-size:2em;
  padding-top:3%;
}

.movingdiv_column{
  margin-left:18%;
}

.movingdiv_btn{
  text-align: center;
}

.grade_notice{
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  font-size:2em;
}

.place_btn{
  margin:2%;
  border:0;
  outline: 0;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  background-color: transparent;
  font-size:1em;
  width:90%;
  height:150px;
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
}

.place_btn:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);        
}

.place_btn_special{
  margin:2%;
  border:0;
  outline: 0;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  background-color: transparent;
  font-size:0.8em;
  width:90%;
  height:150px;
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
}

.place_btn_special:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);        
}

</style>