<template>
  <div class="mui-content">
    <div class="el-container">
      <div class="el-group">
        <div class="el-group-item" v-for="(item,index) in taskList" v-bind:key="item.Id">
          <div class="task-message">{{index+1}}. {{item.Content}}</div>
          <span class="task-operator">
            <button
              type="button"
              class="el-button el-button-text-secondary task-edit"
              @click="deleteTask(item.Id)"
            >删除</button>
            <button
              type="button"
              class="el-button el-button-text-primary task-edit"
              @click="editTask(item.Id)"
            >编辑</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTaskList } from "@/api/task/index";
import { getUserInfo } from "@/utils/auth";
import { AlertMessage } from "@/assets/js/index";
import { deleteTask } from "@/api/task/index";
export default {
  name: "tasklist",
  data() {
    return {
      request: {
        teacherId: 0
      },
      taskList: []
    };
  },
  created: function() {
    var userInfo = getUserInfo();
    if (userInfo.Id > 0) {
      this.request.teacherId = userInfo.Id;
      this.getTaskList();
    }
  },
  methods: {
    getTaskList: function() {
      getTaskList(this.request).then(res => {
        this.taskList = res.data;
      });
    },
    editTask: function(Id) {
      this.$router.push({
        name: "publishTask",
        params: { Id: Id }
      });
    },
    deleteTask: function(Id) {
      var btn = ["是", "否"];
      mui.confirm("确认删除这条任务？", "提示框", btn, function(res) {
        if (res.index == 0) {
          deleteTask({ Id: Id }).then(res => {
            if (res.data.code == "1000") {
              AlertMessage(res.data.msg);
            } else {
              location.reload();
            }
          });
        }
      });
    }
  }
};
</script>

<style>
.task-edit {
  width: 50px;
  float: right;
}
.task-message {
  display: inline-block;
  height: 100%;
  width: 60% !important;
}
.el-group-item a {
  display: inline;
}
</style>


