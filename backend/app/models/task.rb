class Task < ActiveRecord::Base
    belongs_to :person
    has_many :day_tasks
    has_many :days, through: :day_tasks
end