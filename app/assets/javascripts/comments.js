$(() => {
  commentSubmitHandler()
})

const commentSubmitHandler = () => {
  $("form.new_comment#new_comment").on("submit", function(e){
    $.ajax({
      type: "POST",
      url: this.action,
      data: $(this).serialize(),
      success: function(res){
        debugger
        $("input#comment_name").val("")
        let $li = $("div.comment-js")
        $li.append(res);
      }
    })
    e.preventDefault();
  })
}
