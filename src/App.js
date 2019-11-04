import React from "react";
import Input from "./component/Input";
import ListItem from "./component/ListItem";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = { todoItems: todoItems };
  }

  addItem(todoItem) {
    todoItems.unshift({
      id: todoItems.length + 1,
      title: todoItem.newValue,
      done: (todoItems.done = false)
    });
    this.setState({ todoItems: todoItems });
    //console.log(todoItems);
  }
  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  markTodoDone(itemIndex) {
    //let { done } = this.state;
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    // todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
    console.log(todoItems);
  }
  render() {
    const count = todoItems.length;

    return (
      <div className="App">
        <h2 style={{ textAlign: "center", marginTop: 20 }}>
          TodoList: {count === 1 ? count + " item" : count + " items"}
        </h2>
        <ListItem
          items={this.state.todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        ></ListItem>
        <Input addItem={this.addItem}></Input>
      </div>
    );
  }
}
const todoItems = [];
todoItems.push({ id: 0, title: "Củ cải nhỏ", done: false });
todoItems.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
};
export default App;
