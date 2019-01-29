class CreateCharacterSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :character_songs do |t|
      t.integer :song_id
      t.integer :character_id
      
      t.timestamps
    end
  end
end
