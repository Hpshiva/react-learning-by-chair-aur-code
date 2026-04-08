import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [{ }],
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todos = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo } = todoSlice.actions;
