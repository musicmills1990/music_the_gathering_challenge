class TeamsController < ApplicationController
  def new
    @team = Team.new
  end

  def index
    @teams = Team.all
  end

  def show
    @team = Team.find(params[:id])
  end
  
end
