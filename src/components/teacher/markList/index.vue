<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <a href="#marked" class="mui-control-item mui-active">待批阅</a>
        <a href="#answer" class="mui-control-item">待答疑</a>
      </div>
      <div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-6"></div>
      <div class="mui-slider-group">
        <div
          class="mui-slider-item mui-control-content mui-active"
          id="marked"
          style="min-height:calc(100vh)"
        >
          <div id="scroll1" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <div class="el-group">
                <div
                  class="el-group-item"
                  v-for="(item,index) in taskList"
                  v-bind:key="item.Id"
                  @click="markTask(item.Id,item.Content,item.AnswerContent)"
                >{{index+1}}. {{item.Content}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mui-slider-item mui-control-content" id="answer" style="min-height:calc(100vh)">
          <div id="scroll2" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <div class="el-group">
                <div
                  class="el-group-item"
                  v-for="(item,index) in answerList"
                  v-bind:key="item.Id"
                  @click="answerTask(item.Id,item.DisscusQuestion,item.AnswerContent)"
                >{{index+1}}. {{item.DisscusQuestion}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTask, getAskList } from "@/api/task/index";
import { getUserInfo } from "@/utils/auth";
export default {
  name: "markList",
  data() {
    return {
      request: {
        StudentId: 0,
        TeacherId: 0,
        TaskStatus: 1
      },
      taskList: [],
      answerList: []
    };
  },
  created: function() {
    console.log(this.$route.params.Id);
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
      this.getAskList();
    },
    markTask(TaskId, content,answerContent) {
      this.$router.push({
        path: "/marktask",
        query: {
          Id: TaskId,
          Content: content,
          AnswerContent:answerContent
        }
      });
    },
    answerTask(id, content,answerContent) {
      this.$router.push({
        path: "/marktask",
        query: {
          TaskId: id,
          answerContent: content,
          AnswerContent:answerContent
        }
      });
    },
    getAskList() {
      var user = getUserInfo();
      if (user.Id > 0) {
        this.request.TeacherId=user.Id;
        getAskList(this.request).then(res => {
          this.answerList = res.data;
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


