class SongsController < ApplicationController
  before_action :require_logged_in, except: [:new, :create]

  def index
    @songs = Song.all
    @song = Song.new
    @characters = Character.all
    respond_to do |f|
      f.html
      f.json {render json: @songs}
      f.json {render json: @song}
    end
  end

  def new
  end

  def create
    @song = Song.create(song_params)
    if @song.save
      #redirect_to song_path(@song)
      render json: @song
    else
      render :new
    end
  end

  def most_well_known
    @songs = Song.most_well_known
  end

  def show
    @song = Song.find(params[:id])
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    redirect_to songs_path
  end

private

def song_params
  params.require(:song).permit(:name, :category, character_ids: [])
end

end
