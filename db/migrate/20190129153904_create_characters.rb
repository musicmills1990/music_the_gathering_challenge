class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :description
      t.integer :rhythm_score
      t.integer :instrument_score
      t.integer :vocal_score
      t.integer :comedy_score
      t.integer :music_mana_cost

      t.timestamps
    end
  end
end
