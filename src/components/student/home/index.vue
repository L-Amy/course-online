<template>
  <div id="student">
    <header id="header" class="mui-bar mui-bar-nav">
      <h3 class="mui-title">在线课程交互系统</h3>
      <button class="mui-btn mui-btn-blue mui-btn-link mui-pull-right" @click="exitSystem">退出</button>
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
import {logout} from "@/api/user/index";
import {getUserInfo,removeUserInfo} from "@/utils/auth";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    exitSystem() {
      var btn = ["是", "否"];
      var _self=this;
      mui.confirm('确认退出此系统？', "提示框", btn, function(res) {
        if(res.index==0){
          var user=getUserInfo();
          logout({type:user.type,account:user.account}).then(res=>{
            removeUserInfo();
            _self.$router.push({
              path:"/"
            })
          })
        }
      });
    },
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
