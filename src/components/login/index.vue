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
                  <input type="radio" name="identity" id="student" value="1">
                  <label for="student">学生</label>
                </div>
              </div>
              <div class="identity-select">
                <div class="mui-radio mui-left">
                  <input type="radio" name="identity" id="teacher" value="2">
                  <label for="teacher">教师</label>
                </div>
              </div>
              <div class="identity-select">
                <div class="mui-radio mui-left">
                  <input type="radio" name="identity" id="manger" value="3">
                  <label for="manger">管理员</label>
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
              <input v-model="request.account" type="text" id="account" name="account" class="el-input-inner" autofocus>
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
              <input v-model="request.password" type="password" name="password" id="password" class="el-input-inner">
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
export default {
  name:'login',
  data(){
    return{
      request:{
        identity:'',
        account:'',
        passward:''
      }
    }
  },
  methods:{
    Login(){
      var _self=this;
      var identity=$("input[name='identity']").val();
      if(identity>0){
        _self.request.identity=identity;
        axios.post('/user',requesr).then(function(res){
          if(res.data.success==1){}
        })
      }
    }
  }
};
</script>

<style>
.identity-select{
  float: left;
  margin-bottom: 20px
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

