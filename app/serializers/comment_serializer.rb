class CommentSerializer < ActiveModel::Serializer
  attributes :id, :character_id, :name
  belongs_to :character
end
