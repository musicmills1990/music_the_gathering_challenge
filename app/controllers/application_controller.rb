class ApplicationController < ActionController::Base
  before_action :current_user

def logged_in?
  !!current_user
end

private

def require_logged_in
  flash[:message] = "You must be logged in to view this page. Please log in."
  redirect_to root_path unless logged_in?
end

def current_user
  @current_user ||= User.find(session[:user_id]) if session[:user_id]
end



end
