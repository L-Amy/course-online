<template>
  <div class="el-container">
    <div class="el-login-header">注册</div>
    <div class="el-login-content">
      <div class="el-form">
        <div class="el-form-item">
          <div class="el-form-content">
            <div class="el-form-input">
              <div class="identity-select">
                <div class="mui-radio mui-left">
                  <input type="radio" name="identity" id="student">
                  <label for="student">学生</label>
                </div>
              </div>
              <div class="identity-select">
                <div class="mui-radio mui-left">
                  <input type="radio" name="identity" id="teacher">
                  <label for="teacher">教师</label>
                </div>
              </div>             
            </div>
          </div>
        </div>
        <div class="el-form-item">
          <div class="el-form-content">
            <div class="el-form-label">
              <i class="iconfont icon-yidongduanicon-"></i>
              <label for="password">账号</label>
            </div>
            <div class="el-form-input">
              <input type="text" name="account" id="account" class="el-input-inner">
            </div>
          </div>
        </div>
        <div class="el-form-item">
          <div class="el-form-content">
            <div class="el-form-label">
              <i class="iconfont icon-ziyuanxhdpi"></i>
              <label for="password">密码</label>
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
              <label for="checkPassword">确认密码</label>
            </div>
            <div class="el-form-input">
              <input type="password" name="checkPassword" id="checkPassword" class="el-input-inner">
            </div>
          </div>
        </div>
        <div class="el-form-item">
          <div class="el-form-content"></div>
        </div>
        <div class="el-form-item">
          <div class="el-form-button">
            <button class="el-button el-button-primary">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.identity-select{
  float: left;
    width: 50%;
    margin: 20px auto;
    padding-left: 30px;
}
.mui-radio.mui-left label {
    padding-right: 10px;
    padding-left: 45px;
}
.mui-radio.mui-left input[type='radio']{
  width: 20px;
  height: 20px;
  top: 0px;
}
.mui-radio input[type='radio']:before{
  font-size: 20px;
}
</style>

