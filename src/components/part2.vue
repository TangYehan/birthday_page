<template>
  <div id="part2">
      <div id="content">
    <div>
      <div class="year">2005</div>
      <div class="year_img"><img src="../assets/1.jpg" /></div>
    </div>
    <div>
        <div class="year">2012</div>
      <div class="year_img"><img src="../assets/2.jpg" /></div>
    </div>
    <div>
        <div class="year">2019</div>
      <div class="year_img"><img src="../assets/3.jpg" /></div>
    </div>
     <div>
        <div class="year">2020</div>
      <div class="year_img"><img src="../assets/4.jpg" /></div>
    </div>
     <div id="last">成长不期而遇，生日如期而至<br/>生日快乐</div>
  </div>
  </div>
</template>
 
<script>
export default {
   mounted(){
   setTimeout(()=>{
       this.$router.replace("/part3");
   },15500)
 }
};
</script>
 
<style scoped>
#part2 {
  text-align: center;
  position: relative;
}
#content{
  position: absolute;
  width: 100vw;
  top: 100vh;
   animation: show 15s forwards;
  animation-iteration-count:1;
}
@keyframes show {
  100% {
    top:-150vh;
  }
}
.year {
  width: 80px;
  line-height: 80px;
  margin: 0 auto;
  font-size: 1.5rem;
  border: 1px solid white;
  border-radius: 50%;
  position: relative;
}
.year::after,.year_img::after {
  position: absolute;
  content: "";
  width: 2px;
  height: 40px;
  background-color: white;
  left: calc(50% + 1px);
  bottom: -40px;
}
.year_img {
  margin: 0 auto;
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 40vw;
}
.year_img img {
  width: 50vw;
  border-radius: 15px;
}

#last{
  letter-spacing: 2px;
  line-height: 40px;
  font-size: 1.2rem;
  border:2px solid white;
  width: 70vw;
  margin:0 auto;
  margin-bottom: 50px;
}
</style>