class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :music_mana, numericality: {greater_than_or_equal_to: 500, message: "is important. Start with at least 500."}
  #has_many :teams
  has_many :characters, through: :teams
  has_many :performs
  has_many :teams, through: :performs


  def level
    if user_total_xp < 100
      "Novice"
    elsif user_total_xp.between?(100, 200)
      "Apprentice"
    elsif user_total_xp.between?(200, 300)
      "Traveling Bard"
    elsif user_total_xp.between?(300, 400)
      "Music Master"
    elsif user_total_xp > 400
      "Ultimate Music The Gathering Master"
    end
  end

  def user_total_xp
    self.rhythm_xp + self.instrument_xp + self.vocal_xp + self.comedy_xp
  end

end
