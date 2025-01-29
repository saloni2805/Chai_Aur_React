import { createContext, useContext } from 'react';

export const ToDoContext = createContext({
    todos: [
        {}
    ],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
    toggleComplete: () => { }
})

export function useToDo() {
    return useContext(ToDoContext)
}

export const ToDoContextProvider = ToDoContext.Provider

