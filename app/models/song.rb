class Song < ApplicationRecord
  has_many :character_songs
  has_many :characters, through: :character_songs

  #not well-versed in scope/class methods, so trying to do a comparison to the study group scope method, being "create a
  #list of the songs that the most characters know"
  #scope :most_well_known, -> {joins(:characters).group('songs.id').order(Arel.sql('SUM("characters.character_count")'))}
  scope :most_well_known, -> {joins(:characters).group('songs.id').order('COUNT("characters.character_count") DESC')}

end
