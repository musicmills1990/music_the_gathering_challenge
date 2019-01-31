class CommentsController < ApplicationController

  def new
  end

  def create
    @comment = Comment.new(name: params[:name], character_id: params[:character_id])
    if @comment.save
      redirect_to character_comments_path
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
