class CharacterSong < ApplicationRecord
  belongs_to :character
  belongs_to :song
end
