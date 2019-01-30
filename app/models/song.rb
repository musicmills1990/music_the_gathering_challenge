class Song < ApplicationRecord
  has_many :charactersongs
  has_many :characters, through: :charactersong
end
