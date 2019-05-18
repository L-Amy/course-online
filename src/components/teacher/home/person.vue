<template>
  <div class="mui-content">
    <div class="head-portrait">
      <img :src="avatarSrc" id="imgShow" v-show="avatarSrc">
      <input
        type="file"
        id="imgLocal"
        name="img"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="UplodeImg($event)"
        ref="avatarInput"
      >
      <div class="upload-image" @click="SelectImg($event)">上传图片</div>
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
            <label for="number">工号：</label>
          </div>
          <div class="el-form-input">
            <input
              type="number"
              name="number"
              id="number"
              class="el-input-inner"
              v-model="request.WorkNo"
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
            <i class="iconfont icon-paperplane-fill"></i>
            <label for="grade">年级：</label>
          </div>
          <div class="el-form-input">
            <select
              name="grade"
              id="grade"
              v-model="request.GradeId"
              class="el-input-inner"
              @change="getCourseList"
            >
              <option v-for="item in gradeList" :key="item.Id" :value="item.Id">{{item.Name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="el-form-item">
        <div class="el-form-content">
          <div class="el-form-label">
            <i class="iconfont icon-listpress"></i>
            <label for="grade">所授课程：</label>
          </div>
          <div class="el-form-input">
            <select name="grade" id="grade" v-model="request.CourseId" class="el-input-inner">
              <option v-for="item in courseList" :key="item.Id" :value="item.Id">{{item.Name}}</option>
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
  getClassList,
  getCourseList
} from "@/api/common/index";
import {
  updateMessage,
  selectMessage,
  uploadTeacherAvatar
} from "@/api/teacher/index";
import { getUserInfo, setUserInfo } from "@/utils/auth";
export default {
  name: "Person",
  data() {
    return {
      request: {
        Id: 0,
        Name: "",
        WorkNo: "",
        ColleagueId: 0,
        SpecialityId: 0,
        GradeId: 0,
        CourseId: 0,
        Sex: ""
      },
      requestOrigin: {},
      colleagueList: [],
      specialityList: [],
      gradeList: [],
      ClassList: [],
      courseList: [],
      message: "",
      showUpdateBtn: true,
      avatarSrc: null
    };
  },
  created: function() {
    var userInfo = getUserInfo();
    this.request.Id = userInfo.Id;
    this.request.WorkNo = userInfo.account;
    this.getColleagueList();
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
            if (this.request.GradeId > 0) {
              this.getCourseList();
            }
          }
        });
      }
    },
    getCourseList: function() {
      if (this.request.GradeId > 0) {
        getCourseList({ GradeId: this.request.GradeId }).then(res => {
          if (res.data.length > 0) {
            this.courseList = res.data;
            this.request.CourseId = this.requestOrigin.CourseId;
            this.avatarSrc=this.requestOrigin.ImgLocation;
            if (this.requestOrigin.Name != null) {
              this.request.Name = this.requestOrigin.Name;
            }
            if (this.requestOrigin.Sex != null) {
              this.request.Sex = this.requestOrigin.Sex;
              this.messageDetail();
            }
          }
        });
      }
    },
    messageDetail: function() {
      if (
        this.request.ColleagueId > 0 &&
        this.request.SpecialityId > 0 &&
        this.request.GradeId > 0 &&
        this.request.CourseId > 0 &&
        !(
          this.request.Sex == "" ||
          this.request.Sex == null ||
          this.request.Sex == undefined
        ) &&
        !(
          this.request.Name == "" ||
          this.request.Name == null ||
          this.request.Name == undefined
        )
      ) {
        this.showUpdateBtn = false;
        $("input[type='text']").attr("readonly", "true");
        $("select").attr("disabled", "true");
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
          if (res.data.code == "1001") {
            this.messageDetail();
          }
          this.message = res.data.msg;
          AlertMessage(this.message);
        });
      }
    },
    checkInput: function() {
      if (
        this.request.Name == "" ||
        this.request.Name == null ||
        this.request.Name == undefined
      ) {
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
      if (!this.request.CourseId > 0) {
        this.message = "所授不能为空";
        AlertMessage(this.message);
        return false;
      }
      if (
        this.request.Sex == "" ||
        this.request.Sex == null ||
        this.request.Sex == undefined
      ) {
        this.message = "性别不能为空";
        AlertMessage(this.message);
        return false;
      }
      return true;
    },
    SelectImg: function() {
      SelectImg();
    },
    UplodeImg: function(event) {
      var formData = new FormData();
      formData.append("file", this.$refs.avatarInput.files[0]);
      formData.append("userId", this.request.Id);
      uploadTeacherAvatar(formData).then(res => {
        console.log(res);
        this.avatarSrc = res.data.data.urls
      });
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



