class Song < ApplicationRecord
  has_many :character_songs
  has_many :characters, through: :character_songs
end
