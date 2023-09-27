class TodoView {
  constructor() {
    this.todoList = document.getElementById("todoList");
    this.todoInput = document.getElementById("todoInput");
    this.addButton = document.getElementById("addButton");
    this.clearButton = document.getElementById("clearButton");
  }

  bindAddTodo(handler) {
    this.addButton.addEventListener("click", () => {
      const text = this.todoInput.value.trim();
      if (text !== "") {
        handler(text);
        this.todoInput.value = "";
      }
    });
  }

  bindToggleTodo(handler) {
    this.todoList.addEventListener("change", (event) => {
      if (event.target.type === "checkbox") {
        const index = parseInt(event.target.dataset.index, 10);
        handler(index);
      }
    });
  }

  bindClearCompleted(handler) {
    this.clearButton.addEventListener("click", handler);
  }

  renderTodoList(todos) {
    this.todoList.innerHTML = "";

    todos.forEach((todo, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                <input type="checkbox" data-index="${index}" ${
        todo.completed ? "checked" : ""
      }>
                <label>${todo.text}</label>
            `;
      this.todoList.appendChild(listItem);
    });
  }
}

const view = new TodoView();
