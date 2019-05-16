<template>
  <div class="mui-content">
    <div class="task-title">
      <span>题目：</span>
      <span>请描述vue的数据双向绑定原理？</span>
    </div>
    <div class="edit-frame">
      <textarea name="editTask" id cols="30" rows="20" v-model="request.AnswerContent"></textarea>
    </div>
    <div class="edit-frame"></div>
    <div class="edit-button">
      <button type="button" class="el-button el-button-primary">向老师提问</button>
    </div>
    <div class="edit-button">
      <button type="button" class="el-button el-button-secondary" @click="answerTask">提交</button>
    </div>
    <div></div>
  </div>
</template>
<script>
import { getUserInfo } from "@/utils/auth";
import { answerTask } from "@/api/task/index";
import {AlertMessage} from "@/assets/js/index";
export default {
  name: "UncomputedEdit",
  data() {
    return {
      request: {
        Id: 0,
        AnswerContent: "",
        StudentId: 0
      }
    };
  },
  created: function() {
    var TaskId = this.$route.params.Id;
    if (TaskId > 0) {
      this.request.Id = TaskId;
      this.request.StudentId = getUserInfo().Id;
    }
  },
  methods: {
    answerTask() {
      console.log(this.request);
      answerTask(this.request).then(res => {
        if (res.data.code == "1001") {
          this.$route.push({
            path: "/computed"
          });
        }else{
            AlertMessage('回答失败')
        }
      });
    }
  }
};
</script>
<style>
.task-title {
  padding-left: 10px;
}
.edit-frame {
  margin: 0 10px;
}
.edit-button {
  margin-bottom: 5px;
  text-align: center;
}
</style>

