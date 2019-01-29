class Team < ApplicationRecord
  belongs_to :user
  has_many :characters, through: :characterteam

  def perform_a_song
    #this will be like the "take a ride" method in amusement park
  end
  
end
