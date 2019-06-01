<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <a href="#unmarked" class="mui-control-item mui-active">未批阅</a>
        <a href="#marked" class="mui-control-item">已批阅</a>
      </div>
      <div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-6"></div>
      <div class="mui-slider-group">
        <div
          class="mui-slider-item mui-control-content mui-active"
          id="unmarked"
          style="min-height:calc(100vh)"
        >
          <div id="scroll2" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <div class="el-group">
                <div
                  class="el-group-item"
                  v-for="(item,index) in unmarkList"
                  v-bind:key="item.Id"
                >{{index+1}}. {{item.Content}}</div>
              </div>
            </div>
          </div>
        </div>
         <div
          class="mui-slider-item mui-control-content"
          id="marked"
          style="min-height:calc(100vh)"
        >
          <div id="scroll1" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <div class="el-group">
                <div
                  class="el-group-item"
                  v-for="(item,index) in markList"
                  v-bind:key="item.Id"
                  @click="markDetail(item.Id)"
                >
                  <router-link to="/markDetail">{{index+1}}. {{item.Content}}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTask } from "@/api/task/index";
import { selectMessage } from "@/api/student/index";
import { getUserInfo } from "@/utils/auth";
export default {
  name: "computed",
  data() {
    return {
      request: {
        StudentId: 0
      },
      unmarkList: [],
      markList: []
    };
  },
  created: function() {
    $(".mui-slider-item.mui-control-content").css({
      "min-height": "calc(100vh)"
    });
    this.getUnmarkedList();
  },
  methods: {
    TogglePopover: function() {
      mui(".mui-popover").popover(
        "toggle",
        document.getElementById("openPopover")
      );
    },
    getUnmarkedList() {
      var user = getUserInfo();
      if (user.Id > 0) {
        this.request.StudentId = user.Id;
        getTask({ StudentId: this.request.StudentId, TaskStatus: 1 }).then(
          res => {
            this.unmarkList = res.data;
          }
        );
        this.getMarkedList();
      }
    },
    getMarkedList() {
      getTask({ StudentId: this.request.StudentId, TaskStatus: 2 }).then(
        res => {
          this.markList = res.data;
        }
      );
    },
    selectTaskbyCourse(CourseId) {
      this.request.CourseId = CourseId;
      this.getTask();
      this.TogglePopover();
    },
    markDetail(taskId) {
      if (taskId > 0) {
        this.$router.push({
          name: "markDetail",
          params: {
            Id: taskId
          }
        });
      }
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


