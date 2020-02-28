<template>
  <!-- swiper -->
  <swiper :options="swiperOption">

    
    <swiper-slide v-for="item in images" :key="item">
      <div :data-background="item" class="swiper-lazy banner-bin">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
      </div>
    </swiper-slide>
    
    <!--<swiper-slide>-->
      <!--<div-->
        <!--data-background="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582649120105&di=fa9481b3541725be3a90b1d94a4be0d6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F49b00b2ddb0f5cd378647e2b498eb0b2b6b1530298ad1-Zt83Rc_fw658"-->
        <!--class="swiper-lazy banner-bin">-->
        <!--<div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>-->
      <!--</div>-->
    <!--</swiper-slide>-->
    <!--<swiper-slide>-->
      <!--<img-->
        <!--class="swiper-lazy"-->
        <!--:data-src="require('@../../../public/images/1481164379.jpg')"-->
        <!--alt=""-->
      <!--/>-->
      <!--<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>-->
    <!--</swiper-slide>-->
    <!--<swiper-slide>-->
      <!--<img-->
        <!--data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582651017325&di=424a5b5711b5edccb17239551de10895&imgtype=0&src=http%3A%2F%2Fmat1.gtimg.com%2Ffinance%2Fimages%2Fstock%2Fp%2Fnews%2Fb96ce7b45bcdd5db.jpg"-->
        <!--class="swiper-lazy"-->
      <!--/>-->
      <!--<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>-->
    <!--</swiper-slide>-->
    <!--<swiper-slide>-->
      <!--<img-->
        <!--data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582651018017&di=e3e2daf7e269d20118c2ed6c7b4154eb&imgtype=0&src=http%3A%2F%2Fpic32.nipic.com%2F20130904%2F3682379_154117447385_2.jpg"-->
        <!--class="swiper-lazy"-->
      <!--/>-->
      <!--<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>-->
    <!--</swiper-slide>-->
    <!--<swiper-slide>-->
      <!--<img-->
        <!--data-src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2349341871,3522704686&fm=26&gp=0.jpg"-->
        <!--class="swiper-lazy"-->
      <!--/>-->
      <!--<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>-->
    <!--</swiper-slide>-->
    <div class="swiper-pagination banner-pager" slot="pagination"></div>
    <!--<div-->
      <!--class="swiper-button-next swiper-button-white a"-->
      <!--slot="button-next" ></div>-->
    <!--<div-->
      <!--class="swiper-button-prev swiper-button-white b"-->
      <!--slot="button-prev" >-->
    <!--</div>-->
    <div class="banner-ctrl">
      <div class="ctrl-box ctrl-left">AAA<i class="fa fa-angle-left"></i></div>
      <div class="ctrl-box ctrl-right">BBB<i class="fa fa-angle-right"></i></div>
    </div>
    <!--<div class="banner-pager"></div>-->
    <div class="banner-down">down<i class="fa fa-angle-down"></i></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import pic1 from "@../../../public/images/1481161992.jpg"
export default {
  name: 'Banner',

  data() {
    return {
      swiperOption: {
        // Enable lazy loading
        lazy: {
          loadPrevNext: true,
        },
        speed: 500,
        loop: true,
        keyboard: {
          enabled: true,
        },
        autoplay: 4500,
        autoplayDisableOnIneraction: true,
        grabCursor: true,
        slidesPerView: 1,
        mousewheel: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.ctrl-right',
          prevEl: '.ctrl-left',
          // nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev'
        }
      },
      images: [
        pic1,
        require('$../../../public/images/1481164379.jpg'),
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582649120105&di=fa9481b3541725be3a90b1d94a4be0d6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F49b00b2ddb0f5cd378647e2b498eb0b2b6b1530298ad1-Zt83Rc_fw658",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582651017325&di=424a5b5711b5edccb17239551de10895&imgtype=0&src=http%3A%2F%2Fmat1.gtimg.com%2Ffinance%2Fimages%2Fstock%2Fp%2Fnews%2Fb96ce7b45bcdd5db.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582651018017&di=e3e2daf7e269d20118c2ed6c7b4154eb&imgtype=0&src=http%3A%2F%2Fpic32.nipic.com%2F20130904%2F3682379_154117447385_2.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2349341871,3522704686&fm=26&gp=0.jpg",
      ],
    }
  },
  components: {
      swiper,
      swiperSlide,
  }
}
</script>
<style lang="css" scoped>
@import "~swiper/dist/css/swiper.css";
/* @import '~animate.css/animate.min.css'; */
@import "../../../public/css/global.css";

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444 !important;
}

.swiper-slide img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
