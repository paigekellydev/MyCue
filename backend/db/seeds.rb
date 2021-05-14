DayTask.destroy_all
Day.destroy_all
Task.destroy_all
Person.destroy_all

paige = Person.create(name: "Paige", id:5)
adam = Person.create(name: "Adam", id: 6)
chewie = Person.create(name: "Chewie", id:7)

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

DayTask.create(
    task_id: laundry.id,
    day_id: tuesday.id
)

DayTask.create(
    task_id: laundry.id,
    day_id: thursday.id
)

living_room = 
Task.create(
    desciption: "Put items away in living room",
    frequency_per_week: 7,
    person_id: paige.id
)

DayTask.create(
    task_id: living_room.id,
    day_id: monday.id
)
DayTask.create(
    task_id: living_room.id,
    day_id: tuesday.id
)
DayTask.create(
    task_id: living_room.id,
    day_id: wednesday.id
)
DayTask.create(
    task_id: living_room.id,
    day_id: wednesday.id
)
DayTask.create(
    task_id: living_room.id,
    day_id: thursday.id
)
DayTask.create(
    task_id: living_room.id,
    day_id: friday.id
)
DayTask.create(
    task_id: living_room.id,
    day_id: saturday.id
)
DayTask.create(
    task_id: living_room.id,
    day_id: sunday.id
)



deep_clean_kitchen = 
Task.create(
    desciption: "Deep clean kitchen",
    frequency_per_week: 3,
    person_id: paige.id
)
DayTask.create(
    task_id: deep_clean_kitchen.id,
    day_id: sunday.id
)
DayTask.create(
    task_id: deep_clean_kitchen.id,
    day_id: wednesday.id
)
DayTask.create(
    task_id: deep_clean_kitchen.id,
    day_id: friday.id
)

dishes = 
Task.create(
    desciption: "Wash dishes",
    frequency_per_week: 7,
    person_id: adam.id
)

DayTask.create(
    task_id: dishes.id,
    day_id: monday.id
)
DayTask.create(
    task_id: dishes.id,
    day_id: tuesday.id
)
DayTask.create(
    task_id: dishes.id,
    day_id: wednesday.id
)
DayTask.create(
    task_id: dishes.id,
    day_id: wednesday.id
)
DayTask.create(
    task_id: dishes.id,
    day_id: thursday.id
)
DayTask.create(
    task_id: dishes.id,
    day_id: friday.id
)
DayTask.create(
    task_id: dishes.id,
    day_id: saturday.id
)
DayTask.create(
    task_id: dishes.id,
    day_id: sunday.id
)


sweep_floor =
Task.create(
    desciption: "Sweep 2nd floor floors",
    frequency_per_week: 7,
    person_id: paige.id
)

DayTask.create(
    task_id: sweep_floor.id,
    day_id: monday.id
)
DayTask.create(
    task_id: sweep_floor.id,
    day_id: tuesday.id
)
DayTask.create(
    task_id: sweep_floor.id,
    day_id: wednesday.id
)
DayTask.create(
    task_id: sweep_floor.id,
    day_id: wednesday.id
)
DayTask.create(
    task_id: sweep_floor.id,
    day_id: thursday.id
)
DayTask.create(
    task_id: sweep_floor.id,
    day_id: friday.id
)
DayTask.create(
    task_id: sweep_floor.id,
    day_id: saturday.id
)
DayTask.create(
    task_id: sweep_floor.id,
    day_id: sunday.id
)


trash_day =
Task.create(
    desciption: "Trash day - bring to curb",
    frequency_per_week: 1,
    person_id: adam.id
)

DayTask.create(
    task_id: trash_day.id,
    day_id: wednesday.id
)

shower_scrub =
Task.create(
    desciption: "Scrub shower and tub",
    frequency_per_week: 1,
    person_id: adam.id
)

DayTask.create(
    task_id: shower_scrub.id,
    day_id: saturday.id
)