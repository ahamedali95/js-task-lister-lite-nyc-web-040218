let taskList = 0;

class TaskList {
  constructor(description, color) {
    this.id = ++taskList;
    this.description = description;
    this.color = color;
  }

  render() {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", this.id);
    listItem.setAttribute("style", `color:${this.color}`);
    listItem.innerHTML = this.description + `<button data-description="${this.description}" onclick="myFunc(this)">x</button>`;

    return listItem;
  }
}
