$(document).on('turbolinks:load', function () {
  $("#songs-index").hover(function(e){
    console.log(e);
    console.log("hey it's working!")
  });
})
