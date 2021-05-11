class Day < ActiveRecord::Base
    has_many :day_tasks
    has_many :tasks, through: :day_tasks
end