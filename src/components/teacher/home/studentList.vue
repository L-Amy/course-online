<template>
  <div class="mui-content">
    <div class="student-list">
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
          <div class="task-rate">
            <div class="computed-rate">
              <span>完成</span>
              <span class="computed-icon">
                <i class="iconfont icon-icon-1"></i>
              </span>
              <span>{{item.computedNum}}</span>
            </div>
            <div class="uncomputed-rate">
              <span>未完成</span>
              <span class="uncomputed-icon">
                <i class="iconfont icon-icon-1"></i>
              </span>
              <span>{{item.umcomputedNum}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'studentList',
    data(){
        return{
            studentList:[
                {id:1,name:'安继兰',Number:'152245098876',computedNum:2,umcomputedNum:3},
                {id:2,name:'安继兰',Number:'152245098876',computedNum:2,umcomputedNum:3},
                {id:3,name:'安继兰',Number:'152245098876',computedNum:2,umcomputedNum:3},
                {id:4,name:'安继兰',Number:'152245098876',computedNum:2,umcomputedNum:3},
                {id:5,name:'安继兰',Number:'152245098876',computedNum:2,umcomputedNum:3},
                {id:6,name:'安继兰',Number:'152245098876',computedNum:2,umcomputedNum:3},
                {id:7,name:'安继兰',Number:'152245098876',computedNum:2,umcomputedNum:3},
                {id:8,name:'安继兰',Number:'152245098876',computedNum:2,umcomputedNum:3},
                {id:9,name:'安继兰',Number:'152245098876',computedNum:2,umcomputedNum:3},
                {id:10,name:'安继兰',Number:'152245098876',computedNum:2,umcomputedNum:3},
            ]
        }
    }
}
</script>

<style>
.student-header{
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
.task-rate{
    float: left;
    margin-left: 20px;
    width: calc(100% - 220px);
}
.task-rate>div>span:first-child{
    width: 50%;
    display: inline-block;
}
.computed-icon{
    color: rgb(5, 167, 5);

}
.uncomputed-icon{
    color: rgb(245, 14, 14);
}
</style>
