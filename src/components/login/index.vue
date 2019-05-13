<template>
  <div class="el-container">
    <div class="el-login-header">在线课程交互系统</div>
    <div class="el-login-content">
      <div class="el-form">
        <div class="el-form-item">
          <div class="el-form-content">
            <div class="el-form-input">
              <div class="identity-select">
                <div class="mui-radio mui-left">
                  <input type="radio" name="identity" id="student" value="2">
                  <label for="student">学生</label>
                </div>
              </div>
              <div class="identity-select">
                <div class="mui-radio mui-left">
                  <input type="radio" name="identity" id="teacher" value="1">
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
              <label for="account">账号</label>
            </div>
            <div class="el-form-input">
              <input
                v-model="account"
                type="text"
                id="account"
                name="account"
                class="el-input-inner"
                autofocus
              >
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
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                class="el-input-inner"
              >
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
            <button class="el-button el-button-primary" @click="Login">登陆</button>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { login } from "@/api/user/index";
import { AlertMessage } from "@/assets/js/index";
import { setUserInfo, getUserInfo, removeUserInfo } from "@/utils/auth";
export default {
  name: "login",
  data() {
    return {
      type: "",
      account: "",
      password: "",
      message: ""
    };
  },
  created: function() {
    var userInfo=getUserInfo();
    if (userInfo!= null) {
      this.type=userInfo.type;
      this.jumpPage(1);
    }
  },
  methods: {
    Login() {
      if (this.checkInput()) {
        login({
          type: this.type,
          account: this.account,
          password: this.password
        }).then(res => {
          if (res.data.data == "1000" || res.data.data == "1001") {
            this.message = res.data.msg;
            AlertMessage(this.message);
          } else {
            setUserInfo({
              type: this.type,
              account: this.account,
              password: this.password
            });
            console.log(this.type);
            this.jumpPage(res.data.data.isLogin);
          }
        });
      }
    },
    jumpPage(isLogin) {
      if (this.type == "2" && isLogin == 1) {
        this.$router.push({
          path: "/uncomputed"
        });
      } else if (this.type == "1" && isLogin == 1) {
        this.$router.push({
          path: "/teacherHome"
        });
      }
    },
    checkInput() {
      this.type = $("input[name='identity']:checked").val();
      if (this.type == undefined) {
        this.message = "请先选择您的身份!";
        AlertMessage(this.message);
        return false;
      }
      if (this.account == "") {
        this.message = "账号不能为空";
        AlertMessage(this.message);
        return false;
      }
      if (this.password == "") {
        this.message = "密码不能为空";
        AlertMessage(this.message);
        return false;
      }
      return true;
    }
  }
};
</script>

<style>
.identity-select {
  float: left;
  width: 50%;
  margin: 20px auto;
  padding-left: 30px;
}
.mui-radio.mui-left label {
  padding-right: 10px;
  padding-left: 45px;
}
.mui-radio.mui-left input[type="radio"] {
  width: 20px;
  height: 20px;
  top: 0px;
}
.mui-radio input[type="radio"]:before {
  font-size: 20px;
}
</style>

