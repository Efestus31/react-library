import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Books from './pages/Books.jsx'
import About from './pages/About'
import Contacts from './pages/Contacts'
import DefaultLayout from './pages/DefaultLayout.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* Your routes here */}
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>

        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App
