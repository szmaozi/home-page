<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function(){
    var M = document.querySelector('meta[name="generator"]').getAttribute('data-variable'),
    D = M.split(',');
    M = new Array();
    M['weburl'] = D[0];
    M['lang'] = D[1];
    M['classnow'] = parseInt(D[2]);
    M['id'] = parseInt(D[3]);
    M['module'] = parseInt(D[4]);
    M['tem'] = D[0] + 'templates/' + D[5];
    var deviceType = /iPad/.test(navigator.userAgent) ? 't' : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? 'm' : 'p',
        ucBro = /UC/.test(navigator.userAgent)

    console.log(M)
    console.log(deviceType)
    console.log(ucBro)
  }
}
</script>

<style lang="scss">
body {
  padding:0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
