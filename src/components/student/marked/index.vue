<template>
  <div class="mui-content">
    <div class="task-title"><span>题目：</span>{{taskDetail.Content}}</div>
    <div class="mark-detail">
      {{taskDetail.MarkContent}}
    </div>
  </div>
</template>
<script>
import {TaskDetail} from "@/api/task/index"
export default {
  name:'taskDEtail',
  data(){
    return{
      Id:0,
      taskDetail:{}
    }
  },
  created:function(){
    this.Id=this.$route.params.Id;
    this.TaskDetail();
  },
  methods:{
    TaskDetail(){
      TaskDetail({Id:this.Id}).then(res=>{
        this.taskDetail=res.data[0];
      })
    }
  }
}
</script>

<style>
.task-title{
    font-size: 15px;
    margin: 10px;
}
.task-title span{
    color: chocolate;
}
.mark-detail{
    margin: 10px;
}
</style>
