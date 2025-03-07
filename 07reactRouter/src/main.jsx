import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import User from "./components/User/User.jsx"
import GitHub, { GitHubInfoLoader } from "./components/GitHub/GitHub.jsx"

// ----- Method: 1 -----

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//     ],
//   }
// ])

// ------ Method: 2 - Prefered by hitesh ------

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/user/:id" element={<User />}></Route>
      {/* After user whichever is there u should remember, 
      te id kiva kahi asel tya path vrti ky opn zal phj te mhnj element */}
      <Route
        loader={GitHubInfoLoader}
        path="/github"
        element={<GitHub />}
      ></Route>
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
