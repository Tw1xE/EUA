class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.view.bindToggleTodo(this.handleToggleTodo.bind(this));
    this.view.bindClearCompleted(this.handleClearCompleted.bind(this));

    this.view.renderTodoList(this.model.getTodos());
  }

  handleAddTodo(text) {
    this.model.addTodo(text);
    this.view.renderTodoList(this.model.getTodos());
  }

  handleToggleTodo(index) {
    this.model.toggleTodoCompleted(index);
    this.view.renderTodoList(this.model.getTodos());
  }

  handleClearCompleted() {
    this.model.clearCompleted();
    this.view.renderTodoList(this.model.getTodos());
  }
}

const controller = new TodoController(model, view);
