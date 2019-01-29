class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    raise params.inspect
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :music_mana)
  end
end
