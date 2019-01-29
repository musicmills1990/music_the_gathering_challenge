class Character < ApplicationRecord
  has_many :teams, through: :characterteam
  has_many :songs, through: :charactersong
  has_many :comments
end
