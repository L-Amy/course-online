<template>
  <div class="mui-content">
    <div class="head-portrait">
      <img src id="imgShow" style="display:none">
      <input
        type="file"
        id="imgLocal"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="UplodeImg"
      >
      <div class="upload-image" @click="SelectImg">上传图片</div>
    </div>
    <div class="el-form">
      <div class="el-form-item">
        <div class="el-form-content">
          <div class="el-form-label">
            <i class="iconfont icon-xingming"></i>
            <label for="password">姓名：</label>
          </div>
          <div class="el-form-input">
            <input type="password" name="password" id="password" class="el-input-inner">
          </div>
        </div>
      </div>
      <div class="el-form-item">
        <div class="el-form-content">
          <div class="el-form-label">
            <i class="iconfont icon-xuehao"></i>
            <label for="number">学号：</label>
          </div>
          <div class="el-form-input">
            <input type="number" name="number" id="number" class="el-input-inner" v-model="request.number">
          </div>
        </div>
      </div>
      <div class="el-form-item">
        <div class="el-form-content">
          <div class="el-form-label">
            <i class="iconfont icon-yidongduanicon-"></i>
            <label for="colleague">学院：</label>
          </div>
          <div class="el-form-input">
            <input type="text" id="colleague" name="colleague" class="el-input-inner" v-model="request.colleague">
          </div>
        </div>
      </div>
      <div class="el-form-item">
        <div class="el-form-content">
          <div class="el-form-label">
            <i class="iconfont icon-zhuanye"></i>
            <label for="speciality">专业：</label>
          </div>
          <div class="el-form-input">
            <input type="text" name="speciality" id="speciality" class="el-input-inner" v-model="speciality">
          </div>
        </div>
      </div>
      <div class="el-form-item">
        <div class="el-form-content">
          <div class="el-form-label">
            <i class="iconfont icon-xingbie"></i>
            <label for="sex">性别：</label>
          </div>
          <div class="el-form-input">
            <input type="text" name="sex" id="sex" class="el-input-inner" v-model="request.sex">
          </div>
        </div>
      </div>
      <div class="el-from-item">
        <div class="el-form-content">
          <div class="add-person">
            <button type="button" class="el-button el-button-primary" @click="save">保存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SelectImg, UplodeImg } from "@/assets/js/index.js";
export default {
  name: "Person",
  data() {
    return {
      request:{
        number:'',
        colleague:'',
        speciality:'',
        sex:'',
      }
    };
  },
  created: function() {
    var _self = this;
  },
  methods: {
    SelectImg: function() {
      SelectImg();
    },
    UplodeImg: function() {
      UplodeImg();
    },
    save:function(){
      
    }
  }
};
</script>
<style>
input[type="file"] {
  height: 1px;
  width: 1px;
  opacity: 0;
}
.add-person {
  margin: 0 auto;
  text-align: center;
}
.upload-image {
  text-align: center;
}
</style>



