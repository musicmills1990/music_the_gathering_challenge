class PerformsController < ApplicationController
  def new
    @perform = Perform.create(user_id: params[:user_id], team_id: params[:team_id], song_choice: params[:song_choice])
  message = @perform.perform_song
  flash[:message] = message
  redirect_to user_path(@perform.user)
  end
end
