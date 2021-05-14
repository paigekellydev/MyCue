require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)
    # if req.path.match(/login/) && req.post?
    #   body = JSON.parse(req.body.read)
    #   user = User.find_by username: body["username"]
      
    #   if user 
    #     return [
    #       200,
    #       {'Content-Type' => 'application/json'},
    #       [user.to_json]
    #     ]
    #   else 
    #     return [
    #       401, 
    #       {'Content-Type' => 'application/json'},
    #       [{error: "No user found"}.to_json]
    #     ]
    #   end

    if req.path == '/users' && req.get?
      return [
        200,
        {'Content-Type' => 'application/json'},
        [Person.all.to_json]
      ]
    elsif req.path == '/all_tasks' && req.get?
      return [
        200, 
        {'Content-Type' => 'application/json'},
        [Task.all.to_json]
      ]
    elsif req.path == '/all_tasks' && req.post?
      data = JSON.parse req.body.read
      new_task = Task.create data
      return [
        201, 
        {'Content-Type' => 'application/json'},
        [new_task.to_json]
      ]
    elsif req.path.match(/tasks/) && req.get?
      id =req.path.split('/')[2]
      user = Person.find(id)
      return [
        200,
        {'Content-Type' => 'application/json'},
        [user.tasks.to_json] #how do i determine person
      ]
    elsif req.path == '/dt' && req.get?
      return [
        200,
        {'Content-Type' => 'application/json'},
        [DayTask.all.to_json]
      ]
    elsif req.path == '/dt' && req.post?
      data = JSON.parse req.body.read
      new_day_task = DayTask.create data
      return [
        201, 
        {'Content-Type' => 'application/json'},
        [new_day_task.to_json]
      ]
   
    # elsif req.path.match(/tasks/) && req.get?
    #   id =req.path.split('/')[2]
    #   user = Person.find(id)
    #   return [
    #     200,
    #     {'Content-Type' => 'application/json'},
    #     [user.tasks.to_json] #how do i determine person
    #   ]

      # ex: http://localhost:9393/users/3/tasks
    elsif req.path.match(/users/) && req.get?
      id =req.path.split('/')[2]
      user = Person.find(id)
      return [
        200,
        {'Content-Type' => 'application/json'},
        [user.to_json]
      ]
    elsif req.path == '/days' && req.get?
      return [
        200,
        {'Content-Type' => 'application/json'},
        [Day.all.to_json] #how do i determine person
      ]
    # /days/ returns tasks by the day
    # ex: http://localhost:9393/days/8
    elsif req.path.match(/days/) && req.get?
      id =req.path.split('/')[2]
      day = Day.find(id)
      return [
        200,
        {'Content-Type' => 'application/json'},
        [day.tasks.to_json] 
      ]
    end

  end
  
end
