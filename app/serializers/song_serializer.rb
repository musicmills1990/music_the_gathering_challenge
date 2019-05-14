class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :category
  has_many :character_songs
  has_many :characters, through: :character_songs

end
