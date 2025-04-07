import { nanoid } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

// initial store
// u can make initial state anything Array ot Objects ... Pbjects prferable
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
}

// Slice= u can say bigger version of Reducer
// export it bcz we are using it further

export const todoSlice = createSlice({
  // There is name to a slice
  // This name would be shown in redux toolkit chrome extension
  name: "todo",
  initialState,
  reducers: {
    // properties and functions
    // state will give current ititial state's situations's access
    // Here payload is an object which can have anything id, email...
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload }
      // state is nothing but the InitialState
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      // action madhlya payload sobt todo mdli id match nai zali phj ashe filter kara
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

// ye components me kam ayenge isliya export krke rakho
export const { addTodo, removeTodo } = todoSlice.actions

// ye store use krega
export default todoSlice.reducer
