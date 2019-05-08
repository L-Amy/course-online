<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <a href="#teacher" class="mui-control-item mui-active">老师</a>
        <a href="#student" class="mui-control-item">学生</a>
      </div>
      <div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-6"></div>
      <div class="mui-slider-group">
        <div
          class="mui-slider-item mui-control-content mui-active"
          id="teacher"
          style="min-height:calc(100vh)"
        >
          <div id="scroll1" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <div class="el-form">
                <div class="el-form-item">
                  <div class="el-form-content">
                    <div class="el-form-label">
                      <i class="iconfont icon-ziyuanxhdpi"></i>
                      <label for="password">工号：</label>
                    </div>
                    <div class="el-form-input">
                      <input type="password" name="password" id="password" class="el-input-inner">
                    </div>
                  </div>
                </div>
                <div class="el-form-item">
                  <div class="el-form-content">
                    <div class="el-form-label">
                      <i class="iconfont icon-yidongduanicon-"></i>
                      <label for="account">学院：</label>
                    </div>
                    <div class="el-form-input">
                      <input type="text" id="account" name="account" class="el-input-inner">
                    </div>
                  </div>
                </div>
                <div class="el-form-item">
                  <div class="el-form-content">
                    <div class="el-form-label">
                      <i class="iconfont icon-ziyuanxhdpi"></i>
                      <label for="password">授课专业：</label>
                    </div>
                    <div class="el-form-input">
                      <input type="password" name="password" id="password" class="el-input-inner">
                    </div>
                  </div>
                </div>
                <div class="el-form-item">
                  <div class="el-form-content">
                    <div class="el-form-label">
                      <i class="iconfont icon-ziyuanxhdpi"></i>
                      <label for="password">职称：</label>
                    </div>
                    <div class="el-form-input">
                      <input type="password" name="password" id="password" class="el-input-inner">
                    </div>
                  </div>
                </div>
                <div class="el-from-item">
                  <div class="el-form-content">
                    <div class="add-person">
                      <button type="button" class="el-button el-button-primary">保存</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mui-slider-item mui-control-content"
          id="student"
          style="min-height:calc(100vh)"
        >
          <div id="scroll2" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <div class="el-form">
                <div class="el-form-item">
                  <div class="el-form-content">
                    <div class="el-form-label">
                      <i class="iconfont icon-ziyuanxhdpi"></i>
                      <label for="password">学号</label>
                    </div>
                    <div class="el-form-input">
                      <input type="password" name="password" id="password" class="el-input-inner">
                    </div>
                  </div>
                </div>
                <div class="el-form-item">
                  <div class="el-form-content">
                    <div class="el-form-label">
                      <i class="iconfont icon-yidongduanicon-"></i>
                      <label for="account">学院：</label>
                    </div>
                    <div class="el-form-input">
                      <input type="text" id="account" name="account" class="el-input-inner">
                    </div>
                  </div>
                </div>
                <div class="el-form-item">
                  <div class="el-form-content">
                    <div class="el-form-label">
                      <i class="iconfont icon-ziyuanxhdpi"></i>
                      <label for="password">专业：</label>
                    </div>
                    <div class="el-form-input">
                      <input type="password" name="password" id="password" class="el-input-inner">
                    </div>
                  </div>
                </div>
                <div class="el-form-item">
                  <div class="el-form-content">
                    <div class="el-form-label">
                      <i class="iconfont icon-ziyuanxhdpi"></i>
                      <label for="password">班级：</label>
                    </div>
                    <div class="el-form-input">
                      <input type="password" name="password" id="password" class="el-input-inner">
                    </div>
                  </div>
                </div>
                <div class="el-from-item">
                  <div class="el-form-content">
                    <div class="add-person">
                      <button type="button" class="el-button el-button-primary">保存</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.add-person{
    text-align: center;
}
</style>

