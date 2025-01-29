import { createContext, useContext } from 'react';

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false

        }
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

