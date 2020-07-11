class CreateFacilityData < ActiveRecord::Migration[6.0]
  def change
    create_table :facility_data do |t|
      t.numeric :patients
      t.numeric :covid_cases
      t.datetime :date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
