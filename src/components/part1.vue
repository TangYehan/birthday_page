<template>
 <div id="part1">
     <div id="one">惊喜</div>
     <div id="two">从这里开始</div>
     <div id="three">人生进度条：20%</div>
     <div id="four"><div></div></div>
 </div>
</template>
 
<script>
 
export default {
//  mounted(){
//    setTimeout(()=>{
//        this.$router.replace("/part2");
//    },6000)
//  }
}
</script>
 
<style scoped>
#part1{
  width: 100%;
  height: 100%;
  overflow: hidden;
    text-align: center; 
    position: relative;
}
#part1 div{
    letter-spacing: 8px;
    position: absolute;
}
#one{
  font-size: 2rem;
      width: 100vw;
    top:25vh;
    opacity: 0;
    animation: showOne 1.5s forwards;
    animation-iteration-count:1;
}
@keyframes showOne {
  100% {
    opacity: 1;
  }
}

#two{
      width: 100vw;
  font-size: 2rem;
    top:40vh;
    opacity: 0;
    animation: showTwo 1.5s forwards;
    animation-delay:1s;
    animation-iteration-count:1;
}

@keyframes showTwo {
  100% {
    opacity: 1;
  }
}
#three{
      width: 100vw;
  top: 100vh;
  font-size: 18px;
  animation: showThree 1.5s forwards;
    animation-delay:2s;
    animation-iteration-count:1;
}
@keyframes showThree {
  100% {
   top: 60vh;
  }
}
#four{
  top: 65vh;
  height: 30px;
  width: 300px;
  left: calc(50vw - 150px);
  border: 1.2px solid white;
  border-radius: 15px;
  opacity: 0;
   animation: n 0s forwards;
    animation-delay:3.5s;
    animation-iteration-count:1;
}
@keyframes n {
  100% {
   opacity: 1;
  }
}
#four div{
  height: 100%;
  background-color:white;
  border-radius: 15px;
    animation: m 2s forwards;
    animation-delay:3.5s;
    animation-iteration-count:1;
}
@keyframes m {
  20%{
    width: 30px;
  }
  50%{
    width: 50px;
  }
  100% {
     width: 100px;
  }
}


</style>