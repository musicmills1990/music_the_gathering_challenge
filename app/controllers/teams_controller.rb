class TeamsController < ApplicationController
  before_action :require_logged_in, except: :create

  def index
    if logged_in?
      @teams = Team.all
    else
      redirect_to root_path
    end
  end

  def new
    @characters = Character.all
    @team = Team.new
  end

  def create
    if logged_in?
      @team = Team.new(team_params)
      @team.user = @current_user
      if @team.save
        redirect_to team_path(@team)
      else
        render :new
      end
    else
      redirect_to root_path
    end
  end

  def show
    @team = Team.find(params[:id])
  end

private

  def team_params
    params.require(:team).permit(:name, character_ids: [])
  end
end
