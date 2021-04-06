import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <main>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
          </main>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App;
