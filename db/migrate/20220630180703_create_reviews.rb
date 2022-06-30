class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.boolean :like
      t.integer :plant_id
      t.integer :user_id

      t.timestamps
    end
  end
end
