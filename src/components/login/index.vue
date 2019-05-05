<template>
  <div class="el-container">
     <div class="el-login-header">在线课程交互系统</div>
    <div class="el-login-content">
      <div class="el-form">
        <div class="el-form-item">
          <div class="el-form-content">
            <div class="el-form-label">
              <i class="iconfont icon-yidongduanicon-"></i>
              <label for="account">账号</label>
            </div>
            <div class="el-form-input">
              <input type="text" id="account" name="account" class="el-input-inner" autofocus>
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
            <router-link to="/register">
              <div class="Registered-alter">
                去注册
                <i class="iconfont icon-icon-"></i>
              </div>
            </router-link>
          </div>
        </div>
        <div class="el-form-item">
          <div class="el-form-button">
            <button class="el-button el-button-primary">登陆</button>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

