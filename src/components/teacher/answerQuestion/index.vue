<template>
    <div class="mui-content">
        <div class="task-title">
            <span>题目：</span>
            <span>{{this.$route.query.Content}}</span>
                    </div>
            <div class="edit-frame">
                <textarea name="editTask" id="" cols="30" rows="20" v-model="request.markContent"></textarea>
            </div>
        <div class="edit-frame"></div>
        <div class="edit-button"><button type="button" class="el-button el-button-secondary " @click="markTask">提交</button></div>
        <div></div>
    </div>
</template>
<script>
import {markTask} from "@/api/task/index";
import {AlertMessage} from "@/assets/js/index"
export default {
    name:'markTask',
    data(){
        return{
            request:{
                markContent:'',
                Id:0,//任务Id
            }
        }
    },
    created:function(){
        var Id=this.$route.query.Id;
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
                }
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