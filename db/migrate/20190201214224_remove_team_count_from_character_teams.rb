class RemoveTeamCountFromCharacterTeams < ActiveRecord::Migration[5.2]
  def change
    remove_column :character_teams, :team_count
  end
end
