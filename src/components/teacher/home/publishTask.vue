<template>
  <div class="mui-content">
    <div class="publish-task">
      <div class="publish-title" v-if="submitBtn">
        <i class="iconfont icon-fabu"></i>发布任务
      </div>
      <div class="publish-title" v-if="updateBtn">
        <i class="iconfont icon-fabu"></i>更新任务
      </div>
      <div class="edit-frame">
        <textarea name id cols="30" rows="20" v-model="request.Content"></textarea>
      </div>
      <div class="publish-button">
        <button
          type="button"
          class="el-button el-button-primary"
          @click="submit"
          v-if="submitBtn"
        >发布</button>
        <button
          type="button"
          class="el-button el-button-primary"
          @click="update"
          v-if="updateBtn"
        >更新</button>
      </div>
    </div>
  </div>
</template>
<script>
import { getClassList } from "@/api/common/index";
import { publishTask, updateTask } from "@/api/task/index";
import { selectMessage } from "@/api/teacher/index";
import { getUserInfo } from "@/utils/auth";
import { AlertMessage } from "@/assets/js/index";
export default {
  name: "publishTask",
  data() {
    return {
      request: {
        TaskId: 0,
        ClassId: 0,
        TeacherId: 0,
        Content: "",
        CourseId: 0,
        Name: ""
      },
      data: {
        TaskId: 0
      },
      classList: [],
      submitBtn: true,
      updateBtn: false,
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
        } else {
          this.message = "请先完善你的个人信息";
          AlertMessage(this.message);
        }
      });
    }
    if (this.$route.params.Id > 0) {
      this.submitBtn = false;
      this.updateBtn = true;
      console.log(this.$route.params.Id);
      this.data.TaskId = this.$route.params.Id;
    }
  },
  methods: {
    submit() {
      if (this.classList.length > 0) {
        var i = 0;
        do {
          this.request.ClassId = this.classList[i].Id;
          console.log(this.classList[i].Id);
          if (this.publishTask(this.request)) {
            i++;
          } else {
            break;
          }
        } while (i < this.classList.length);
        this.$router.push({
          path: "/taskList"
        });
      }
    },
    update() {
      if (this.request.Id > 0) {
        if (this.checkInput()) {
          console.log(this.request);
          updateTask({
            TaskId: this.data.TaskId,
            Content: this.request.Content
          }).then(res => {
            if ((res.data.code = "1001")) {
              AlertMessage(res.data.msg);
              this.$router.push({
                path: "/taskList"
              });
            }
          });
        }
      }
    },
    publishTask() {
      if (this.checkInput()) {
        publishTask(this.request).then(res => {
          if (res.data.code == "1001") {
            return true;
          } else {
            return false;
          }
        });
      }
    },
    checkInput() {
      if (this.request.Content == "" || this.request.Content == undefined) {
        AlertMessage("发布内容不能为空！");
        return false;
      }
      return true;
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
  background-color: #ffff;
}
</style>

