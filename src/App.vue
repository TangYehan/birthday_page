<template>
  <div id="app">
    <!-- <audio src="assets/bgm.mp3" ref="MusicPlay" loop autoplay></audio> -->
    <!-- <audio controls autoplay>
      <source src="assets/bg.mp3" type="audio/mpeg" />
    </audio> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  // mounted(){
  //   this.$refs.MusicPlay.pause();
  //       // this.musicTF = true
  //       console.log(123)
  // }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  width: 100vw;
  background-color: rgb(54, 54, 54);
  color: white;
  overflow: scroll;
}
</style>
