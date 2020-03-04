<template>
  <div class="home">
  <swiper :options="swiperOptionMenu" class="home-menu" ref="menu_swiper" >
  <swiper-slide style="height:100%; width:30%; min-width:100px;max-width:320px; background-color:red">
shdhfhdshfhdsf
  </swiper-slide>
  <swiper-slide>
  <Header :toggleMenu="toggleMenu" ref="ref_header"/>
    <div class="window-box">
      <swiper :options="swiperOption" class="window-cut" ref="home_swiper" >
        <swiper-slide data-hash="banner" data-title="首页">
          <!--<div style="height:100%" class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s">-->
          <div style="height: 100%">
          <Banner />
          </div>
        </swiper-slide>
        <swiper-slide data-hash="service" data-title="服务" >
          <div :data-background="require('$../../../public/images/d2be13178d9149cf911073330d03c5ed.jpeg')"  class="swiper-lazy service-container">
            <div class="title-box">
              <h1 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s" >我们的服务</h1>
              <h2><font color=white>Main business</font></h2>
            </div>
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </div>
        </swiper-slide>
        <swiper-slide data-hash="case" data-title="案例">
        </swiper-slide>
        <swiper-slide data-hash="about" data-title="关于">
        </swiper-slide>
        <swiper-slide data-hash="hezuo" data-title="合作">
        </swiper-slide>
        <swiper-slide data-hash="contract" data-title="联系">
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
  </swiper-slide>
  </swiper>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Header from "./Header.vue";
import Banner from "./Banner.vue";
import * as swiperAni from "../../../public/js/swiper.animate.min.js";
export default {
  name: "Home",
  data() {
	// const self = this
    return {
      msg: "",
		swiperOptionMenu: {
		initialSlide: 1,
		resistanceRatio: 0,
		slidesPerView: 'auto',
		slideToClickedSlide: true,
          on: {
            slideChange() {
				console.log("menu------------")
				/**
              if (this.activeIndex === 0) {
                self.menuCross = true
              } else {
                self.menuCross = false
              }
			**/
            }
          }
      },
      swiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        centeredSlides: true,
        resistanceRatio: 0,
        speed: 700,
        effect: "slide",
        parallax: "true",
        keyboard: {
          enabled: true
        },
        roundLengths: true,
        mousewheel: true,
        hashNavigation: {
          watchState: true,
        },
        lazy: {
          loadPrevNext: true,
        },
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
              var text = '<li class="' + className + '" data-index="' + (index + 1) + '">' + title + "</li>"
              return (text)
          }
        },
        paginationClickable: true,
        on: {
          init: function() {
            //初始化
            console.log("init!!!");
            swiperAni.swiperAnimateCache(this); //隐藏动画元素
            swiperAni.swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function() {
            //切换完执行的方法
            var num = this.activeIndex; //当前是第几个页面
            console.log(num);
            // ......    //这里是自己逻辑的代码
            swiperAni.swiperAnimate(this);
          },

          // 使用es6的箭头函数，使this指向vue对象
          slideChange: ()=>{
            if (this.swiper)
            {
              swiperAni.swiperAnimate(this.swiper);
              if (this.swiper.activeIndex === 0) {
                this.$refs.ref_header.disActive()
              }
              else {
                this.$refs.ref_header.doActive()
              }
              let that = this
              window.setTimeout(function() {
                that.$refs.ref_header.nav_tabs_active()
              }, 400)
            }
          }
        }
      }
    };
  },
  computed: {
      swiper(){
          return this.$refs.home_swiper.swiper
      },
      swiper_menu(){
          return this.$refs.menu_swiper.swiper
      }
  },
  methods: {
    gotoNext() {
        this.swiper.slideNext()
    },
	show_menu() {
      console.log('show_menu')
	},
      toggleMenu() {
        if (this.swiper_menu.activeIndex === 0) {
          this.swiper_menu.slideNext()
        } else {
          // this.menuCross = false
          this.swiper_menu.slidePrev()
        }
      },
  },
  mounted() {
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
@import "../../../public/css/animate.min.css";
@import "../../../public/css/global.css";

* {
  padding: 0;
  margin: 0;
}

.home {
	/*
  background-color: aquamarine;
  */
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

.service-container {
    /*width: 10%;
    height: 100%;
    float: left;
    display: block;
    overflow: hidden;
    */
    position: relative;
    width:100%;
    height: 100%;
    background: center no-repeat;
    background-size: cover;
}

.title-box {
  position: relative;
  top: 50%;
  /**
  left: 50%;
  **/
}

</style>
