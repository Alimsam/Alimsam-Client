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
          <button class = "sidemenu" v-on:click="gotoMeal('Meal')"><span><img src="../assets/meal2.png" width="40%" class="icon"></span><span><img src="../assets/school.png" width="40%" class="icon"></span><h4>급식/학사일정 확인</h4></button>
          <button class = "sidemenu" v-on:click="gotoNotice('Notice')"><span><img src="../assets/schedule.png" width="40%" class="icon"></span><h4>공지사항 확인</h4></button>
          <button class = "sidemenu" v-on:click="gotoOutting('Outting')"><span><img src="../assets/out.png" width="40%" class="icon"></span><h4>저녁외출</h4></button>
          <button class = "sidemenu" v-on:click="gotoMoving('Moving')"><span><img src="../assets/run2.png" width="40%" class="icon"></span><h4>자습이동</h4></button>          
        </div>
        <div class = "copydiv"><p class = "copyright">Copyright.2019.MSD.All rights reserved.</p></div>
      </nav>
    </div>
    <!-- <b-list-group v-for="contented in contents" v-bind:key="contented.key">
        <div is = "notice_day" v-bind:min="minDate" v-bind:max="maxDate"></div>
        <div is = "notice_content" v-bind:pdata="content"></div>
    </b-list-group> -->
      <div class = "btn_group">
        <button v-on:click="f_grade(1)" class = "brbtn">1학년 공지</button>     
        <button v-on:click="s_grade(2)" class = "lubtn">2학년 공지</button>
        <button v-on:click="t_grade(3)" class = "dibtn">3학년 공지</button>
      </div>

      <div v-if="show_grade == 1 || show_grade == 2 || show_grade == 3" class = "btn_group_notice">
        <button v-on:click="first_class(1)" class = "brbtn">1반</button>     
        <button v-on:click="s_class(2)" class = "lubtn">2반</button>
        <button v-on:click="t_class(3)" class = "thbtn">3반</button>
        <button v-on:click="four_class(4)" class = "dibtn">4반</button>
      </div>

    <div class="hellodiv">
      <div v-if="show_grade == 1">
        <p class="grade_notice">{{data_boolean}}</p>
          <div v-if="data_boolean != '공지사항이 없어용' && only_grade_boolean == false" class="griding">
            <div class="grid_span">
              <div v-for="index in rsp_data" v-bind:key="index.key" class="postit">
                <span><button v-b-modal.del_modal class = "del_btn" v-on:click="del_btn(index)">❌</button></span>
                <div is= "notice" v-bind:sDate="index.startDate" v-bind:eDate="index.endDate"></div>                
                <div is= "notice_content" v-bind:content="index.content"></div>
              </div>
            </div>
          </div>          
      </div>
    </div>

    <div class="hellodiv">
      <div v-if="show_grade == 2">
        <p class="grade_notice">{{data_boolean}}</p>
          <div v-if="data_boolean != '공지사항이 없어용' && only_grade_boolean == false" class="griding">
            <div class="grid_span">
              <div v-for="index in rsp_data" v-bind:key="index.key" class="postit">
                <span><button v-b-modal.del_modal class = "del_btn" v-on:click="del_btn(index)">❌</button></span>
                <div is= "notice" v-bind:sDate="index.startDate" v-bind:eDate="index.endDate"></div>                
                <div is= "notice_content" v-bind:content="index.content"></div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="hellodiv">
      <div v-if="show_grade == 3">
        <p class="grade_notice">{{data_boolean}}</p>
          <div v-if="data_boolean != '공지사항이 없어용' && only_grade_boolean == false" class="griding">
            <div class="grid_span">
              <div v-for="index in rsp_data" v-bind:key="index.key" class="postit">
                <span><button v-b-modal.del_modal class = "del_btn" v-on:click="del_btn(index)">❌</button></span>
                <div is= "notice" v-bind:sDate="index.startDate" v-bind:eDate="index.endDate"></div>                
                <div is= "notice_content" v-bind:content="index.content"></div>
              </div>
            </div>
          </div>
      </div>      
    </div>

    <div class="addNotice">
      <b-button v-b-modal.modal_addNotice variant="outline-primary" size="lg">공지 등록</b-button>
    </div>

    <b-modal 
    id="del_modal"
    centered title="공지삭제" 
    hide-footer="true"
    no-close-on-backdrop
    >
      <ValidationObserver v-slot="{invalid}">
          <form @submit.prevent="del_submit" method="GET">
              <ValidationProvider rules="required|integer" v-slot="{ errors }" name="학번">
                <div class = "form_group">
                  <input v-model="input_delkey" type="text" placeholder="삭제키" class = "form_field" id="Del" autocomplete="off">
                  <label for="Del" class="form_label">삭제키</label>
                  <div class = "form_error">{{ errors[0] }}</div>
                </div>                      
              </ValidationProvider>                            
              <div>
                  <button type="submit" class="form_submit" :disabled="invalid">삭제하기</button>
              </div>                    
          </form>
      </ValidationObserver>
    </b-modal>

    <div class="div_div">
        <b-modal
            hide-header-close
            hide-footer="true"
            id="modal_addNotice"
            ref="modal"
            title="학년부 선생님이신가요? 키를 입력해주세요."
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
            >

            <ValidationObserver v-slot="{invalid}" v-if="key_success_option == ''">
                <form @submit.prevent="checkValue">
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
                <b-button v-b-modal.modal_success class="fingerbtn">인증완료</b-button>
                <b-modal 
                id="modal_success" 
                ref="content_modal"
                centered title="성공적으로 인증 되었습니다!"
                hide-footer="true"
                hide-header-close>
                <div>공지기간이 하루라면 기간을 똑같이 적어주세요</div>
                <div class="datepicker-trigger">
                        <input
                            type="text"
                            id="datepicker-trigger"
                            placeholder="여기를 눌러 날짜를 선택하세요!"
                            class="dpicker_input"
                            autocomplete="off"
                            :value="formatDates(dateOne, dateTwo)">

                        <AirbnbStyleDatepicker
                            :trigger-element-id="'datepicker-trigger'"
                            :mode="'range'"
                            :date-one="dateOne"
                            :date-two="dateTwo"
                            @date-one-selected="val => { dateOne = val}"
                            @date-two-selected="val => { dateTwo = val}"
                        />
                </div>

                <ValidationObserver v-slot="{invalid}">
                        <form @submit.prevent="onSubmit_content">
                            <ValidationProvider rules="required|integer" v-slot="{ errors }" name="내용">
                            <div class = "form_group">

                                <input v-model="grade_number" type="text" placeholder="반" class = "form_field" id="class" autocomplete="off">
                                <label for="class" class="form_label">반</label>
                                <div class = "form_error">{{ errors[0] }}</div>

                            </div>                      
                            </ValidationProvider>                          
                            <ValidationProvider rules="required" v-slot="{ errors }" name="내용">
                            <div class = "form_group">

                                <input v-model="content" type="text" placeholder="내용" class = "form_field" id="content" autocomplete="off">
                                <label for="content" class="form_label">내용</label>
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
const date = new Date()
const curmonth = date.getMonth()+1
const curyear = date.getFullYear()

import format from 'date-fns/format'
import { extend } from 'vee-validate';
import { required, integer } from 'vee-validate/dist/rules'
import Vue from 'vue'

Vue.component('notice', {
  template: `<div class="span">{{sDate}} ~ {{eDate}}`,
          props: ['sDate', 'eDate', 'content']
})

Vue.component('notice_content', {
  template:`<div class="span_content">{{content}}</div>`,
          props: ['content']
})

extend('required', {
    ...required,
    message: '{_field_} 입력칸이 공백입니다.'
})

extend('integer', {
  ...integer,
  message: '숫자만 입력 가능해요.'
})

export default {
  data () {
    return{
        dateFormat: 'D MMMM',
        dateOne: '',
        dateTwo: '',
        data_boolean: '',
        only_grade_boolean : '',
        curmonth: curmonth,
        first_key: '202001',
        second_key: '202002',
        third_key: '202003',
        show_grade: 1,
        show_class: 1,
        grade: '',
        grade_number: '',
        minDate: '',
        maxDate: '',
        content: '',
        db_content: '',
        rsp_data: '',
        contents: [],
        myToggle: false,
        key: '',
        key_success_option: false,
        option_value: '',
        del_key: 2002,
        input_delkey: '',
        del_class: '',
        del_startDate: '',
        del_endDate: '',
        del_content: ''
    }
  },

  mounted () {
    if(this.data_boolean == ''){
      this.data_boolean = '학년 반 별로 공지사항 확인이 가능합니다!'
    }
  },

  methods: {
    formatDates(dateOne, dateTwo) {
        let formattedDates = ''
        if (dateOne) {
            formattedDates = format(dateOne, this.dateFormat)
        }
        if (dateTwo) {
            formattedDates += ' - ' + format(dateTwo, this.dateFormat)
        }

        return formattedDates
    },
    checkValue() {
        if(this.key == this.first_key){
            console.log(this.key)
            this.key_success_option = true
            this.key = ''
            this.option_value = '1학년부 선생님 안녕하세요!'
            this.grade = 1
        } else if(this.key == this.second_key){
            this.key_success_option = true
            this.key = ''
            this.option_value = '2학년부 선생님 안녕하세요!'
            this.grade = 2
        } else if(this.key == this.third_key){
            this.key_success_option = true
            this.key = ''
            this.option_value = '3학년부 선생님 안녕하세요!'
            this.grade = 3
        } else {
            this.$swal({
                icon: 'error',
                title: '이런!',
                text: '우리학교 선생님이 아니신가요?',
                footer: '선생님들만 공지사항 등록이 가능합니다.'
            })
        }
    },
    onSubmit_content() {
        if(this.dateOne == '' || this.dateTwo == ''){
          alert("날짜를 선택해주세요!")
        } else {
          this.$http.get('/notice/addNotice', {
              params: {
                  class : `${this.grade}${this.grade_number}`,
                  startDate: this.dateOne,
                  endDate: this.dateTwo,
                  content: this.content
              }
          }).then((response)=> {
              console.log(response.data)
              this.$swal("좋아요!", "공지가 성공적으로 등록 되었습니다", "success")
              this.$bvModal.hide('modal_addNotice')
              this.$bvModal.hide('modal_success')
              this.minDate = ''
              this.maxDate = ''
              this.dateOne = ''
              this.dateTwo = ''        
              this.content = ''
              this.key=''
              this.key_success_option=''
              this.grade = ''
              this.grade_number = ''
          })
        }
    },
    del_submit() {
        if(this.input_delkey == this.del_key){
          this.$http.get('/notice/deleteNotice', {
              params: {
                  class : this.del_class,
                  startDate: this.del_startDate,
                  endDate: this.del_endDate,
                  content: this.del_content
              }
          }).then((response)=> {
            console.log(response)
            this.$swal("좋아요!", "공지가 성공적으로 삭제 되었습니다", "success")
            this.$bvModal.hide('del_modal')
            this.$http.get('/notice/getNotice', {
              params: {
                startMonth: `${curyear}-${curmonth}`,
                class: this.del_class
              }
            }).then((response)=> {
              this.rsp_data = response.data
              console.log("GET!")
            })
          })          
        } else {
          alert("메롱")
        }      
    },
    f_grade(option) {
      this.show_grade = option
      this.data_boolean = `${option}학년 공지입니다. 반을 클릭해주세요!`
      this.only_grade_boolean = true
    },
    s_grade(option) {
      this.show_grade = option
      this.data_boolean = `${option}학년 공지입니다. 반을 클릭해주세요!`
      this.only_grade_boolean = true
    },
    t_grade(option) {
      this.show_grade = option
      this.data_boolean = `${option}학년 공지입니다. 반을 클릭해주세요!`
      this.only_grade_boolean = true
    },
    first_class(option) {
      this.show_class = option
      this.$http.get('/notice/getNotice', {
        params: {
          startMonth: `${curyear}-${curmonth}`,
          class: `${this.show_grade}${this.show_class}`
        }
      },
      this.data_boolean = '불러오는중!'
      ).then((response) => {
        this.rsp_data = response.data
        if(this.rsp_data == ''){
          this.data_boolean = `${option}반은 공지사항이 없어용`
        } else {
          this.data_boolean = `${this.show_grade}학년 ${this.show_class}반 공지사항`
          this.only_grade_boolean = false
        }
      }).catch(e => {
        console.log("ERROR " + e)
      })
    },
    s_class(option) {
      this.show_class = option
      this.$http.get('/notice/getNotice', {
        params: {
          startMonth: `${curyear}-${curmonth}`,
          class: `${this.show_grade}${this.show_class}`
        }
      },
      this.data_boolean = '불러오는중!'
      ).then((response) => {
        this.rsp_data = response.data
        if(this.rsp_data == ''){
          this.data_boolean = `${option}반은 공지사항이 없어용`
        } else {
          this.data_boolean = `${this.show_grade}학년 ${this.show_class}반 공지사항`
          this.only_grade_boolean = false
        }        
      }).catch(e => {
        this.data_boolean = '공지사항이 없어용'
        console.log("ERROR " + e)
      })
    },
    t_class(option) {
      
      this.show_class = option
      this.$http.get('/notice/getNotice', {
        params: {
          startMonth: `${curyear}-${curmonth}`,
          class: `${this.show_grade}${this.show_class}`
        }
      },
      this.data_boolean = '불러오는중!'
      ).then((response) => {
        this.rsp_data = response.data
        if(this.rsp_data == ''){
          this.data_boolean = `${option}반은 공지사항이 없어용`
        } else {
          this.data_boolean = `${this.show_grade}학년 ${this.show_class}반 공지사항`
          this.only_grade_boolean = false
        }        
      }).catch(e => {
        this.data_boolean = '공지사항이 없어용'
        console.log("ERROR " + e)
      })
    },
    four_class(option) {
      this.show_class = option
      this.$http.get('/notice/getNotice', {
        params: {
          startMonth: `${curyear}-${curmonth}`,
          class: `${this.show_grade}${this.show_class}`
        }
      }).then((response) => {
        this.rsp_data = response.data
        if(this.rsp_data == ''){
          this.data_boolean = `${option}반은 공지사항이 없어용`
        } else {
          this.data_boolean = `${this.show_grade}학년 ${this.show_class}반 공지사항`
          this.only_grade_boolean = false
        }
      }).catch(e => {
        this.data_boolean = '공지사항이 없어용'
        console.log("ERROR " + e)
      })
    },
    del_btn(key){
        this.del_class = `${this.show_grade}${this.show_class}`
        this.del_startDate = key.startDate
        this.del_endDate = key.endDate
        this.del_content = key.content
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
    overflow: hidden
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
    background-color:#f5f6fa;  
  }

  .pngdiv{
    text-align: center;
    margin-top: 8%;
    margin-left: 10%;
  }

  .hellodiv{
    text-align: center;
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
    font-weight: 400;
    color:black;
    font-size:2em;
  }

  .grade_notice{
    font-family: 'NanumSquare', sans-serif;
    font-weight: 600;
    color:black;
    font-size:2em;
    margin-left: -5%;
  }

  .grade_text{
    font-size:1.2em;
  }

  .addNotice{
    text-align: right;
    margin-right: 4%;
  }

  .addNotice button {
    padding:1%;
    border-top: 5px solid #A0A6E8;
    border-bottom: 5px solid #A0A6E8;
    border-left: 0;
    border-right: 0;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    color: black;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.5em;
  }

  .addNotice button:hover{
    color:white;
    background-color: #A0A6E8
  }

  .list_item{
    margin-left:30%;
    margin-right: 30%;
  }

  .dpicker_input{
    padding: 2%;
    width:100%;
    height:50px;
    border-left: 5px solid #A0A6E8;
    border-right: 5px solid #A0A6E8;
    border-top: 0;
    border-bottom: 0;
    font-size:1.2em;
    box-shadow: 0px 8px 15px rgba(113, 88, 255, 0.1);
  }

  .dpicker_input::placeholder{
    font-size:1.3em;
    color:black;
  }
  
  .btn_group_notice{
    text-align:right;
    margin-top:0.5%;
    margin-right:4%;    
  }

  .btn_group_notice button {
    border-top: 5px solid #A0A6E8;
    border-bottom : 5px solid #A0A6E8;
    background-color: rgba(0,0,0,0);
    color: black;
    font-family: 'Noto Sans KR', sans-serif;
    padding:1%;
    font-size: 1.5em;
    text-align:center;    
  }

  .btn_group_notice button:hover{
    color:white;
    background-color: #A0A6E8
  }

  .thbtn{
    border-right: 0;
    border-left: 5px solid #A0A6E8;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  }

  .thbtn:hover{
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);    
  }
  
  div .span_content{
    font-family: 'Noto Sans KR', sans-serif;
    color: black;
  }

  .del_btn{
    border: 0;
    outline: 0;
    background-color: transparent

  }

  .snowflake {  color: lightcyan;   font-size: 1em;   font-family: Arial;   text-shadow: 0 0 1px #000; }   @-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}
</style>