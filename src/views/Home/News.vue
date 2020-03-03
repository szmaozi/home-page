<template>
          <div class="banner-news">
            <b>NEWS：</b>
            <span class="banner-span">
              <ol class="banner-ol">

                <li class="banner-li"><a href="news/shownews.php?lang=cn&id=86" title="从阿里云到腾讯云 中国云市场竞争才刚开始">从阿里云到腾讯云 中国云市场竞争才刚开始</a></li>

                <li class="banner-li"><a href="news/shownews.php?lang=cn&id=64" title="公司新获3项计算机软件著作权认证">公司新获3项计算机软件著作权认证</a></li>

                <li class="banner-li"><a href="news/shownews.php?lang=cn&id=77" title="云计算行业深度调研及发展趋势">云计算行业深度调研及发展趋势</a></li>

                <li class="banner-li"><a href="news/shownews.php?lang=cn&id=78" title="云计算发展路径，中美相差5年">云计算发展路径，中美相差5年</a></li>

                <li class="banner-li"><a href="news/shownews.php?lang=cn&id=83" title="听了想打人！马云：我觉得自己是一无所有的人，没时间花钱">听了想打人！马云：我觉得自己是一无所有的人，没时间花钱</a></li>

                <li class="banner-li"><a href="news/shownews.php?lang=cn&id=85" title="企业为何纷纷要建站？">企业为何纷纷要建站？</a></li>

                <li class="banner-li"><a href="news/shownews.php?lang=cn&id=84" title="国内哪些地方适合自建数据中心？">国内哪些地方适合自建数据中心？</a></li>

                <li class="banner-li"><a href="news/shownews.php?lang=cn&id=82" title="这家公司专门做假数据中心！不仅合法，还赚翻了！">这家公司专门做假数据中心！不仅合法，还赚翻了！</a></li>

                <li class="banner-li"><a href="news/shownews.php?lang=cn&id=81" title="阿里云主机按量收费变按配置收费 开启坑爹模式">阿里云主机按量收费变按配置收费 开启坑爹模式</a></li>

              </ol>
            </span>
            <p><a href="news/" title="新闻资讯">more</a></p>
          </div>
</template>

<script>
export default {

  name: 'news',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.banner-news {
    position: absolute;
    /*positon: fixed;*/
    background-color: red;
    z-index: 9999;
/*    top: 79%;
    left: 50%;*/
    top: 200px;
    left: 40px;
    margin-left: -188px;
    height: 30px;
    width: 100px;
    line-height: 30px
}

.banner-news b {
    float: left;
    color: #00dfb9;
    font-weight: bold;
    margin-right: 10px
}

.banner-news span {
    float: left;
    overflow: hidden;
    height: 30px;
    overflow: hidden
}

.banner-news span ol {
    float: left;
    margin: 0;
    padding: 0
}

.banner-news span ol li {
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

.banner-news span ol li a {
    color: #ddd
}

.banner-news span ol li a:hover {
    text-decoration: underline;
    color: #fff
}

.banner-news p {
    float: left;
    margin: -3px 0 0 10px
}

.banner-news p a {
    color: #00dfb9;
    border-bottom: 1px dotted #00dfb9
}
</style>
