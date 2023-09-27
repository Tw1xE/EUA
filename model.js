class TodoModel {
  constructor() {
    this.todos = [];
  }

  addTodo(text) {
    this.todos.push({ text, completed: false });
  }

  toggleTodoCompleted(index) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  getTodos() {
    return this.todos;
  }
}

const model = new TodoModel();
