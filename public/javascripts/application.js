function setAjaxReload(url){
  $(document).ready(function(){setInterval('ajaxReload("' + url + '")', 5000);});
}
function ajaxReload(url){
  if($("#ajax-reload").html() == 'true'){
    $.ajax({method: 'get', url : url});
  }
}

jQuery('ol.list-with-status div.command_box').click(function() {
  //console.log($('pre.step', this));
  console.log ('foo');

});


$(function() {
  // Hook name preview
  $('#hook_name_preview').html($('#project_hook_name').val() + ' ');
  $('#project_hook_name').keyup(function() {
    $('#hook_name_preview').html($('#project_hook_name').val() + ' ');
  });
})
