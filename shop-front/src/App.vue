<template>
  <HeaderComponent></HeaderComponent>

  <router-view></router-view>

  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent
  }
}
</script>
<style>
#app {
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 1px;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color: #000;
  font-size: 18px;
  cursor: pointer;
}
.container{
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  overflow: hidden;
}
@media screen and (max-width: 1200px){
  .container{
    max-width: 1000px;
  }
}
@media screen and (max-width: 992px){
  .container{
    max-width: 792px;
  }
}
@media screen and (max-width: 768px){
  .container{
    max-width: 578px;
  }
}
@media screen and (max-width: 576px) {
  .container{
    max-width: 476px;
  }
}
</style>
