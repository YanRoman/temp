
<template>

  <Swiper
      navigation
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{
        delay : 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }">
    <SwiperSlide><img src="../assets/images/slide1.jpg" alt="slide1"/></SwiperSlide>
    <SwiperSlide><img src="../assets/images/slide2.jpg" alt="slide2"/></SwiperSlide>
  </Swiper>


</template>

<script setup>
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide} from "swiper/vue";
import "swiper/swiper.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination, Autoplay]);
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
img{
   object-fit: cover;
   height: 100%;
   width: 100%;
}
 .swiper-button-next,
 .swiper-button-prev {
   color: black;
 }
 .swiper-pagination-bullet{
   background-color: black;
 }
</style>