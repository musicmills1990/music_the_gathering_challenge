class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true

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
