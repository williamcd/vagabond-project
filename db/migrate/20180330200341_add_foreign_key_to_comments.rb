class AddForeignKeyToComments < ActiveRecord::Migration[5.1]
  def change
    add_reference :comments, :city, foreign_key: true
  end
end
