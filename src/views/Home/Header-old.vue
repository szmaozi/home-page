<template>
      <div class="window-head active">
        <div class="head-left">
          <img src="../../../public/images/1487557837.png" />
        </div>
        <hr />
        <div class="visible-lg-block nav-tabs">
          <ul class="swiper-pagination"></ul>
        </div>
        <div class="head-right r1 active">
          <a href="tel:+86-13570805511" title="+86-13570805511">
            <i class="el-icon-phone"></i>
            <b>+86-13570805511</b>
          </a>
        </div>
        <div class="head-rights">
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style>

/*** nav bar **/
.window-head {
	position: absolute;
    display: table;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    width: 100%;
    height: 90px;
    background: rgba(0, 0, 0, 0);
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s
}

.window-head hr {
    display: block;
    position: absolute;
    width: 0;
    height: 3px;
    border: 0;
    margin: 0;
    padding: 0;
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s;
    background: #00dfb9;
    top: 0;
    left: 0
}
.window-head .head-left {
    position: absolute;
    left: 2.5%;
    top: 50%;
    color: #fff;
    cursor: pointer;
    transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%)
}

.window-head .head-left img {
    float: left;
    max-width: 100%;
    max-height: 90px;
    transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    -webkit-transform: scale(1);
    transform-origin: left center;
    -moz-transform-origin: left center;
    -ms-transform-origin: left center;
    -o-transform-origin: left center;
    -webkit-transform-origin: left center;
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s
}

@media(min-width:300px) {
    .window-head .head-left {
        width: 70%
    }
}

@media(min-width:768px) {
    .window-head .head-left {
        width: 50%
    }
}
@media(min-width:1200px) {
    .window-head .head-left {
        width: 20%
    }
}

@media(min-width:1440px) {
    .window-head .head-left {
        width: 25%
    }
}

.window-head ul {
    position: absolute;
    left: 50%;
    top: 50%;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0;
    transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%)
}

.window-head ul li {
    list-style: none;
    cursor: pointer;
    padding: 20px;
    margin: 0;
    font-size: 20px;
    color: #ccc;
    display: inline-block;
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s
}

.window-head ul li.active {
    color: #00dfb9
}

.window-head .head-right {
    position: absolute;
    right: 5%;
    top: 50%;
    margin: 0;
    height: 28px;
    padding-right: 28px;
    transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%)
}

.window-head .head-right.r0 {
    right: 2.5%;
    padding-right: 0 !important
}

.window-head .head-right i {
    color: #00dfb9;
    font-size: 20px;
    border: 2px solid #00dfb9;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 26px;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
    overflow: hidden;
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s
}
.window-head .head-right b {
    color: #00dfb9;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 26px;
    height: 28px;
    line-height: 26px;
    float: left;
    display: block;
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s
}

.window-head .head-rights {
    position: absolute;
    right: 2.5%;
    top: 50%;
    height: 28px;
    transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%)
}

.window-head .head-rights ol {
    font-style: normal;
    margin: 1px;
    padding: 0;
    width: 26px;
    height: 26px;
    display: block;
    cursor: pointer
}

.window-head .head-rights ol:after {
    display: block;
    margin: 0;
    padding: 0;
    content: '';
    clear: both
}

.window-head .head-rights ol li {
    width: 11px;
    height: 11px;
    float: left;
    margin: 1px;
    background: #00dfb9;
    display: block;
    overflow: hidden
}

.window-head .head-rights ol.active li {
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, .1)
}

.window-head.active {
    height: 70px;
    background: rgba(0, 0, 0, .5)
}

.window-head.active .head-left img {
    transform: scale(.777777);
    -moz-transform: scale(.777777);
    -ms-transform: scale(.777777);
    -o-transform: scale(.777777);
    -webkit-transform: scale(.777777)
}

.window-head.active ul li {
    font-size: 16px
}

.window-head.active .head-right {
    height: 24px;
    padding-right: 24px
}

.window-head.active .head-right b {
    font-size: 20px;
    height: 24px;
    letter-spacing: 0;
    line-height: 24px
}

.window-head.active .head-right i {
    font-size: 14px;
    width: 24px;
    height: 24px;
    line-height: 20px
}

.window-head.active .head-rights {
    height: 24px
}

.window-head.active .head-rights ol {
    width: 22px;
    height: 22px
}

.window-head.active .head-rights ol li {
    width: 9px;
    height: 9px
}

@media(max-width:767px) {
    .window-head {
        height: 70px
    }
}

@media(max-width:767px) and (orientation:landscape) {
    .window-head .head-right b {
        letter-spacing: normal
    }
}

@media(max-width:767px) and (orientation:portrait) {
    .window-head .head-left {
        left: 15px
    }

    .window-head .head-right {
        right: 15px
    }

    .window-head .head-right b {
        display: none
    }

    .window-head .head-right i {
        top: 0;
        left: 0
    }
}

@media(max-width:320px) {
    .window-head .head-right {
        padding-right: 15px
    }
}

.nav-tabs {
    border-bottom: 1px solid #e4eaec
}

.nav-tabs>li {
    float: left;
    margin-bottom: -1px
}

.nav-tabs>li>a {
    margin-right: 2px;
    line-height: 1.57142857;
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0
}

.nav-tabs>li>a:hover {
    border-color: transparent transparent #e4eaec
}

.nav-tabs>li.active>a,
.nav-tabs>li.active>a:focus,
.nav-tabs>li.active>a:hover {
    color: #4e97d9;
    cursor: default;
    background-color: #fff;
    border: 1px solid #e4eaec;
    border-bottom-color: transparent
}

.nav-tabs.nav-justified {
    width: 100%;
    border-bottom: 0
}

.nav-tabs.nav-justified>li {
    float: none
}

.nav-tabs.nav-justified>li>a {
    margin-bottom: 5px;
    text-align: center
}

.nav-tabs.nav-justified>.dropdown .dropdown-menu {
    top: auto;
    left: auto
}

@media(min-width:768px) {
    .nav-tabs.nav-justified>li {
        display: table-cell;
        width: 1%
    }

    .nav-tabs.nav-justified>li>a {
        margin-bottom: 0
    }
}

.nav-tabs.nav-justified>li>a {
    margin-right: 0;
    border-radius: 3px
}

.nav-tabs.nav-justified>.active>a,
.nav-tabs.nav-justified>.active>a:focus,
.nav-tabs.nav-justified>.active>a:hover {
    border: 1px solid #e4eaec
}

@media(min-width:768px) {
    .nav-tabs.nav-justified>li>a {
        border-bottom: 1px solid #e4eaec;
        border-radius: 3px 3px 0 0
    }

    .nav-tabs.nav-justified>.active>a,
    .nav-tabs.nav-justified>.active>a:focus,
    .nav-tabs.nav-justified>.active>a:hover {
        border-bottom-color: #fff
    }
}

.nav-pills>li {
    float: left
}










.nav-tabs ul{
	height: 100%;
	padding-top: 0;
	padding-bottom: 0;
	margin-top: 0;
	margin-bottom: 0;
}

.nav-tabs ul li {
  padding: 0 8px 0 8px;
  margin: 0 0 0 0;
	border-top: 4px solid transparent;
	height: 65px;
	text-align: center;
	line-height:70px;
  outline:none;
}

.nav-tabs ul li.active {
  display: inline-block;
	padding-top: 0px;
	padding-bottom: 0;
	margin-top: 0px;
	margin-bottom: 0;
	height: 65px;
	text-align: center;
	line-height:70px;
  border-top: 5px solid red;
  outline:none;
  /*outline:medium;*/
}

.nav-tabs ul li:hover {
  display: inline-block;
	padding-top: 0px;
	padding-bottom: 0;
	margin-top: 0px;
	margin-bottom: 0;
	height: 65px;
  /*background-color: red;*/
	text-align: center;
	line-height:70px;
  border-top: 5px solid red;
  outline:none;
  /*outline:medium;*/
}

</style>
