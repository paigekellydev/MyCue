class CreateDaysTable < ActiveRecord::Migration[5.2]
  def change
    create_table :days do |t|
      t.string :day_of_the_week
    end
  end
end
