class CharactersController < ApplicationController
 before_action :require_logged_in


  def index
    @characters = Character.all
    respond_to do |f|
      f.html
      f.json {render json: @characters}
    end
  end

  def show
    @character = Character.find(params[:id])
  end

end
