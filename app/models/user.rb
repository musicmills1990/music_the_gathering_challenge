class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  #validates :music_mana, presence: true

  #has_many :teams
  has_many :characters, through: :teams
  has_many :performs
  has_many :teams, through: :performs


  def level
    total_xp = self.rhythm_xp + self.instrument_xp + self.vocal_xp + self.comedy_xp
    if total_xp < 100
      "Novice"
    elsif total_xp.between?(100, 200)
      "Apprentice"
    elsif total_xp.between?(200, 300)
      "Traveling Bard"
    elsif total_xp.between?(300, 400)
      "Music Master"
    elsif total_xp > 400
      "Ultimate Music The Gathering Master"
    end
  end
end
