
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

  export{
    showReplayFrame,
    hideReplayFrame,
  };