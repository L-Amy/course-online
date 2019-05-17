<template>
    <div class="mui-content">
        <div class="task-title"><span>疑问：</span>{{Detail.DisscusQuestion}}</div>
    <div class="mark-detail">
      {{Detail.TeaReContent}}
    </div>
    </div>
</template>
<script>
import {getAskDetail} from "@/api/task/index"
export default {
    name:'askDetail',
    data(){
        return{
            request:{
                Id:0,
            },
            Detail:{}
        }
    },
    created:function(){
        var id=this.$route.query.Id;
        if(id>0){
            this.request.Id=id;
            this.getAskDetail();
        }
    },
    methods:{
        getAskDetail(){
            getAskDetail(this.request).then(res=>{
                console.log(res.data)
                this.Detail=res.data[0];
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
