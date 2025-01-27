import createContext from 'react';
import useContext from 'react';

export const ToDoContext = createContext({
    todos: [{

    }]
})

export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoContextProvider = ToDoContext.Provider

