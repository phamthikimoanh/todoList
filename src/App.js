import React from "react";
import Input from "./component/Input";
import ListItem from "./component/ListItem";
// import Fillter from "./component/Fillter";
import PropTypes from "prop-types";
import todoState from "./component/todoState";

const App = () => {
  const { todos, addTodo, deleteTodo, checkTodo } = todoState([]);

  const saveToDoMethod = todoText => {
    const trimmedText = todoText.trim();
    if (trimmedText.length > 0) {
      addTodo(trimmedText);
    }
  };

  const count = todos.length;
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: 20 }}>
        TodoList: {count === 1 ? count + " item" : count + " items"}
      </h2>
      {/* <Fillter data={this.state.todoItems} /> */}
      <ListItem
        todos={todos}
        deleteTodo={deleteTodo}
        onClickCheck={checkTodo}
      ></ListItem>
      <Input getValue={saveToDoMethod}></Input>
    </div>
  );
};
App.propTypes = {
  todos: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  })
};
export default App;
