<template>
  <div class="mui-content">
    <div class="publish-task">
      <div class="publish-title">
        <i class="iconfont icon-fabu"></i>发布任务
      </div>
      <div class="edit-frame">
        <textarea name id cols="30" rows="20" v-model="request.Content"></textarea>
      </div>
      <div class="publish-button">
        <button type="button" class="el-button el-button-primary" @click="submit">发布</button>
      </div>
    </div>
  </div>
</template>
<script>
import { getClassList } from "@/api/common/index";
import { publishTask } from "@/api/task/index";
import { selectMessage } from "@/api/teacher/index";
import { getUserInfo } from "@/utils/auth";
import { AlertMessage } from "@/assets/js/index";
export default {
  name: "publishTask",
  data() {
    return {
      request: {
        ClassId: 0,
        TeacherId: 0,
        Content: "",
        CourseId: 0,
        Name: ""
      },
      classList: [],
      message: ""
    };
  },
  created: function() {
    var userInfo = getUserInfo();
    if (userInfo.Id > 0) {
      selectMessage({ Id: userInfo.Id }).then(res => {
        this.request = res.data[0];
        if (
          this.request.ColleagueId > 0 &&
          this.request.SpecialityId > 0 &&
          this.request.GradeId > 0 &&
          this.request.CourseId > 0
        ) {
          getClassList({ GradeId: this.request.GradeId }).then(res => {
            this.classList = res.data;
          });
        }else{
            this.message="请先完善你的个人信息";
            AlertMessage(this.message);
        }
      });
    }
  },
  methods: {
    submit() {
      if (this.classList.length > 0) {
        for (let i = 0; i < this.classList.length; i++) {
          this.request.ClassId = this.classList[i].Id;
          this.publishTask(this.request);
        }
      }
    },
    publishTask() {
      publishTask(this.request).then(res => {
        this.message = res.data.msg;
        AlertMessage(this.message);
      });
    }
  }
};
</script>
<style>
.publish-button {
  text-align: center;
}
.publish-title {
  text-align: center;
  color: rgb(252, 110, 8);
  height: 30px;
  margin-top: 5px;
  font-size: 15px;
}
.edit-frame textarea {
  border: none;
  background: none;
}
</style>

