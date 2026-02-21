/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = []
  }
add(todo) {
  this.todos.push(todo);
}
remove(indexOfTodo) { 
  if(indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1)              // it deletes 2 consecutive elements indexOfTodo and next element
  }       
}
update(index, updatedTodo)  {
  if(index >= 0 && index < this.todos.length ) {
     this.todos[index] = updatedTodo
  } return null
}
get(indexOfTodo) {
  if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo]
  } return null                                                        // need to write this as it is giving data , it come when if condition fails
}
getAll() {
  return this.todos;
}
clear() {
  this.todos = []
}
}

module.exports = Todo;

let TodoList = new Todo() 
TodoList.add("Have to go to shopping mall") 
TodoList.add("Have to meet my frnd") 
TodoList.add("have to attend the meeting")

TodoList.remove(0)


console.log(TodoList.getAll())

