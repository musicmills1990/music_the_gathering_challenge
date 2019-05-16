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
        $("input#comment_name").val("")
        let newComment = new Comment(res)
        let commentHtml = newComment.formatCommentPage();
        let $li = $("div.comment-js")
        $li.append(commentHtml);
      }
    })
    e.preventDefault();
    history.pushState(null, null, "http://localhost:3000")
  })
}

class Comment {
  constructor(comment){
    this.id = comment.id
    this.name = comment.name
    this.character_id = comment.character_id
  }
}

Comment.prototype.formatCommentPage = function(){
  let commentHtml = `
  <li>${this.name}</li>
  `
  return commentHtml
}
