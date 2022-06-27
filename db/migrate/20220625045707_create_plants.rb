class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.integer :zone_low
      t.integer :zone_high
      t.string :sun_exposure
      t.string :water_category
      t.string :image
      t.string :summary

      t.timestamps
    end
  end
end
