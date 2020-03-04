<template>
    <el-menu
        :default-active="activeIndex2"
        class="nav-bar"
        :class="{active: isActive}"
        mode="horizontal"
        @select="handleSelect"

        text-color="#fff"
        active-text-color="#ffd04b"
        ref="ref_navbar"
    >
        <div class="nav-left">
            <a href="#banner">
            <img src="../../../public/images/1487557837.png" />
            </a>
        </div>

        <hr id="id_hr" />
        <ul class="nav-tabs swiper-pagination hidden-sm-and-down"
            @mouseenter="nav_tabs_hover"
            @mousemove="nav_tabs_hover"
            ref="ref_navtabs">
        </ul>

        <div class="nav-right">
            <div class="nav-btn" @click="toggleMenu">
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
        </div>
    </el-menu>
</template>

<script>
import {objIsNull} from '../../utils/dom.js'
export default {
    name: 'HomeHeader',

    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            isActive: false,
        }
    },
    props: {
		toggleMenu: {
			type: Function,
			default: null
		}
    },
    methods: {
		
        doActive() {
            console.log('Active')
            this.isActive = true
            // this.$ref.ref_navbar.style
        },
        disActive() {
            this.isActive = false
            console.log('disactive')
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        },

        hr_cal(obj, times) {
            if (typeof wtime != 'undefined') clearTimeout(wtime)
            var wtime = window.setTimeout(function() {
                if (!objIsNull(obj)) {
                    var rect = obj.getBoundingClientRect()
                    var left = rect.x + 15
                    var width = rect.width - 30
                    var hr = document.getElementById('id_hr')
                    var cssText = ' left:' + left + 'px; width:' + width + 'px;'
                    hr.style.cssText = cssText
                }
            }, times)
        },

        nav_tabs_hover(event) {
            if (event.target.nodeName.toLowerCase() === 'li') {
                // const index = parseInt(event.target.dataset.index)
                // console.log(event.target.offsetLeft)
                this.$nextTick(function () {
                    this.hr_cal(event.target, 1)
                })
            }
        },

        nav_tabs_active() {
            var obj = document.getElementsByClassName("nav-item active");
            this.hr_cal(obj[0], 2)
        },
    }
}
</script>

<style lang="css" scoped>
@import "../../../public/css/global.css";
.nav-bar {
    position: absolute;
    display: table;
    z-index: 999;
    width: 100%;
    height: 90px;
    border: none !important;
    outline: none;
    background-color:transparent;
}

.nav-tabs {
    position: absolute;
    left: 50%;
    top: 50%;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 20px;
    outline: none;
    transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
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
    -webkit-transform: translate(0, -50%);
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
    transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    -webkit-transition: 0.3s;
}

.nav-bar hr {
    display: block;
    position: absolute;
    width: 0;
    height: 3px;
    border: 0;
    margin: 0;
    padding: 0;
    transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    -webkit-transition: 0.3s;
    background: #00dfb9;
    top: 0;
    left: 0;
}

.nav-middle {
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
}

.nav-right {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
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
    transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    -webkit-transition: 0.3s;
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
    transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    -webkit-transition: 0.3s;
}

.nav-btn {
    position: absolute;
    right: 2.5%;
    top: 50%;
    height: 28px;
    outline: none;
    transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
}

.nav-btn ol {
    font-style: normal;
    margin: 1px;
    padding: 0;
    width: 26px;
    height: 26px;
    display: block;
    cursor: pointer;
}

.nav-btn ol:after {
    display: block;
    margin: 0;
    padding: 0;
    content: '';
    clear: both;
}

.nav-btn ol li {
    width: 11px;
    height: 11px;
    float: left;
    margin: 1px;
    background: #00dfb9;
    display: block;
    overflow: hidden;
}

.nav-btn ol.active li {
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
}

.nav-btn ol:hover {
    width:30px;
    height: 30px;
}

.nav-btn ol:hover li{
    background: #fff;
    width: 13px;
    height: 13px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
}

.nav-bar.active{
    height: 70px;
    /*background: rgba(0,0,0,.5)*/
    background-color: red;
}

@media (min-width: 300px) {
    .nav-bar .nav-left {
        width: 70%;
    }
}

@media (min-width: 768px) {
    .nav-bar .nav-left {
        width: 50%;
    }
}

@media (min-width: 1200px) {
    .nav-bar .nav-left {
        width: 20%;
    }
}

@media (min-width: 1440px) {
    .nav-bar .nav-left {
        width: 25%;
    }
}
</style>
