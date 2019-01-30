class Comment < ApplicationRecord
  belongs_to :character
  accepts_nested_attributes_for :character
end
