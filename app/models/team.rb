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

  def common_songs # I know this is incredible vinegary I'll refactor once I'm more conceptually solid
    char_array = self.characters.collect do |char| #this pulls the characters from any given team and gives me a huge
      char.songs #song list with all three characters' songs in a nested array
    end
    char_1_songs = char_array[0].collect do |song| #just for the sake of pulling it out of the nested array, here's explicitly character 1's songs
      song.name
    end
    char_2_songs = char_array[1].collect do |song| # character 2's songs
      song.name
    end
    char_3_songs = char_array[2].collect do |song| # and character 3's songs
      song.name
    end
    return char_1_songs & char_2_songs & char_3_songs
  end
end
