<template>
  <div class="mui-content">
    <div class="dist-title">
      <span>题目 :</span>
      <span>请描述vue的双向数据绑定原理？</span>
    </div>
    <div class="discus-list">
      <div class="el-group">
        <div class="el-group-item" v-for="item in taskList" v-bind:key="item.id">
          <div class="discus-person">
            <div class="header-portrait">
              <img src="@/assets/img/studentImg.jpg" alt>
            </div>
            <span>王玉洁</span>
          </div>
          <div class="discus-idea">{{item.name}}</div>
          <div class="discuss-replay" @click="showReplayFrame($event)">回复</div>
        </div>
        <div class="edit-frame" id="edit">
          <textarea name id cols="20" rows="5"></textarea>
          <div class="edit-frame-button">
            <button class="el-button el-button-primary" @click="hideReplayFrame($event)">回复</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {showReplayFrame,hideReplayFrame} from '@/assets/js/index.js';
export default {
  name: "taskDetail",
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
      ],
    };
  },
  methods: {
      showReplayFrame:function(event){
      console.log(event);
      showReplayFrame(event);
    },
    hideReplayFrame:function(event){
      hideReplayFrame(event);
    }
  }
};
</script>
<style>

</style>

