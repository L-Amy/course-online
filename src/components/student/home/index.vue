<template>
  <div id="student">
    <header id="header" class="mui-bar mui-bar-nav">
      <h3 class="mui-title">在线课程交互系统</h3>
      <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">
        <span class="mui-icon mui-icon-left-nav el-left">返回</span>
      </button>
    </header>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" @click="switchBar(0)">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" @click="switchBar(1)">
        <span class="mui-icon mui-icon-list"></span>
        <span class="mui-tab-label">已完成</span>
      </a>
      <a class="mui-tab-item" @click="switchBar(2)">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </a>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    switchBar(index) {
      switch (index) {
        case 0:
          this.$router.push({
            path: "/uncomputed"
          });
          break;
        case 1:
          this.$router.push({
            path: "/computed"
          });
          break;
        case 2:
          this.$router.push({
            path: "/person"
          });
          break;
        default:
          break;
      }
    }
  }
};
</script>
