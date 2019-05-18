<template>
  <div class="mui-content">
    <div class="student-list">
      <div class="el-group">
        <div class="el-group-item" v-for="item in studentList" v-bind:key="item.Id" @click="Detail(item.Id)">
            <div class="student-header">
              <div class="header-portrait">
                <img :src="item.ImgLocation" alt>
              </div>
            </div>
            <div class="student-number">
              <div>{{item.Name}}</div>
              <div>{{item.StudentNo}}</div>
            </div>
            <div class="task-rate">
              <div class="computed-rate">
                <span>完成</span>
                <span class="computed-icon">
                  <i class="iconfont icon-icon-1"></i>
                </span>
                <span>{{item.comCount}}</span>
              </div>
              <div class="uncomputed-rate">
                <span>未完成</span>
                <span class="uncomputed-icon">
                  <i class="iconfont icon-icon-1"></i>
                </span>
                <span>{{item.uncomCount}}</span>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="choose-modal" id="openPopover" @click="TogglePopover">
      <div class="choose-button">班级</div>
    </div>
    <div id="popover" class="mui-popover">
      <ul class="mui-table-view">
        <li
          class="mui-table-view-cell"
          v-for="item in ClassList"
          :key="item.Id"
          @click="getStudentList(item.Id)"
        >
          <a>
            <i class="iconfont icon-myclass"></i>
            {{item.Name}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getClassList } from "@/api/common/index";
import { getStudentList } from "@/api/student/index";
import { selectMessage } from "@/api/teacher/index";
import { getUserInfo } from "@/utils/auth";
export default {
  name: "studentList",
  data() {
    return {
      request: {
        teacherId: 0,
        GradeId: 0,
        classId: 0
      },
      ClassList: [],
      studentList: []
    };
  },
  created: function() {
    var user = getUserInfo();
    if (user.Id > 0) {
      this.request.teacherId = user.Id;
      selectMessage({ Id: this.request.teacherId }).then(res => {
        this.request.GradeId = res.data[0].GradeId;
        getClassList({ GradeId: this.request.GradeId }).then(res => {
          this.ClassList = res.data;
          this.request.classId = this.ClassList[0].Id;
          this.getStudentList();
        });
      });
    }
  },
  methods: {
    TogglePopover: function() {
      mui(".mui-popover").popover(
        "toggle",
        document.getElementById("openPopover")
      );
    },
    getStudentList: function(classId) {
      if (classId > 0) {
        this.request.classId = classId;
        this.TogglePopover();
      }
      console.log(this.request.classId);
      getStudentList({
        classId: this.request.classId,
        teacherId: this.request.teacherId
      }).then(res => {
        this.studentList = res.data;
      });
    },
    Detail:function(studentId){
      if(studentId>0){
        this.$router.push({
        name:'markList',
        params:{Id:studentId},
      })
      }
    }
  }
};
</script>

<style>
.student-header {
  float: left;
}
.header-portrait {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
.header-portrait img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.student-number {
  font-size: 15px;
  float: left;
  margin-left: 20px;
  width: 120px;
}
.task-rate {
  float: left;
  margin-left: 20px;
  width: calc(100% - 220px);
}
.task-rate > div > span:first-child {
  width: 50%;
  display: inline-block;
}
.computed-icon {
  color: rgb(5, 167, 5);
}
.uncomputed-icon {
  color: rgb(245, 14, 14);
}
</style>
