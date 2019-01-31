class Team < ApplicationRecord
  validates :name, uniqueness: true
  #validates :characters, length: { is: 3 } <- I recognize that this doesn't work because it's not one of the attributes of a
  #a team, but I need a team to have exactly three characters to be a valid team. Maybe this validation goes in the joins table but I'm not sure yet...

  belongs_to :user
  has_many :character_teams
  has_many :characters, through: :character_teams

  def perform_a_song
    #this will be like the "take a ride" method in amusement park not sure about this yet
  end

end
