<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <a href="#marked" class="mui-control-item mui-active">已批阅</a>
        <a href="#unmarked" class="mui-control-item">未批阅</a>
      </div>
      <div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-6"></div>
      <div class="mui-slider-group">
        <div class="mui-slider-item mui-control-content mui-active" id="marked" style="min-height:calc(100vh)">
          <div id="scroll1" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <div class="el-group">
                <div class="el-group-item" v-for="(item,index) in taskList"
                  v-bind:key="item.id"><router-link to="/markDetail">{{index+1}}. {{item.name}}</router-link></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mui-slider-item mui-control-content" id="unmarked"  style="min-height:calc(100vh)">
          <div id="scroll2" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <div class="el-group">
                <div class="el-group-item" v-for="(item,index) in taskList"
                  v-bind:key="item.id">{{index+1}}. {{item.name}} 批阅</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "computed",
  data() {
    return {
      taskList: [],
    };
  },
  created:function(){
    $('.mui-slider-item.mui-control-content').css({'min-height':'calc(100vh)'});
  },
  methods: {

  }
};
</script>

<style>
.computed-icon-header {
  color: #ffffff;
  text-align: center;
  height: 30px;
  background-color: #009688;
  line-height: 30px;
  font-weight: bolder;
}
.have-read {
  width: 50px;
  float: right;
  text-align: right;
  padding-left: 10px;
}

.el-group-item a{
  display: block;
  height: 100%;
  width: 100%;
}
</style>


