
// 讨论页面
export function showReplayFrame(event) {
    var editElement = $("#edit");
    $('.edit-frame').show();
    $(event.target)
      .parents(".el-group-item")
      .after(editElement);
    $(event.target).hide();
  }

 export function hideReplayFrame(event) {
    $(event.target)
      .parents(".edit-frame")
      .hide();
    $(event.target).parents('.edit-frame')
      .prev()
      .children(".discuss-replay")
      .show();
  }

  export function SelectImg() {
    $("#imgLocal").click();
  }
//上传图片
  export function UplodeImg() {
    var imgData = document.getElementById('imgLocal').files[0];
     console.log(imgData);
    var formData = new FormData();
    var readers = new FileReader();
    readers.readAsDataURL(imgData);
    readers.onload = function(e) {
      console.log(this);
       $("#imgShow").show();
       $(".el-button-text-secondary").hide();
       document.getElementById('imgShow').src = this.result;
    };
    formData.append('myfile',document.getElementById('imgLocal').files[0]);
  }

  //弹框
  export function AlertMessage(message){
    mui.alert(message,'提示','确定',function(res){
      return;
    })
  }
