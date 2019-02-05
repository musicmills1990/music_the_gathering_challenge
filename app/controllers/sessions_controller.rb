class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      flash[:message] = "Welcome Back!"
      redirect_to user_path(@user)
    else
      flash[:message] = "Incorrect username or password. Please try again."
      redirect_to login_path
    end
  end

  def create_from_omniauth
    @user = User.find_or_create_by(email: auth[:info][:email]) do |user|
      user.username = auth[:info][:name]
      user.password = SecureRandom.hex
    end
    session[:user_id] = @user.id
    redirect_to user_path(@user)
  end


  def destroy
    session.delete :user_id
    redirect_to root_path
  end

private

def auth
   request.env['omniauth.auth']
 end

end
