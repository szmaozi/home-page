<template>
  <div class="about" style="background-color:red">
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
    <h1>This is an about page</h1>
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
body {
  padding:0px !important;
  margin: 0px !important;
}
* {
  padding:0px !important;
  margin: 0px !important;
}

.about {
  position: fixed;
  top: 0px;
  left: 0px;
}
</style>
