class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :music_mana
      t.integer :rhythm_xp, default: 0
      t.integer :instrument_xp, default: 0
      t.integer :vocal_xp, default: 0
      t.integer :comedy_xp, default: 0

      t.timestamps
    end
  end
end
