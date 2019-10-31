import React from "react";
import Input from "./component/Input";
import ListItem from "./component/ListItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = { todoItems: todoItems };
  }
  addItem(todoItem) {
    todoItems.unshift({
      id: todoItems.length + 1,
      title: todoItem.newValue
      //done: false
    });
    this.setState({ todoItems: todoItems });
    console.log(todoItems);
  }
  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  render() {
    return (
      <div className="App">
        <h2 style={{ textAlign: "center", marginTop: 20 }}>TodoList</h2>
        <ListItem
          items={this.state.todoItems}
          removeItem={this.removeItem}
        ></ListItem>
        <Input addItem={this.addItem}></Input>
      </div>
    );
  }
}
const todoItems = [];
todoItems.push({ id: 1, title: "Củ cải nhỏ", done: true });

export default App;
