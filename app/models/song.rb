class Song < ApplicationRecord
  has_many :character_songs
  has_many :characters, through: :character_songs

  scope :most_well_known, -> {joins(:characters).group('songs.id').order('COUNT("characters.character_count") DESC')}

end
