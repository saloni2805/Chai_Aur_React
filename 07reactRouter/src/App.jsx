import { BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";

function App() {


  return (
    <>
      {/* <h1 className='bg-green-400 p-4'>React Router</h1> */}
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={} /> */}


        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
