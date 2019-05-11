class CommentsController < ApplicationController
before_action :require_logged_in
before_action :current_user, except: :create



  def new
  end

  def create
    @character = Character.find_by(id: params[:character_id])
    @comment = @character.comments.build(comment_params)

    #@comment = Comment.new(comment_params)
    #@comment.character = @character
    @comment.save
    redirect_to character_comments_path
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
