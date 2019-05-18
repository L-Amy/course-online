<template>
  <div class="mui-content">
    <div class="task-title">
      <span>题目：</span>
      <span>{{this.$route.params.Content}}</span>
    </div>
    <div class="edit-frame">
      <textarea name="editTask" id cols="30" rows="20" v-model="request.AnswerContent"></textarea>
    </div>
    <div class="edit-frame"></div>
    <div class="edit-button">
      <button type="button" class="el-button el-button-primary" @click="askTask">向老师提问</button>
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
import { AlertMessage } from "@/assets/js/index";
import { askTask } from "@/api/task/index";

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
      if (
        this.request.AnswerContent == "" ||
        this.request.AnswerContent == undefined ||
        this.request.AnswerContent == null
      ) {
        AlertMessage("提交内容不能为空");
        return false;
      } else {
        console.log(this.request);
        answerTask(this.request).then(res => {
          if (res.data.code == "1001") {
            this.$route.push({
              path: "/computed"
            });
          } else {
            AlertMessage("回答失败");
          }
        });
      }
    },
    askTask() {
      this.request.TeacherId = this.$route.params.TeacherId;
      if (
        this.request.AnswerContent == "" ||
        this.request.AnswerContent == undefined ||
        this.request.AnswerContent == null
      ) {
        AlertMessage("提问内容不能为空");
        return false;
      } else {
        console.log(this.request);
        askTask(this.request).then(res => {
          if (res.data.code == "1000") {
            AlertMessage(res.data.msg);
          }
        });
      }
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

