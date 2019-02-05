class AddSongChoiceToPerforms < ActiveRecord::Migration[5.2]
  def change
    add_column :performs, :song_choice, :string
  end
end
