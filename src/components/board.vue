<template>
    <div class = "griding">
        <div class = "grid_span">
            <div class="postit">
                <div class = "span">12월 25일</div>
                GSM Festival 기간입니다!
            </div>
        </div>
        <div>
            <span class = "span">12월 25일</span>
            <div class="postit">메롱</div>       
        </div>                            
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap&subset=korean');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:500&display=swap');

.span{
    text-align: center;
    font-family: 'Nanum Pen Script', cursive;
    font-size:1.5em;
    margin-bottom: 10%;
    color:#6C63FF;
}

.griding{
    overflow: hidden;
    margin-left:10%;
}

.postit {
  line-height: 1;
  text-align:center;     
  width: 17%;
  height: 20px; 
  min-height:250px;
  max-height:250px;
  margin:1%;
  position:relative;   
  border:1px solid #E8E8E8;  
  border-top:20px solid #ffffc6;  
  font-family: 'Noto Sans KR', sans-serif;  
  font-size:1.2em;
  float:left;    
  border-bottom-right-radius: 60px 5px;
  display:inline-block;    
// background: (linear, left top, right bottom, color-stop(81%,#ffff88), color-stop(82%,#ffff88), color-stop(82%,#ffff88), color-stop(100%,#ffffc6)); /* Chrome,Safari4+ */
background: #ffffc6;
}

.postit:after {     
   content: "";
  position:absolute;
  z-index:-1;
  right:-0px; bottom:20px;
  width:200px;
  height: 25px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow:2px 15px 5px rgba(0, 0, 0, 0.40);
transform: matrix(-1, -0.1, 0, 1, 0, 0);
         
}

.rotate {
    -webkit-transform: rotate(-10deg);
}    
</style>