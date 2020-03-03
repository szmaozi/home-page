<template>
<div class="news-container">
  <b>NEWS：</b>
  <swiper :options="swiperOption" style="height:30px">
    <swiper-slide v-for="item in data" :key="item.id">
      <a :href="item.href" :title="item.title">{{item.title}}</a>
    </swiper-slide>
  </swiper>
  <p><a href="news/" title="新闻资讯">more</a></p>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'news',
  data () {
    return {
      swiperOption: {
        direction : 'vertical',
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        height: 30,
        /*
        height: 30,
        setWrapperSize :true,
        */
        autoplay: {
           delay: 2500,
           stopOnLastSlide: false,
           disableOnInteraction: true,
        },
      },
      data : [
        { id: 1, href: 'news/12181', title: 'AAAAAAAAAA不不不' },
        { id: 2, href: 'news/12182', title: 'BBBBBBBB不不不' },
        { id: 3, href: 'news/12183', title: 'CCCCCC不不不' },
        { id: 4, href: 'news/12186', title: 'DDDDDD不不不' },
      ]
    }
  },
  components: {
    swiper,
    swiperSlide,
  }
}
</script>

<style lang="css" scoped>
.news-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.news-container .news-item {
    display: block;
}

.new-container b {
    float: left;
    color: #00dfb9;
    font-weight: bold;
    margin-right: 10px
}

.news-container span {
    float: left;
    overflow: hidden;
    height: 30px;
    overflow: hidden
}

.news-container .swiper-wrapper {
    float: left;
    margin: 0;
    padding: 0
}

.news-container .swiper-slide {
    list-style: none;
    color: #ddd;
    margin: 0;
    padding: 0 1px 0 0;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 270px;
    height: 30px;
    line-height: 30px;
    overflow: hidden
}

.news-container .swiper-slide a{
    color: #ddd
}

.news-container .swiper-slide a:hover {
    text-decoration: underline;
    color: #fff
}

.news-container p {
    float: left;
    margin: -3px 0 0 10px
}

.news-container p a {
    color: #00dfb9;
    border-bottom: 1px dotted #00dfb9
}
</style>
