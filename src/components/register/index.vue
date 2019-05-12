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
              <label for="password">账号</label>
            </div>
            <div class="el-form-input">
              <input
                type="text"
                v-model="account"
                name="account"
                id="account"
                class="el-input-inner"
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
                type="password"
                v-model="password"
                name="password"
                id="password"
                class="el-input-inner"
              >
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
              <input
                type="password"
                v-model="passwordConfirm"
                name="checkPassword"
                id="checkPassword"
                class="el-input-inner"
              >
            </div>
          </div>
        </div>
        <div class="el-form-item">
          <div class="el-form-content"></div>
        </div>
        <div class="el-form-item">
          <div class="el-form-button">
            <button class="el-button el-button-primary" @click="handleRegister">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/user/index";
import { AlertMessage } from "@/assets/js/index";

export default {
  name: "register",
  data() {
    return {
      account: "",
      password: "",
      passwordConfirm: "",
      type: "",
      message: ""
    };
  },
  methods: {
    handleRegister() {
      if (this.checkInput()) {
        register({
          account: this.account,
          password: this.password,
          type: this.type
        }).then(res => {
          console.log(res);
          this.message = res.data.msg;
          AlertMessage(this.message);
        });
      }
    },
    checkInput() {
      this.type = $("input[name='identity']:checked").val();
      var accountReg = /^(1[0-9]{9})$/g;
      var passwordReg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/;
      if (this.type == undefined) {
        this.message = "请选择您的身份！";
        AlertMessage(this.message);
        return false;
      }
      if (this.account == "") {
        this.message = "账号不能为空！";
        AlertMessage(this.message);
        return false;
      }
      if (!accountReg.test(this.account)) {
        this.message = "账号只能填入数字,且开头为1的10位数";
        AlertMessage(this.message);
        return false;
      }
      if (this.password == "") {
        this.message = "密码不能为空！";
        AlertMessage(this.message);
        return false;
      }
      if (!passwordReg.test(this.password)) {
        this.message =
          "密码必须符合由数字,大写字母,小写字母,至少其中两种组成，且长度不小于8，同时第一位不能为数字";
        AlertMessage(this.message);
        return false;
      }
      if (this.passwordConfirm == "") {
        this.message = "请再次填写密码！";
        AlertMessage(this.message);
        return false;
      }
      if (this.password != this.passwordConfirm) {
        this.message = "两次密码不一致";
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

