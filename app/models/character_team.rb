class CharacterTeam < ApplicationRecord
  belongs_to :character
  belongs_to :team
end
