DayTask.destroy_all
Day.destroy_all
Task.destroy_all
Person.destroy_all

paige = Person.create(name: "Paige")
adam = Person.create(name: "Adam")

monday = Day.create(day_of_the_week: "Monday")
tuesday = Day.create(day_of_the_week: "Tuesday")
wednesday = Day.create(day_of_the_week: "Wednesday")
thursday = Day.create(day_of_the_week: "Thursday")
friday = Day.create(day_of_the_week: "Friday")
saturday = Day.create(day_of_the_week: "Saturday")
sunday = Day.create(day_of_the_week: "Sunday")

laundry = 
Task.create(
    desciption: "Laundry",
    frequency_per_week: 2,
    person_id: paige.id
)

living_room = 
Task.create(
    desciption: "Straighten up living room",
    frequency_per_week: 7,
    person_id: paige.id
)

deep_clean_kitchen = 
Task.create(
    desciption: "Deep clean kitchen",
    frequency_per_week: 3,
    person_id: paige.id
)

dishes = 
Task.create(
    desciption: "Wash dishes",
    frequency_per_week: 7,
    person_id: adam.id
)

sweep_floor =
Task.create(
    desciption: "Sweep 2nd floor floors",
    frequency_per_week: 7,
    person_id: paige.id
)

trash_day =
Task.create(
    desciption: "Trash day - bring to curb",
    frequency_per_week: 1,
    person_id: adam.id
)

shower_scrub =
Task.create(
    desciption: "Scrub shower and tub",
    frequency_per_week: 1,
    person_id: adam.id
)

DayTask.create(
    task_id: shower_scrub.id,
    day_id: monday.id
)
DayTask.create(
    task_id: living_room.id,
    day_id: monday.id
)
DayTask.create(
    task_id: trash_day.id,
    day_id: wednesday.id
)
DayTask.create(
    task_id: sweep_floor.id,
    day_id: wednesday.id
)