<template>
  <div class="mui-content">
    <div class="el-container">
      <div class="el-group">
        <div class="el-group-item" v-for="(item,index) in taskList" v-bind:key="item.Id">
          <router-link to="/marktask"><div class="task-message">{{index+1}}. {{item.Content}}</div></router-link>
          <span class="task-operator">
            <button type="button" class="el-button el-button-text-secondary task-edit" @click="deleteTask">删除</button>
            <router-link to="/publishTask"><button type="button" class="el-button el-button-text-primary task-edit">编辑</button></router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getTaskList} from "@/api/task/index";
import {getUserInfo} from "@/utils/auth";
export default {
  name: "tasklist",
  data() {
    return {
      request:{
        teacherId:0,
      },
      taskList: [],
    };
  },
  created:function(){
    var userInfo=getUserInfo();
    if(userInfo.Id>0){
      this.request.teacherId=userInfo.Id;
      this.getTaskList();
    }
  },
  methods:{
    getTaskList:function(){
      getTaskList(this.request).then(res=>{
        this.taskList=res.data;
      })
    },
    deleteTask:function(){
      var btn=['是','否'];
      mui.confirm('确认删除这条任务？','提示框',btn,function(res){
        if(res.index==1){
          return;
        }
      })
    }
  }
};
</script>

<style>
.task-edit {
  width: 50px;
  float: right;
}
.task-message{
  display: inline-block;
  height: 100%;
  width: 60%;
}
</style>


