<template>
  <div id="part3">
    <div>年年皆胜意 岁岁都欢愉</div>
    <div>生日快乐 天天快乐 祝你从早上起床快乐到晚上钻进被窝</div>
    <div>生活明朗，万物可爱。人间值得，未来可期</div>
    <div>想要的都得到 得到的都美好</div>
    <div>管它几岁 开心万岁</div>
    <div>愿你历遍山河 觉得人间值得</div>
    <div>凛冬散尽 星河长明</div>
    <div>每天都能睡到自然醒</div>
    <div>多喜乐 长安宁</div>
    <div>一定要幸福鸭！</div>
    <div><img src="../assets/cake.gif"></div>
  </div>
</template>
 
<script>
export default {};
</script>
 
<style scoped>
#part3 {
  height: 100vh;
  overflow: hidden;
  align-items: center;
  position: relative;
}
#part3 div {
  position: absolute;
  top: 100vh;
  padding: 0 10px;
  transition: 1s;
}

#part3 div:nth-child(1) {
  font-size: 7vw;
  left: 50px;
  animation: one 1s forwards;
  animation-iteration-count: 1;
}
@keyframes one {
  100% {
    top: 30px;
    opacity: 0.6;
  }
}
#part3 div:nth-child(2) {
  width: 20px;
  left: 20px;
  font-size: 4vw;
  animation: two 1s forwards;
  animation-delay: 1s;
  animation-iteration-count: 1;
}
@keyframes two {
  100% {
    top: 30px;
    opacity: 0.6;
  }
}

#part3 div:nth-child(3) {
  font-size: 6vw;
  left: 20px;
  animation: three 1s forwards;
  animation-delay: 2s;
  animation-iteration-count: 1;
}
@keyframes three {
  100% {
    top: 500px;
    opacity: 0.6;
  }
}

#part3 div:nth-child(4) {
  font-size: 6vw;
  width: 20px;
  right: 20px;
  animation: four 1s forwards;
  animation-delay: 3s;
  animation-iteration-count: 1;
}
@keyframes four {
  100% {
    top: 50px;
    opacity: 0.6;
  }
}

#part3 div:nth-child(5) {
  font-size: 6vw;
  left: 80px;
  animation: five 1s forwards;
  animation-delay: 4s;
  animation-iteration-count: 1;
}
@keyframes five {
  100% {
    top: 100px;
    opacity: 0.8;
  }
}

#part3 div:nth-child(6) {
  font-size: 6vw;
  width: 20px;
  left: 80px;
  animation: six 1s forwards;
  animation-delay: 5s;
  animation-iteration-count: 1;
}
@keyframes six {
  100% {
    top: 130px;
    opacity: 0.8;
  }
}
#part3 div:nth-child(7) {
  font-size: 8vw;
  left: 100px;
  animation: seven 1s forwards;
  animation-delay: 6s;
  animation-iteration-count: 1;
}
@keyframes seven {
  100% {
    top: 450px;
    opacity: 0.8;
  }
}

#part3 div:nth-child(8) {
  font-size: 6vw;
  right: 100px;
  width: 20px;
  animation: eight 1s forwards;
  animation-delay: 7s;
  animation-iteration-count: 1;
}
@keyframes eight {
  100% {
    top: 150px;
    opacity: 0.8;
  }
}

#part3 div:nth-child(9) {
  font-size: 8vw;
  left: 50px;
  animation: nine 1s forwards;
  animation-delay: 8s;
  animation-iteration-count: 1;
}
@keyframes nine {
  100% {
    top: 200px;
    opacity: 1;
  }
}

#part3 div:nth-child(10) {
  font-size: 13vw;
  left: 50px;
  animation: ten 1s forwards;
  animation-delay: 9s;
  animation-iteration-count: 1;
}
@keyframes ten {
  100% {
    top: 300px;
    opacity: 1;
  }
}
#part3 div:nth-child(11){
    width: 100%;
    height: 100%;
    background:black ;
    top: 0;
    left: 0;
    opacity: 0;
    animation: cake 1.5s forwards;
  animation-delay: 11s;
  animation-iteration-count: 1;
} 
#part3 div:nth-child(11) img{
    width: 80vw;
    margin-top: 30vh;
    margin-left: 10vw;
}
@keyframes cake {
  100% {
    opacity: 1;
  }
}
</style>