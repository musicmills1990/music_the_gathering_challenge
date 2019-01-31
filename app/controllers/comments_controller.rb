class CommentsController < ApplicationController

  def new
  end

  def create
    @comment = Comment.new(comment_params)
    @character = Character.find(params[:character_id])
    if @comment.save
      redirect_to character_comments_path(@character.comment)
    else
      redirect_to new_character_comment_path
    end
  end

  def index
    @character = Character.find_by(id: params[:character_id])
    @comment = Comment.new
  end


private

  def comment_params
    params.require(:comment).permit(:name, :character_id)
  end
end
