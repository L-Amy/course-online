
// 讨论页面
function showReplayFrame(event) {
    var editElement = $("#edit");
    $('.edit-frame').show();
    $(event.target)
      .parents(".el-group-item")
      .after(editElement);
    $(event.target).hide();
  }

  function hideReplayFrame(event) {
    $(event.target)
      .parents(".edit-frame")
      .hide();
    $(event.target).parents('.edit-frame')
      .prev()
      .children(".discuss-replay")
      .show();
  }

  function SelectImg() {
    $("#imgLocal").click();
  }

  function UplodeImg() {
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

  export{
    showReplayFrame,
    hideReplayFrame,
    SelectImg,
    UplodeImg,
  };