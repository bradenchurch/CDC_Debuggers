class CreateGuidelines < ActiveRecord::Migration[6.0]
  def change
    create_table :guidelines do |t|
      t.boolean :masks
      t.boolean :inspections
      t.datetime :date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
