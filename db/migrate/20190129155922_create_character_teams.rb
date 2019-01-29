class CreateCharacterTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :character_teams do |t|
      t.integer :character_id
      t.integer :team_id
      t.integer :team_count
      
      t.timestamps
    end
  end
end
