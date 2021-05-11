class CreateTasksTable < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.text :desciption
      t.integer :frequency_per_week
      t.references :person
    end
  end
end
