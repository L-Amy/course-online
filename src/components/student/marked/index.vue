<template>
  <div class="mui-content">
    <div class="task-title"><span>题目：</span>请描述vue数据双向绑定原理？</div>
    <div class="mark-detail">
      vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的，那么vue是如果进行数据劫持的，
      Object.defineProperty( )是用来做什么的？它可以来控制一个对象属性的一些特有操作，比如读写权、是否可以枚举，这里我们主要先来研究下它对应的两个描述属性get和set，
    </div>
  </div>
</template>
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
