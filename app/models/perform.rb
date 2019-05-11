class Perform < ApplicationRecord
belongs_to :user
belongs_to :team


  def perform_song
    if self.team.total_cost > self.user.music_mana
      @message = "Sorry, you're low on mana. Until we add a way to get more, create a new profile with more mana or be happy with the level you're at!"
    else
      self.user.update(
        :music_mana => self.user.music_mana - self.team.total_cost,
        :rhythm_xp => self.user.rhythm_xp + self.team.total_rhythm_xp,
        :instrument_xp => self.user.instrument_xp + self.team.total_instrument_xp,
        :vocal_xp => self.user.vocal_xp + self.team.total_vocal_xp,
        :comedy_xp => self.user.comedy_xp + self.team.total_comedy_xp
      )
      @message = "Boom! '#{self.team.name}' collaborated to create a brand new rendition of '#{self.song_choice}'"
    end
  end

end
