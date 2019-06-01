<template>
    <div class="mui-content">
        <div class="task-title">
            <span>题目：</span>
            <span v-if="markBtn">{{this.$route.query.Content}}</span>
            <div v-if="markBtn" style="color:red">答案：{{this.$route.query.AnswerContent}}</div>
            <span v-if="answerBtn">{{this.$route.query.answerContent}}</span>
                    </div>
            <div class="edit-frame">
                <textarea name="editTask" id="" cols="30" rows="20" v-model="request.markContent" v-if="markBtn"></textarea>
                 <textarea name="editTask" id="" cols="30" rows="20" v-model="answerReq.TeaReContent" v-if="answerBtn"></textarea>
            </div>
        <div class="edit-frame"></div>
        <div class="edit-button"><button type="button" class="el-button el-button-secondary " v-if="markBtn" @click="markTask">提交</button></div>
        <div class="edit-button"><button type="button" class="el-button el-button-secondary " v-if="answerBtn" @click="answerAsk">答疑</button></div>
        <div></div>
    </div>
</template>
<script>
import {markTask,answerAsk} from "@/api/task/index";
import {AlertMessage} from "@/assets/js/index"
export default {
    name:'markTask',
    data(){
        return{
            request:{
                markContent:'',
                Id:0,//任务Id
            },
            markBtn:true,
            answerBtn:false,
            answerReq:{
                Id:0,
                TeaReContent:'',

            }
        }
    },
    created:function(){
        var Id=this.$route.query.Id;
        var taskId=this.$route.query.TaskId;
        if(taskId>0){
            this.markBtn=false;
            this.answerBtn=true;
            this.answerReq.Id=taskId;
        }
        console.log(this.$route.query.Id)
        if(Id>0){
            this.request.Id=Id;
        }
    },
    methods:{
        markTask(){
            markTask(this.request).then(res=>{
                if(res.data.code=='1001'){
                    AlertMessage(res.data.msg);
                    location.reload();
                }
            })
        },
        answerAsk(){
            console.log(this.answerReq)
           answerAsk(this.answerReq).then(res=>{
                   AlertMessage(res.data.msg);
           }) 
        }
    }
}
</script>
<style>
.task-title{
    padding-left: 10px;
}
.edit-frame{
    margin: 0 10px;
}
.edit-button{
    margin-bottom: 5px;
    text-align: center;
}
</style>