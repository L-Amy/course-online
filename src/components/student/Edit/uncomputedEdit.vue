<template>
    <div class="mui-content">
        <div class="task-title">
            <span>题目：</span>
            <span>请描述vue的数据双向绑定原理？</span>
                    </div>
            <div class="edit-frame">
                <textarea name="editTask" id="" cols="30" rows="20"></textarea>
            </div>
        <div class="edit-frame"></div>
        <div class="edit-button"><button type="button" class="el-button el-button-primary">向老师提问</button></div>
        <div class="edit-button"><button type="button" class="el-button el-button-secondary ">提交</button></div>
        <div></div>
    </div>
</template>
<script>
export default {
    
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

