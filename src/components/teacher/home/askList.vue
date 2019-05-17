<template>
  <div class="mui-content">
    <div class="el-group">
      <div class="el-group-item" v-for="(item) in askList" :key="item.Id">
        <div class="el-group-item-left">
          <div class="student-header">
            <div class="header-portrait">
              <img src="@/assets/img/studentImg.jpg" alt>
            </div>
            <span>{{item.Name}}</span>
          </div>
        </div>
        <div class="el-group-item-right">
        {{item.DisscusQuestion}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAskList } from "@/api/task/index";
export default {
  name: "askList",
  data() {
    return {
      askList: []
    };
  },
  created: function() {
    this.getAskList();
  },
  methods: {
    getAskList() {
      getAskList().then(res => {
        this.askList = res.data;
      });
    }
  }
};
</script>
<style>
.el-group-item-left{
    width: 16%;
    float: left;
}
</style>


