class AddCharacterCountToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :character_count, :integer, default: 1
  end
end
