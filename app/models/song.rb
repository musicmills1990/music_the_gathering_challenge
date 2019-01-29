class Song < ApplicationRecord
  has_many :characters, through: :charactersong
end
