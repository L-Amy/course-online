<template>
  <div class="mui-content">
    <div class="el-group">
      <div
        class="el-group-item"
        v-for="(item,index) in taskList"
        v-bind:key="item.Id"
        @click="markTask(item.Id,item.Content)"
      >{{index+1}}. {{item.Content}}</div>
    </div>
  </div>
</template>
<script>
import { getTask } from "@/api/task/index";
export default {
  name: "markList",
  data() {
    return {
      request: {
        StudentId: 0,
        TaskStatus: 1
      },
      taskList: []
    };
  },
  created: function() {
    console.log(this.$route.params.Id)
    if (this.$route.params.Id > 0) {
      this.request.StudentId = this.$route.params.Id;
      this.getTask();
    }
  },
  methods: {
    getTask() {
      getTask(this.request).then(res => {
        this.taskList = res.data;
      });
    },
    markTask(TaskId, content) {
      this.$router.push({
        path: "/marktask",
        query: {
          Id: TaskId,
          Content: content
        }
      });
    }
  }
};
</script>

<style>
.computed-icon-header {
  color: #ffffff;
  text-align: center;
  height: 30px;
  background-color: #009688;
  line-height: 30px;
  font-weight: bolder;
}
.have-read {
  width: 50px;
  float: right;
  text-align: right;
  padding-left: 10px;
}

.el-group-item a {
  display: block;
  height: 100%;
  width: 100%;
}
</style>


