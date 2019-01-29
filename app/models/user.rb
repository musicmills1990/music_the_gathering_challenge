class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :music_mana, presence: true
  has_secure_password

  has_many :teams
  has_many :characters, through: :teams


  def level
    total_xp = self.rhythm_xp + self.instrument_xp + self.vocal_xp + self.comedy_xp
    if total_xp < 50
      "Novice"
    elsif total_xp < 100
      "Apprentice"
    elsif total_xp < 200
      "Traveling Bard"
    elsif total_xp < 300
      "Music Master"
    end
  end
end
