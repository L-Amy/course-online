<template>
  <div class="mui-content">
    <div class="el-container">
      <div class="el-group">
        <div class="el-group-item" v-for="item in studentList" v-bind:key="item.id">
          <div class="student-header">
            <div class="header-portrait">
              <img src="@/assets/img/studentImg.jpg" alt>
            </div>
          </div>
          <div class="student-number">
            <div>{{item.name}}</div>
            <div>{{item.Number}}</div>
          </div>
          <span class="task-operator">
            <button
              type="button"
              class="el-button el-button-text-secondary task-edit"
              @click="deleteTask"
            >删除</button>
            <router-link to="/publishTask">
              <button type="button" class="el-button el-button-text-primary task-edit">编辑</button>
            </router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "studentList",
  data() {
    return {
      studentList: [
        {
          id: 1,
          name: "安继兰",
          Number: "152245098876",
          computedNum: 2,
          umcomputedNum: 3
        },
        {
          id: 2,
          name: "安继兰",
          Number: "152245098876",
          computedNum: 2,
          umcomputedNum: 3
        },
        {
          id: 3,
          name: "安继兰",
          Number: "152245098876",
          computedNum: 2,
          umcomputedNum: 3
        },
        {
          id: 4,
          name: "安继兰",
          Number: "152245098876",
          computedNum: 2,
          umcomputedNum: 3
        },
        {
          id: 5,
          name: "安继兰",
          Number: "152245098876",
          computedNum: 2,
          umcomputedNum: 3
        },
        {
          id: 6,
          name: "安继兰",
          Number: "152245098876",
          computedNum: 2,
          umcomputedNum: 3
        },
        {
          id: 7,
          name: "安继兰",
          Number: "152245098876",
          computedNum: 2,
          umcomputedNum: 3
        },
        {
          id: 8,
          name: "安继兰",
          Number: "152245098876",
          computedNum: 2,
          umcomputedNum: 3
        },
        {
          id: 9,
          name: "安继兰",
          Number: "152245098876",
          computedNum: 2,
          umcomputedNum: 3
        },
        {
          id: 10,
          name: "安继兰",
          Number: "152245098876",
          computedNum: 2,
          umcomputedNum: 3
        }
      ]
    };
  },
  methods: {
    deleteTask: function() {
      var btn = ["是", "否"];
      mui.confirm("确认删除此学生？", "提示框", btn, function(res) {
        if (res.index == 1) {
          return;
        }
      });
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
.task-edit {
  width: 45px;
  float: right;
}
.task-message {
  display: inline-block;
  height: 100%;
  width: 60%;
}
</style>

