class CreateDayTasksTable < ActiveRecord::Migration[5.2]
  def change
    create_table :day_tasks do |t|
      t.references :day
      t.references :task
    end
  end
end
