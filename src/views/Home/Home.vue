<template>
  <div class="home">
    <Header />
    <div class="window-box">
      <swiper :options="swiperOption" class="window-cut" ref="home_swiper">
        <swiper-slide style="background-color:#41b883" data-hash="banner" data-title="首页">
          <!-- <div class="ani banner-box" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"> -->
          <Banner />
          <!-- </div> -->
        </swiper-slide>
        <swiper-slide data-hash="service" data-title="服务">
        </swiper-slide>
        <swiper-slide data-hash="case" data-title="案例">
        </swiper-slide>
        <swiper-slide style="background-color:seagreen" data-hash="about" data-title="关于">
        </swiper-slide>
        <swiper-slide style="background-color:yellow" data-hash="hezuo" data-title="合作">
        </swiper-slide>
        <swiper-slide style="background-color:pink" data-hash="contract" data-title="联系">
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <!--         <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
 -->
<!--         <div class="swiper-scrollbar wrap-scroll" slot="scrollbar">
          <div class="swiper-scrollbar-drag"></div>
        </div>
 -->
    <div class="banner-down" slot="button-next" @click="gotoNext"><i class="el-icon-bottom"></i></div>
      </swiper>
    </div>
    <span>+++++++++</span>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Header from "./Header.vue";
import Banner from "./Banner.vue";
import * as swiperAni from "../../../public/js/swiper.animate.min.js";
// import {swiperAnimateCache,swiperAnimate} from "../../../public/js/swiper.animate.min.js"
export default {
  name: "Home",
  data() {
    return {
      msg: "",
      swiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        centeredSlides: true,
        lazy: true,
        resistanceRatio: 0,
        speed: 700,
        effect: "slide",
        parallax: "true",
        keyboard: {
          enabled: true
        },
        mousewheel: true,
        hashNavigation: {
          watchState: true,
        },
        // lazyLoadingOnTransitionStart: true,
        // roundLengths : true,
        //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        // observer:true,
        // observeParents:true,
        //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        // setWrapperSize: true,
        // resistance: true,
        // spaceBetween: 30,
        //width: window.innerWidth,
        //height: window.innerHeight,
        //preventInteractionOnTransition: true,
        // loop: true,
        pagination: {
          el: ".nav-tabs",
          bulletClass: "nav-item",
          bulletActiveClass: "active",
          clickable: true,
          renderBullet: function(index, className) {
            var title = this.slides.eq(index).attr("data-title");
            // console.log(this.$el.attr("data-title"))
            // switch(index){
            //   case 0:text='首页';break;
            //   case 1:text='服务';break;
            //   case 2:text='案例';break;
            //   case 3:text='关于';break;
            //   case 4:text='合作';break;
            //   case 5:text='联系';break;
            // }
            if (title != "")
              // var text = '<li data-v-588f3313 class="' + className + '" data-index="' + (index + 1) + '">' + title + "</li>"
              var text = '<li class="' + className + '" data-index="' + (index + 1) + '">' + title + "</li>"
              return (text)
          }
        },
        paginationClickable: true,
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        // watchSlidesProgress : true,
        // watchSlidesVisibility : true,
        // scrollbar: {
        //     el: '.wrap-scroll',
        //     hide: false,
        //     draggable: true,
        // },
        // autoplay : {
        //   delay : 10000,//自动播放延迟10s
        // },
        on: {
          init: function() {
            //初始化
            console.log("init!!!");
            // swiperAni.swiperAnimateCache(this); //隐藏动画元素
            // swiperAni.swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function() {
            //切换完执行的方法
            var num = this.activeIndex; //当前是第几个页面
            console.log(num);
            // ......    //这里是自己逻辑的代码
            // swiperAni.swiperAnimate(this);
          },
          slideChange: function() {
            swiperAni.swiperAnimate(this);
          }
        }
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
      // swiperSlides: [1,2,3,4,5]
    };
  },
  computed: {
      swiper(){
          return this.$refs.home_swiper.swiper
      }
  },
  methods: {
    gotoNext() {
        this.swiper.slideNext()
      // if (this.swiper.activeIndex >= 4) {
        // event.target.style="display:none"
      // }
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
  },
  components: {
    swiper,
    swiperSlide,
    Header,
    Banner
  }
};
</script>
<style scoped>
@import "~swiper/dist/css/swiper.css";
/* @import '~animate.css/animate.min.css'; */
@import "../../../public/css/global.css";

* {
  padding: 0;
  margin: 0;
}

.home {
  background-color: aquamarine;
  position: fixed;
  /* ?? why? */
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

</style>
