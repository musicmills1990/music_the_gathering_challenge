class AddCategoryToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :category, :string
  end
end
