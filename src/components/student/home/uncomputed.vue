<template>
  <div class="mui-content">
    <div class="uncomputed-icon-header"></div>
    <div class="el-container">
      <div class="el-group">
        <router-link to="/uncomputedEdit">
          <div
            class="el-group-item"
            v-for="(item,index) in taskList"
            v-bind:key="item.Id"
          >{{index+1}}. {{item.Content}}</div>
        </router-link>
      </div>
    </div>
    <div class="choose-modal" id="openPopover" @click="TogglePopover">
      <div>
        <i class="iconfont icon-fangxiangxia"></i>
      </div>
    </div>
    <div id="popover" class="mui-popover">
      <ul class="mui-table-view">
        <li
          class="mui-table-view-cell"
          v-for="item in CourseList"
          :key="item.Id"
          @click="selectTaskbyCourse(item.Id)"
        >
          <a href="#">
            <i class="iconfont icon-myclass"></i>
            {{item.Name}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getTask } from "@/api/task/index";
import { selectMessage } from "@/api/student/index";
import { getCourseList } from "@/api/common/index";
import { getUserInfo } from "@/utils/auth";
export default {
  name: "Uncomputed",
  data() {
    return {
      request: {
        CourseId: 0,
        TaskStatus: 0
      },
      taskList: [],
      CourseList: []
    };
  },
  created: function() {
    this.getCourseList();
  },
  methods: {
    TogglePopover: function() {
      mui(".mui-popover").popover(
        "toggle",
        document.getElementById("openPopover")
      );
    },
    getCourseList: function() {
      var user = getUserInfo();
      if (user.Id > 0) {
        selectMessage({ Id: user.Id }).then(res => {
          this.request.GradeId = res.data[0].GradeId;
          getCourseList({ GradeId: this.request.GradeId }).then(res => {
            this.CourseList = res.data;
            this.request.CourseId = this.CourseList[0].Id;
            this.getTask();
          });
        });
      }
    },
    getTask() {
      getTask(this.request).then(res => {
        this.taskList = res.data;
      });
    },
    selectTaskbyCourse(CourseId) {
      this.request.CourseId = CourseId;
      this.getTask();
      this.TogglePopover();
    }
  }
};
</script>
<style>
.uncomputed-icon-header {
  color: #ffffff;
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-weight: bolder;
}
</style>
