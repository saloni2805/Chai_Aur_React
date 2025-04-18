import "./App.css"
import AddToDo from "./components/AddToDo"
import Todos from "./components/Todos"

// react-redux is used for communication between react and redux & redux-toolkit is used for reducing the size/number of lines of the redux code

// Redux toolkit ki notes
// 1. Create Store - single source of truth
// it has configureStore
// introduce reducer

// 2. Create Slice(functions)
// method(createSlice)
// Slice has name, initialState, reducers :{key: function}
// Access of two things (State, action)
// All methods defined in the reducer() function have 2 main attributes "state" and "action"
// state = state value in the store
// action = action.payload
// export individual functionality
// export main source export

// 3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
//  dispatch(addTodo())

// 4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
// variable me values lelo ek baar aagaie uske baad pure JS concept hai

// Note: Todo's Project basic nai hote xD  :)

function App() {
  return (
    <>
      <h1>Learn about Redux</h1>
      <AddToDo />
      <Todos />
    </>
  )
}

export default App
