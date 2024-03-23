import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
//import Header from './components/Header'
import { HashRouter , Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
//import Spinner from './components/Spinner'
import Carousal from './components/Carousal'
import Facts from './components/Facts'
import Downloads from './pages/Downloads'
import School from './pages/School'
import College from './pages/College'
import Enquiry from './pages/Enquiry'
import Instruction from './pages/Instruction'
import Trustee from './pages/Trustee'
import Notices from './pages/Notices'

function App() {
  return (    
    <HashRouter>
    <Header/><Navbar/>
    {/*<Carousal/>
    <Facts/>*/}
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/school' element={<School/>}></Route>
    <Route path='/college' element={<College/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/downloads' element={<Downloads/>}></Route>
    <Route path='/enquiry' element={<Enquiry/>}></Route>
    <Route path='/instruction' element={<Instruction/>}></Route>
    <Route path='/trustee' element={<Trustee/>}></Route>
    <Route path='/notices' element={<Notices/>}></Route>

    </Routes>    
    <Footer/>
    </HashRouter> 
     
  )
}

export default App