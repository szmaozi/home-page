<template>
  <!-- swiper -->
  <swiper :options="swiperOption1">
    <swiper-slide v-for="item in images" :key="item">
      <div :data-background="item" class="swiper-lazy banner-bin">
        <!-- <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div> -->
          <div class="table-box">
            <div class="table-cell">
              <div class="banner-write ">

                <span class="w1">5</span>

                <span class="w2">
                  <span class="w21">年专注 · 互联网+区块链</span>
                  <span class="w22">EChain易链</span>
                  <span class="w23"><br/><font color=#ffe000>去中心化、智能合约、开放透明、安全匿名、简单易用</font><br/><br/><em>EChain区块链，帮助企业实现业务金融化、资产数字化</em><br/></span>
                </span>
              </div>

              <div class="banner-full visible-lg-block">
                <ol class="list-paddingleft-2"><li><p><br/></p></li><li><p><br/></p></li><li><p><br/></p></li><li><p><br/></p></li></ol>
                <ul class="list-paddingleft-2"><li><p><br/></p></li><li><p><br/></p></li><li><p><br/></p></li><li><p><br/></p></li></ul>
              </div>
              <div class="banner-border visible-lg-block"></div>

            </div>
          </div>
      </div>
    </swiper-slide>


  <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
  <div class="swiper-button-next swiper-button-white" slot="button-next"></div>

     <!-- <div class="banner-news" slot="button-next">hhhhhhhhh</div> -->
     <div class="banner-news" slot="button-prev">
        <News />
     </div>
  <div class="banner-pager swiper-pagination" slot="pagination"></div>
  <!-- <div class="banner-down" slot="button-next">down11111<i class="el-icon-bottom"></i></div> -->

  </swiper>
</template>

<script>
import News from './News.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import pic1 from "@../../../public/images/1481161992.jpg"
export default {
  name: 'Banner',

  data() {
    return {
      swiperOption1: {
        // Enable lazy loading
        lazy: {
          loadPrevNext: true,
        },
        // parallax: true,
        speed: 800,
        loop: true,
        keyboard: {
          enabled: true,
        },
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true,
        // },
        grabCursor: true,
        slidesPerView: 1,
        mousewheel: false,
        observer:true,
        observeParents:true, 
        pagination: {
          el: '.banner-pager',
          // el: '.swiper-pagination',
          clickable: true,
          // bulletClass: 'banner-page-bullet',
          // bulletActiveClass: 'active'
        },
        navigation: {
          // nextEl: '.ctrl-right',
          // prevEl: '.ctrl-left',
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
      News,
  }
}
</script>

<style lang="css" scoped>
/* @import "~swiper/dist/css/swiper.css"; */
 /*@import '~animate.css/animate.min.css';*/
@import "../../../public/css/global.css";

  .swiper-container{
    --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
    --swiper-navigation-color: #00ff33;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 100px;/* 设置按钮大小 */
  }

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

/*instance of swiper slide*/
.banner-box {
  width: 100%;
  height: 100%;
  position: relative;
}

.banner-cut {
    width: 1000%;
    height: 100%
}

.banner-bin {
    /*width: 10%;*/
/*    height: 100%; */
    float: left;
    display: block;
    overflow: hidden;
    position: relative;
    width:100%;
    height: 100%;
    background: center no-repeat;
    background-size: cover;
}

/* swiper - banner - pagination */
.banner-pager {
    position: absolute;
    height: 3px;
    line-height: 0;
    top: 84%;
    bottom: auto !important;
    left: 0;
    right: 0;
    text-align: center;
}


.banner-news {
    position: absolute;
    z-index: 1;
    top: 79%;
    left: 50%;
    margin-left: -188px;
    height: 100px;
    width: 600px;
    line-height: 30px
}

</style>
