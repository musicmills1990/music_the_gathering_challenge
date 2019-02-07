class CharactersController < ApplicationController
 before_action :require_logged_in


  def index
    @characters = Character.all
  end

  def show
    @character = Character.find(params[:id])
  end

end
