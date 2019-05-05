<template>
    <div class="mui-content">
      <div class="uncomputed-icon"><i class="iconfont icon-nanguo"></i>  未完成</div>
      <div class="el-container">
        <div class="el-group">
          <router-link to="/uncomputedEdit"><div class="el-group-item" v-for="item in taskList" v-bind:key="item.id">{{item.name}}</div></router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "Uncomputed",
  data() {
    return {
      taskList: [
        { id: 1, name: "请描述vue的双向绑定原理?" },
        { id: 2, name: "请描述vue的双向绑定原理?" },
        { id: 3, name: "请描述vue的双向绑定原理?" },
        { id: 4, name: "请描述vue的双向绑定原理?" },
        { id: 5, name: "请描述vue的双向绑定原理?" },
        { id: 6, name: "请描述vue的双向绑定原理?" },
        { id: 7, name: "请描述vue的双向绑定原理?" },
        { id: 8, name: "请描述vue的双向绑定原理?" },
        { id: 9, name: "请描述vue的双向绑定原理?" },
        { id: 10, name: "请描述vue的双向绑定原理?" },
        { id: 11, name: "请描述vue的双向绑定原理?" }
      ]
    };
  }
};
</script>
<style>
.uncomputed-icon{
  color: #ffffff;
  text-align: center;
  height: 40px;
  background-color:#ff0000;
  line-height: 40px;
  font-weight: bolder;
}
</style>
