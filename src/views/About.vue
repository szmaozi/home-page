<template>
  <div class="about">
    hello!
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple" style="background-color: red">ijjj</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple" style="background-color: blue">dsfsd</div></el-col>
</el-row>
    <h1>This is an about page</h1>
    <div>
     <span class="a1"></span>
     <span class="a1"></span>
     <span class="a1"></span>
     <span class="a1"></span>
     <span class="a1"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.about {
  position: fixed;
  top: 0px;
  left: 0px;
}

.a1 {
/*  margin: 5px;
  padding: 50px;
*/
  margin-left: 15px;
  background-color: red;
  display: inline-block;
  height: 3px;
  width: 20px;
}
</style>
