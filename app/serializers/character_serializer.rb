class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :rhythm_score, :instrument_score, :vocal_score, :comedy_score, :music_mana_cost
  has_many :comments
  has_many :character_teams
  has_many :teams, through: :character_teams
  has_many :character_songs
  has_many :songs, through: :character_songs
end
