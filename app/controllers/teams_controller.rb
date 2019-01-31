class TeamsController < ApplicationController

  def new
    @team = Team.new
    @characters = Character.all
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      redirect_to teams_path
    else
      render :new
    end
  end

  def index
    @teams = Team.all
  end

  def show
    @team = Team.find(params[:id])
  end


private

  def team_params
    params.require(:team).permit(:name, character_ids: [])
  end
end
