import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log(todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {todos.map((todo) => {
          return (
            <p key={todo.id}>
              {todo.text}{" "}
              <span
                className="px-4 text-red-500"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                X
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
