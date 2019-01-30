class CommentsController < ApplicationController


  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to character_comments_path
    else
      render :new
    end
  end

  def index
    @character = Character.find_by(id: params[:character_id])
    @comments = @character.comments
    binding.pry
  end


private

def comment_params
  params.require(:comment).permit(:name)
end


end
