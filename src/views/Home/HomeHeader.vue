<template>
<el-menu
:default-active="activeIndex2"
class="nav-bar"
mode="horizontal"
@select="handleSelect"
background-color=transparent
text-color="#fff"
active-text-color="#ffd04b" >
    <div class="nav-left">
        <img src="../../../public/images/1487557837.png" />
    </div>

    <hr id="id_hr"/>
    <div class="nav-middle hidden-sm-and-down" v-on:mouseenter="mouse_in" @mouseleave="mouse_out" @mousemove="mouse_in">
      <div ref="test">
        hello!!
      </div>
        <el-menu-item class="nav-item" index="1" data-index="1" ref="menu1">处理中心</el-menu-item>
        <el-menu-item class="nav-item" index="2" data-index="2" ref="menu2">AAAAAA</el-menu-item>
        <el-menu-item class="nav-item" index="3" data-index="3" ref="menu3">BBBBB</el-menu-item>
        <el-menu-item class="nav-item" index="4" data-index="4" ref="menu4">CCCCC</el-menu-item>
        <el-menu-item class="nav-item" index="5" data-index="5" ref="menu5">处理中心</el-menu-item>
        <el-menu-item class="nav-item" index="6" data-index="6" ref="menu6">处理中心</el-menu-item>
    </div>

    <div class="nav-btn">
      <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>

</el-menu>
</template>

<script>
export default {

  name: 'HomeHeader',

  data () {
    return {
        activeIndex: '1',
        activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    wfun(that, times) {
        console.log("--------------")
        if (typeof(wtime) != 'undefined') clearTimeout(wtime);
        var wtime = window.setTimeout(function() {
            if (that.length > 0) {
                var wleft = that.offset().left + 15;
                var wwidth = that.width() + 10;
                var obj=document.getElementById('id_hr')
                var cssText = " left:" + wleft + "; width:" + wwidth + ";"
                obj.style.cssText = cssText
                // div.css({
                //     'left': wleft,
                //     'width': wwidth
                // });
            }
        }, times);
    },

    mouse_in(event) {
      // console.log(event.target.nodeName)
      // console.log(event.target.dataset)
      if (event.target.nodeName.toLowerCase() === 'li'){
        // console.log(event.target.dataset)
        const index = parseInt(event.target.dataset.index)
        // const obj = this.$refs.menuitem[index-1]
        const strRef = 'menu' + index.toString()
        console.log(strRef)
        const obj = this.$refs[strRef]
        console.log(obj.$el.offsetLeft)
        console.log(obj.$el.offsetWidth)
        console.log(obj.$el.getBoundingClientRect())
        //const rect = this.$refs[strRef].getBoundingClientRect()
        //const rect = this.$refs.menu1.getBoundingClientRect().top
        /**
        this.$nextTick(function () { 
        this.$refs['test'].style.color = 'red'
        const rect = this.$refs['test'].getBoundingClientRect()
          console.log(rect)
        })
        **/
      }
      else
      {
        console.log('error')
      }
      /**
      // var obj=document.getElementById('id_hr')
      var obj=document.querySelector('.nav-middle li.is-active')
      console.log(obj)
      console.log('000000000000000')
      this.wfun(obj, 1)
      **/
    },

    mouse_out() {

    }
  }
}
</script>

<style lang="css" scoped>
.nav-bar {
  position:absolute;
  display:table;
  z-index:99999;
  width:100%;
  height:90px;
  border: none !important;
  outline:none;
}

.nav-item {
  font-size: 20px;
}
.nav-middle .nav-item {
    display: inline-block;
}

.nav-item:hover {
  background-color:transparent !important;
  color: red !important;
}

.nav-item:focus {
    outline:none;
    background-color: transparent !important;
}

.nav-left {
    position: absolute;
    left: 2.5%;
    top: 50%;
    outline: none;
    transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%)
}

.nav-left img {
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

.nav-bar hr {
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

.nav-middle {
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%)
}

.nav-right {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%)
}

.nav-right.r0 {
    right: 2.5%;
    padding-right: 0;
}

.nav-right i {
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

.nav-right b {
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


.nav-btn {
    position: absolute;
    right: 2.5%;
    top: 50%;
    height: 28px;
    outline:none;
    transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%)
}

.nav-btn ol {
    font-style: normal;
    margin: 1px;
    padding: 0;
    width: 26px;
    height: 26px;
    display: block;
    cursor: pointer
}

.nav-btn ol:after {
    display: block;
    margin: 0;
    padding: 0;
    content: '';
    clear: both
}

.nav-btn ol li {
    width: 11px;
    height: 11px;
    float: left;
    margin: 1px;
    background: #00dfb9;
    display: block;
    overflow: hidden
}

.nav-btn ol.active li {
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, .1)
}


@media(min-width:300px) {
    .nav-bar .nav-left {
        width: 70%
    }
}

@media(min-width:768px) {
    .nav-bar .nav-left {
        width: 50%
    }
}

@media(min-width:1200px) {
    .nav-bar .nav-left {
        width: 20%
    }
}

@media(min-width:1440px) {
    .nav-bar .nav-left {
        width: 25%
    }
}



</style>
