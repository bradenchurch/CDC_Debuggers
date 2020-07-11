# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_11_162602) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "facility_data", force: :cascade do |t|
    t.decimal "patients"
    t.decimal "covid_cases"
    t.datetime "date"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_facility_data_on_user_id"
  end

  create_table "facility_inspections", force: :cascade do |t|
    t.string "reviewer"
    t.string "passing_grade"
    t.text "inspection_report"
    t.bigint "facility_data_id", null: false
    t.bigint "facility_inspection_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["facility_data_id"], name: "index_facility_inspections_on_facility_data_id"
    t.index ["facility_inspection_id"], name: "index_facility_inspections_on_facility_inspection_id"
  end

  create_table "guidelines", force: :cascade do |t|
    t.boolean "masks"
    t.boolean "inspections"
    t.datetime "date"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_guidelines_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "facility_type"
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "facility_data", "users"
  add_foreign_key "facility_inspections", "facility_data", column: "facility_data_id"
  add_foreign_key "facility_inspections", "facility_inspections"
  add_foreign_key "guidelines", "users"
end
