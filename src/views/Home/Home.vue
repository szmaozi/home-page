<template>
  <div class="home">
    <Header/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- swiper -->
    <div class="window-box">
      <div class="window-head active">
        <div class="head-left">
          <img src="../../../public/images/1487557837.png">
        </div>

        <hr>
        <div class="visible-lg-block nav-tabs">
          <ul class="swiper-pagination"></ul>
        </div>

        <div class="head-right r1 active">
          <a href="tel:+86-13570805511" title="+86-13570805511">
            <i class="fa fa-phone"></i>
            <b>+86-13570805511</b>
          </a>
        </div>

        <div class="head-rights">
          <ol><li></li><li></li><li></li><li></li></ol>
        </div>
      </div>
      <!-- <swiper :options="swiperOption" class="window-cut" style="height: 800px" data-title='xxxxxxxx'> -->
      <swiper :options="swiperOption" class="window-cut" data-title='xxxxxxxx'>
        <!-- <swiper-slide style="background-color:#41b883" data-title="首页">mooSlide 1</swiper-slide>
        <swiper-slide style="background-color:red" data-title='服务'>Slide 2</swiper-slide>
        <swiper-slide style="background-color:skyblue" data-title='案例'>Slide 3</swiper-slide>
        <swiper-slide style="background-color:seagreen" data-title='关于'>Slide 4</swiper-slide>
        <swiper-slide style="background-color:yellow" data-title='合作'>Slide 5</swiper-slide>
        <swiper-slide style="background-color:pink" data-title='联系'>Slide 6</swiper-slide> -->
        
        <swiper-slide style="background-color:#41b883" data-title="首页">
          <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
          mooSlide 1
          </div>
        </swiper-slide>
        <swiper-slide style="background-color:red" data-title='服务'>
          <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
          Slide 2
          </div>
        </swiper-slide>
        <swiper-slide style="background-color:skyblue" data-title='案例'>
          <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
          Slide 3
          </div>
        </swiper-slide>
        <swiper-slide style="background-color:seagreen" data-title='关于'>
          <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
          Slide 4
          </div>
        </swiper-slide>
        <swiper-slide style="background-color:yellow" data-title='合作'>
          <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
          Slide 5
          </div>
        </swiper-slide>
        <swiper-slide style="background-color:pink" data-title='联系'>
          <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
          Slide 6
          </div>
        </swiper-slide>

        <!-- <swiper-slide class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="background-color:#41b883" data-title="首页">mooSlide 1</swiper-slide>
        <swiper-slide class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="background-color:red" data-title='服务'>Slide 2</swiper-slide>
        <swiper-slide class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="background-color:skyblue" data-title='案例'>Slide 3</swiper-slide>
        <swiper-slide class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="background-color:seagreen" data-title='关于'>Slide 4</swiper-slide>
        <swiper-slide class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="background-color:yellow" data-title='合作'>Slide 5</swiper-slide>
        <swiper-slide class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="background-color:pink" data-title='联系'>Slide 6</swiper-slide> -->
        <span>-------------</span>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar wrap-scroll">
          <div class="swiper-scrollbar-drag" ></div>
        </div>
      </swiper>
    </div>
    <span>+++++++++</span>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import {Header} from './Header.vue'
import * as swiperAni from "../../../public/js/swiper.animate.min.js"
// import {swiperAnimateCache,swiperAnimate} from "../../../public/js/swiper.animate.min.js"
export default {
  name: 'Home',
  data() {
    return {
      msg: '',
      swiperOption: {
        //wrapperClass : 'maozi',
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: 'vertical',
        // direction: 'horizontal',
        // slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        width: window.innerWidth,
        height : window.innerHeight,
        lazy: true,
        lazyLoadingOnTransitionStart: true,
        // roundLengths : true,
        //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        observeParents: true, 
        //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        setWrapperSize: true,
        // resistance: true,
        resistanceRatio: 0,
        preventInteractionOnTransition : true,
        speed: 700,
          effect:"slide",
          // effect: 'fade',
          parallax:"true",
          // loop: true,
          keyboard: {
            enabled: true,
          },
          mousewheel: true,
          mousewheelControl: true,
          pagination: {
            el: '.window-head ul',
            // el: 'window-head ul',
            bulletClass: 'cut',
            bulletActiveClass: 'active',
            clickable: true,
            // type: 'custom',
            // renderCustom: function (swiper, current, total) {
            //   return current + ' of ' + total;
            // },
            renderBullet: function (index, className) {
              var title=this.slides.eq(index).attr('data-title')
              console.log(className)
              // console.log(this.$el.attr("data-title"))
              // switch(index){
              //   case 0:text='首页';break;
              //   case 1:text='服务';break;
              //   case 2:text='案例';break;
              //   case 3:text='关于';break;
              //   case 4:text='合作';break;
              //   case 5:text='联系';break;
              // }
              console.log(title)
              if (title != '') return '<li class="' + className + '" data-index="' + (index + 1) + '">' + title + '</li>';
            },
          },
          paginationClickable: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          hashNavigation: true,
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
              init:function(){
                //初始化
                console.log('init!!!')
                // swiperAni.swiperAnimateCache(this); //隐藏动画元素 
                // swiperAni.swiperAnimate(this); //初始化完成开始动画
              },
              slideChangeTransitionEnd: function(){//切换完执行的方法
                var num = this.activeIndex;//当前是第几个页面
                console.log(num)
                // ......    //这里是自己逻辑的代码
                // swiperAni.swiperAnimate(this);
              },
              slideChange: function () {
                swiperAni.swiperAnimate(this)
              }
         }
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      // swiperSlides: [1,2,3,4,5]
    }
  },
  computed: {
    //   swiper(){
    //       return this.$refs.mySwiper.swiper
    //   }
  },
  mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)      
  },
  methods: {
  },
  components: {
      swiper,
      swiperSlide,
      Header,
  }
}
</script>

<style scoped>
@import '~swiper/dist/css/swiper.css';
/* @import '~animate.css/animate.min.css'; */
@import '../../../public/css/global.css';

* {
  padding: 0;
  margin: 0;
}

.home {
  background-color: aquamarine;
  position: fixed;  /* ?? why? */
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
