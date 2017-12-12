<template>  
  <div class="slideshow">  
    <swiper :options="swiperOption"  ref="mySwiper" class="swiper-swiper">  
      <swiper-slide v-for="(item,index) in slides" :key="index">
      	<a :href="item.href"><img :src="item.src"/></a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>  
  </div>  
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    slides: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      swiperOption: {
        initialSlide: 0,
        notNextTick: true,
        pagination: '.swiper-pagination',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 10,
        autoplay: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet">

.slideshow
  z-index: 1

</style>
