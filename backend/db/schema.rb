# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_06_165710) do

  create_table "day_tasks", force: :cascade do |t|
    t.integer "day_id"
    t.integer "task_id"
    t.index ["day_id"], name: "index_day_tasks_on_day_id"
    t.index ["task_id"], name: "index_day_tasks_on_task_id"
  end

  create_table "days", force: :cascade do |t|
    t.string "day_of_the_week"
  end

  create_table "people", force: :cascade do |t|
    t.string "name"
  end

  create_table "tasks", force: :cascade do |t|
    t.text "desciption"
    t.integer "frequency_per_week"
    t.integer "person_id"
    t.index ["person_id"], name: "index_tasks_on_person_id"
  end

end
