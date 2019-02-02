class Perform < ApplicationRecord
belongs_to :user
belongs_to :team


  def perform_song
    perform = Perform.create(:user_id => user.id, :team_id => team.id)
    if perform.team.total_cost > perform.user.music_mana
      @message = "Sorry, you're low on mana. Until we add a way to get more, create a new profile with more mana or be happy with the level you're at!"
    else
      perform.user.update(
        :music_mana => perform.user.music_mana - perform.team.total_cost,
        :rhythm_xp => perform.user.rhythm_xp + perform.team.total_rhythm_xp,
        :instrument_xp => perform.user.instrument_xp + perform.team.total_instrument_xp,
        :vocal_xp => perform.user.vocal_xp + perform.team.total_vocal_xp,
        :comedy_xp => perform.user.comedy_xp + perform.team.total_comedy_xp
      )
      @message = "Thanks for playing one of #{self.team.name}'s songs!'"
    end
  end

end
