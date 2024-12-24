function App() {

  const username = "Salonii"
  return (
    <div>
      <h1>Heyy {username}</h1>
      {/* Here {username} is a evaluated expression, because at the end React converts the HTML 
      element in Object which doesnt include any expression like coditions or loops*/}
    </div>
  )
}

export default App
