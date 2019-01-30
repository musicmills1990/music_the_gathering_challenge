class Song < ApplicationRecord
  has_many :characters, through: :charactersong
  has_many :charactersongs
end
