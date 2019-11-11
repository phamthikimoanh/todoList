import { useState } from "react";

export default initValue => {
  const [todos, setTodos] = useState(initValue);
 

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => {
        return index !== 1;
      });
      setTodos(newTodos);
    },
    checkTodo: todoCheck => {
      const newDone = todos.filter((_, index) => {
        let done = todos.done;
        return done !== false;
      });
      setTodos(newDone);
    }
  };
};
