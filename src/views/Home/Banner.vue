<template>
  <!-- swiper -->
  <swiper :options="swiperOption1">

    
    <swiper-slide v-for="item in images" :key="item">
      <div :data-background="item" class="swiper-lazy banner-bin">
        <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
      </div>
    </swiper-slide>
    <div class="banner-ctrl">
      <div class="ctrl-box ctrl-left"><i class="el-icon-caret-left"></i></div>
      <div class="ctrl-box ctrl-right"><i class="el-icon-caret-right"></i></div>
    </div>
    <div class="banner-pager swiper-pagination" slot="pagination"></div>
    <!-- <div class="banner-pager" slot="pagination"></div> -->
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
      swiperOption1: {
        // Enable lazy loading
        lazy: {
          loadPrevNext: true,
        },
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
        pagination: {
          el: '.banner-pager',
          // el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'banner-page-bullet',
          bulletActiveClass: 'active'
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
/* @import "~swiper/dist/css/swiper.css"; */
/* @import '~animate.css/animate.min.css'; */
/* @import "../../../public/css/global.css"; */

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
    background: yellow;
}

.swiper-pagination-bullet {
  height: 300px;
  background: red !important;
}

.banner-page-bullet{
    width: 40px;
    height: 3px;
    position: relative;
    line-height: 3px;
    border-radius: 0;
    /* background: #fff; */
    background: red;
    opacity: 1
}

.banner-page-bullet:before {
    position: absolute;
    width: 40px;
    height: 30px;
    content: '';
    left: 0;
    top: -10px
}

.banner-page-bullet .active {
    background: #00dfb9
}

/* .banner-pager .swiper-pagination-bullet {
    width: 40px;
    height: 3px;
    position: relative;
    line-height: 3px;
    border-radius: 0;
    background: #fff;
    opacity: 1
}

.banner-pager .swiper-pagination-bullet:before {
    position: absolute;
    width: 40px;
    height: 30px;
    content: '';
    left: 0;
    top: -10px
}

.banner-pager .swiper-pagination-bullet-active {
    background: #00dfb9
} */


.banner-down {
    position: absolute;
    top: 90%;
    cursor: pointer;
    left: 50%;
    margin-left: -24px;
    width: 47px;
    height: 47px;
    text-align: center;
    line-height: 47px;
    color: #fff;
    font-size: 24px
}

.banner-down:before {
    content: '';
    position: absolute;
    display: block;
    width: 47px;
    height: 47px;
    background: #fff;
    opacity: .2;
    border-radius: 50%;
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s
}

.banner-down:hover:before {
    background: #00dfb9;
    opacity: .6
}

.banner-down i {
    position: relative;
    z-index: 2
}

.banner-box:hover .banner-ctrl {
    opacity: 1
}

.banner-box.sidebar .banner-bin img {
    width: 100%
}

.ctrl-box {
    opacity: .5
}

.ctrl-box:hover {
    opacity: 1
}

.banner-ctrl .ctrl-box {
    position: absolute;
    color: #a8a8a8;
    width: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 50px;
    cursor: pointer;
    transition: .3s;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s
}

.banner-ctrl .ctrl-box:hover {
    color: #00dfb9
}

.banner-ctrl .ctrl-left {
    left: 5%;
    top: 46%;
    margin-top: -40px
}
.banner-ctrl .ctrl-right {
    right: 5%;
    top: 46%;
    margin-top: -40px
}

@media(max-width:767px) and (orientation:landscape) {
    .banner-bin .table-box {
        padding-bottom: 0
    }

    .banner-news {
        top: 90%;
        left: 12.5%;
        margin: -15px 0 0 0
    }

    .banner-pager {
        top: 90%;
        width: auto !important;
        left: auto !important;
        right: 2.5%;
        margin-top: -1.5px
    }

    .banner-down {
        top: 90%;
        left: 2.5%;
        margin: -24px 0 0 0
    }
}

@media(max-width:767px) and (orientation:portrait) {
    .banner-bin.swiper-slide-active .banner-write .w1 {
        line-height: .4
    }

    .banner-bin .table-box {
        padding-bottom: 20%
    }

    .banner-news {
        top: 74%
    }

    .banner-pager {
        top: 82%
    }

    .banner-down {
        top: 88%
    }

    .banner-ctrl {
        display: none
    }
}
</style>
