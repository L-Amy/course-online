<template>
    <div class="mui-content">
        <div class="el-group">
            <div class="el-group-item" v-for="(item,index) in askList" :key="item.Id" @click="askDetail(item.Id)">
                {{index+1}} .{{item.DisscusQuestion}}
            </div>
        </div>
    </div>
</template>
<script>
import {getUserInfo} from "@/utils/auth";
import {getAskList} from "@/api/task/index"

export default {
    name:'myAskList',
    data(){
        return{
            askList:[],
            request:{
                StudentId:0,
            },
        }
    },
    created:function(){
        var user=getUserInfo();
        if(user.Id>0){
            this.request.StudentId=user.Id;
            this.getAskList();
        }
    },
    methods:{
        getAskList(){
            getAskList(this.request).then(res=>{
                this.askList=res.data;
            })
        },
        askDetail(id){
            this.$router.push({
                path:'/askDetail',
                query:{
                    Id:id
                }
            })
        }
    }
}
</script>

