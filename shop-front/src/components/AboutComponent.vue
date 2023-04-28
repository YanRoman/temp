<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div class="box1">

    <img class="img1" src="../assets/images/3.jpg" height="1280" width="720"/></div>
  <div class="box2">

    <img class="img2" src="../assets/images/4.jpg" height="1280" width="960"/></div>
  <div class="box3">
  </div>
</template>

<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

export default {
  mounted: function() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {

      gsap.timeline({
        scrollTrigger:{
          trigger: ".img1",
          markers: true,
          scrub: true,
          pin: true,
        }
      })
          .from(".img2", {y: innerHeight * 1, opacity: 0})
    }
  }
};
</script>


<style>
.cube1{
  width: 200px;
  height: 200px;
  background-color: black;
}
.cube2{
  width: 200px;
  height: 200px;
  background-color: white;
}
.cube3{
  width: 200px;
  height: 200px;
  background-color: green;
}
.box1{
  background-color: rebeccapurple;
  height: 100vh;
}
.box2{
  background-color: blue;
  height: 100vh;
}
.box3{
  background-color: red;
  height: 100vh;
}
.img2, .img3{
  max-width: 100%;
  height: 100vh;
}
h2{
  margin: 50px;
  font-size: 50px;
}

</style>