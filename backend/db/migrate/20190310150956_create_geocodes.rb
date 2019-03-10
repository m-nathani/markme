class CreateGeocodes < ActiveRecord::Migration[5.2]
  def change
    create_table :geocodes do |t|
      t.string :key
      t.string :text
      t.string :title
      t.decimal :lat, precision: 10, scale: 8
      t.decimal :lng, precision: 11, scale: 8

      t.timestamps
    end
  end
end
