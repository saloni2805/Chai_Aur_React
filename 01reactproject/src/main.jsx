import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App | Chai</h1>
//     </div>
//     //--- React hya HTML elements che object bnvte ani inject krte root la ---
//   )
// }

//--- Ha mi bnvlela object nai chalnar, inject nai honar, thats why use React.CreateElement ---
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank' >Visit Google</a>
// )


const anotherUser = "chaaee"
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  "click here",
  anotherUser
)
// Here "anotherUser" is a evaluated expression means variable injecting, we can not write conditional statements or looping statements in it as this react element is Object and Object doesnt include ant type of conditional statements or looping statements

createRoot(document.getElementById('root')).render(
  // App.js is a method
  // < App />

  reactElement

  // As App.js is a method , we can write custom like this...
  // MyApp()
)
