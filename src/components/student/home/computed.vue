<template>
  <div class="mui-content">
    <div class="computed-icon-header"><i class="iconfont icon-kaixin"></i>  已完成</div>
     <div class="el-container">
        <div class="el-group">
          <router-link to="/taskDetail">
          <div class="el-group-item" v-for="item in taskList" v-bind:key="item.id">{{item.name}}<span class="have-read"><i class="iconfont icon-paperplane-fill"></i></span></div>
          </router-link>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "computed",
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
  },
  methods: {
  }
};
</script>

<style>
.computed-icon-header{
  color: #ffffff;
  text-align: center;
  height: 40px;
  background-color:#009688;
  line-height: 40px;
  font-weight: bolder;
}
.have-read{
width:50px;
float: right;
text-align: right;
padding-left: 10px;
}
</style>


