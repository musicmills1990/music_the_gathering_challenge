class Team < ApplicationRecord
  validates :name, uniqueness: true
  #validates :characters, length: { is: 3 } <- I recognize that this doesn't work because it's not one of the attributes of a
  #a team, but I need a team to have exactly three characters to be a valid team. Maybe this validation goes in the joins table but I'm not sure yet...
  belongs_to :user
  has_many :character_teams
  has_many :characters, through: :character_teams

  def total_rhythm_xp
    character_array = self.characters.collect do |character|
      character.rhythm_score
    end
    return character_array.sum.to_i
  end

  def total_instrument_xp
    character_array = self.characters.collect do |character|
      character.instrument_score
    end
    return character_array.sum.to_i
  end

  def total_vocal_xp
    character_array = self.characters.collect do |character|
      character.vocal_score
    end
    return character_array.sum.to_i
  end

  def total_comedy_xp
    character_array = self.characters.collect do |character|
      character.comedy_score
    end
    return character_array.sum.to_i
  end

  def total_xp
    total_vocal_xp + total_rhythm_xp + total_comedy_xp + total_instrument_xp
  end

  def total_cost
    character_array = self.characters.collect do |character|
      character.music_mana_cost
    end
    return character_array.sum.to_i
  end




  def common_songs
  end


  def perform_a_song
    #this will be like the "take a ride" method in amusement park not sure about this yet
  end

end
