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
            <label for="name">姓名：</label>
          </div>
          <div class="el-form-input">
            <input type="text" name="name" id="name" class="el-input-inner" v-model="request.Name">
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
            <input
              type="number"
              name="number"
              id="number"
              class="el-input-inner"
              v-model="request.StudentNo"
              readonly
            >
          </div>
        </div>
      </div>
      <div class="el-form-item">
        <div class="el-form-content">
          <div class="el-form-label">
            <i class="iconfont icon-xueyuan"></i>
            <label for="colleague">学院：</label>
          </div>
          <div class="el-form-input">
            <select
              name="colleague"
              id="colleague"
              v-model="request.ColleagueId"
              class="el-input-inner"
              @change="getSpecilityList"
            >
              <option v-for="item in colleagueList" :key="item.Id" :value="item.Id">{{item.Name}}</option>
            </select>
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
            <select
              name="speciality"
              id="speciality"
              v-model="request.SpecialityId"
              class="el-input-inner"
              @change="getGradeList"
            >
              <option
                v-for="item in specialityList"
                :key="item.Id"
                :value="item.Id"
              >{{item.SpecialityName}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="el-form-item">
        <div class="el-form-content">
          <div class="el-form-label">
            <i class="iconfont icon-zhuanye"></i>
            <label for="grade">年级：</label>
          </div>
          <div class="el-form-input">
            <select
              name="grade"
              id="grade"
              v-model="request.GradeId"
              class="el-input-inner"
              @change="getClassList"
            >
              <option v-for="item in gradeList" :key="item.Id" :value="item.Id">{{item.Name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="el-form-item">
        <div class="el-form-content">
          <div class="el-form-label">
            <i class="iconfont icon-myclass"></i>
            <label for="class">班级：</label>
          </div>
          <div class="el-form-input">
            <select name="class" id="class" v-model="request.ClassId" class="el-input-inner">
              <option v-for="item in ClassList" :key="item.Id" :value="item.Id">{{item.Name}}</option>
            </select>
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
            <input type="text" name="sex" id="sex" class="el-input-inner" v-model="request.Sex">
          </div>
        </div>
      </div>
      <div class="el-from-item" v-if="showUpdateBtn">
        <div class="el-form-content">
          <div class="add-person">
            <button type="button" class="el-button el-button-primary" @click="updateMessage">保存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SelectImg, UplodeImg, AlertMessage } from "@/assets/js/index.js";
import {
  getColleagueList,
  getSpecilityList,
  getGradeList,
  getClassList
} from "@/api/common/index";
import { updateMessage, selectMessage } from "@/api/student/index";
import { getUserInfo } from "@/utils/auth";
export default {
  name: "Person",
  data() {
    return {
      request: {
        Id: 0,
        Name: "",
        StudentNo: "",
        ColleagueId: 0,
        SpecialityId: 0,
        GradeId: 0,
        ClassId: 0,
        Sex: ""
      },
      requestOrigin: {},
      colleagueList: [],
      specialityList: [],
      gradeList: [],
      ClassList: [],
      message: "",
      showUpdateBtn: true
    };
  },
  created: function() {
    var userInfo = getUserInfo();
    this.request.Id = userInfo.Id;
    this.request.StudentNo = userInfo.account;
    this.getColleagueList();
    console.log(this.request);
    console.log(this.request.ColleagueId);
  },
  methods: {
    getColleagueList: function() {
      getColleagueList().then(res => {
        if (res.data.length > 0) {
          this.colleagueList = res.data;
          this.selectMessage(this.request);
        }
      });
    },
    getSpecilityList: function() {
      if (this.request.ColleagueId > 0) {
        getSpecilityList({ ColleagueId: this.request.ColleagueId }).then(
          res => {
            // console.log(res);
            if (res.data.length > 0) {
              this.specialityList = res.data;
              this.request.SpecialityId = this.requestOrigin.SpecialityId;
              this.getGradeList();
            }
          }
        );
      }
    },
    getGradeList: function() {
      if (this.request.SpecialityId > 0) {
        getGradeList({ SpecialityId: this.request.SpecialityId }).then(res => {
          // console.log(res);
          if (res.data.length > 0) {
            this.gradeList = res.data;
            this.request.GradeId = this.requestOrigin.GradeId;
            this.getClassList();
          }
        });
      }
    },
    getClassList: function() {
      if (this.request.GradeId > 0) {
        getClassList({ GradeId: this.request.GradeId }).then(res => {
          //console.log(res);
          if (res.data.length > 0) {
            this.ClassList = res.data;
            this.request.ClassId = this.requestOrigin.ClassId;
            this.request.Name = this.requestOrigin.Name;
            this.request.Sex = this.requestOrigin.Sex;
            if (
              this.request.ColleagueId > 0 &&
              this.request.SpecialityId > 0 &&
              this.request.GradeId > 0 &&
              this.request.ClassId > 0 &&
              this.request.Sex != "" &&
              this.request.Name != ""
            ) {
              this.showUpdateBtn = false;
              $("input[type='text']").attr("readonly",'true')
              $('select').attr("disabled","true");
            }
          }
        });
      }
    },
    selectMessage: function() {
      selectMessage(this.request).then(res => {
        this.requestOrigin = res.data[0];
        this.request.ColleagueId = this.requestOrigin.ColleagueId;
        this.getSpecilityList();
      });
    },
    updateMessage: function() {
      if (this.checkInput()) {
        console.log(this.request);
        updateMessage(this.request).then(res => {
          if (res.code == "1000") {
            this.message = this.msg;
            AlertMessage(this.message);
          }
        });
      }
    },
    checkInput: function() {
      if (this.request.Name == "") {
        this.message = "姓名不能为空";
        AlertMessage(this.message);
        return false;
      }
      if (!this.request.ColleagueId > 0) {
        this.message = "学院不能为空";
        AlertMessage(this.message);
        return false;
      }
      if (!this.request.SpecialityId > 0) {
        this.message = "专业不能为空";
        AlertMessage(this.message);
        return false;
      }
      if (!this.request.GradeId > 0) {
        this.message = "年级不能为空";
        AlertMessage(this.message);
        return false;
      }
      if (!this.request.ClassId > 0) {
        this.message = "班级不能为空";
        AlertMessage(this.message);
        return false;
      }
      if (this.request.Sex == "") {
        this.message = "性别不能为空";
        AlertMessage(this.message);
        return false;
      }
      return true;
    },
    SelectImg: function() {
      SelectImg();
    },
    UplodeImg: function() {
      UplodeImg();
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
/* .el-form-label{
  width: 20%;
  display: block;
  float: left;
}
.el-form-input{
  width:80%;
  float: left;
} */
</style>



