class CreateFacilityInspections < ActiveRecord::Migration[6.0]
  def change
    create_table :facility_inspections do |t|
      t.string :reviewer
      t.string :passing_grade
      t.text :inspection_report
      t.belongs_to :facility_data, null: false, foreign_key: true
      t.belongs_to :facility_inspection, null: false, foreign_key: true

      t.timestamps
    end
  end
end
