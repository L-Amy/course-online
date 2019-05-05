<template>
  <div class="el-container">
    <div class="el-login-header">注册</div>
    <div class="el-login-content">
      <div class="el-form">
        <div class="el-form-item">
          <div class="el-form-content">
            <div class="el-form-label">
              <i class="iconfont icon-yidongduanicon-"></i>
              <label for="account">身份</label>
            </div>
            <div class="el-form-input">
              <select type="text" id="account" name="account" class="el-select-inner" autofocus>
                <option value="1">学生</option>
                <option value="2">老师</option>
              </select>
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
</style>

