<template>
  <div class="mui-content">
    <div class="el-container">
      <div class="el-group">
        <div class="el-group-item" v-for="(item,index) in taskList" v-bind:key="item.id">
          <router-link to="/marktask"><div class="task-message">{{index+1}}. {{item.name}}</div></router-link>
          <span class="task-operator">
            <button type="button" class="el-button el-button-secondary task-edit" @click="deleteTask">删除</button>
            <router-link to="/publishTask"><button type="button" class="el-button el-button-primary task-edit">编辑</button></router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tasklist",
  data() {
    return {
      taskList: [
        { id: 1, name: "请描述vue的双向绑定原理?" },
        { id: 2, name: "请描述vue的双向绑定原理?" },
        { id: 3, name: "请描述vue的双向绑定原理?" },
        { id: 4, name: "请描述vue的双向绑定原理?" },
        { id: 5, name: "请描述vue的双向绑定原理?" },
        { id: 6, name: "请描述vue的双向绑定原理?" },
        { id: 7, name: "请描述vue的双向绑定原理?" },
        { id: 8, name: "请描述vue的双向绑定原理?" },
        { id: 9, name: "请描述vue的双向绑定原理?" },
        { id: 10, name: "请描述vue的双向绑定原理?" },
        { id: 11, name: "请描述vue的双向绑定原理?" }
      ]
    };
  },
  methods:{
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


