import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { HashRouter as Router , Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Downloads from './pages/Downloads'
import School from './pages/School'
import College from './pages/College'
import Enquiry from './pages/Enquiry'
import Instruction from './pages/Instruction'
import Trustee from './pages/Trustee'
import Notices from './pages/Notices'
import NewsLetters from './pages/NewsLetters'

import Belief from './pages/Belief'
import AimsAndIdeals from './pages/AimsAndIdeals'
import Vision from './pages/Vision'
import Mission from './pages/Mission'
import Goals from './pages/Goals'
import Objectives from './pages/Objectives'
import Motto from './pages/Motto'
import RuleAndRegulations from './pages/RuleAndRegulations'
import Examination from './pages/Examination'
import CoCurricularActivities from './pages/CoCurricularActivities'
import Houses from './pages/Houses'
import Uniforms from './pages/Uniforms'
import IdCards from './pages/IdCards'
import BusServices from './pages/BusServices'
import Links from './pages/Links'
import Activities from './pages/Activities'

function App() {
  return (    
    <Router>
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
    <Route path='/links' element={<Links/>}></Route>
    <Route path='/newsletters' element={<NewsLetters/>}></Route>
    <Route path='/activities' element={<Activities/>}></Route>

    <Route path='/ruleandregulations' element={<RuleAndRegulations/>}></Route>
    <Route path='/examination' element={<Examination/>}></Route>
    <Route path='/cocurricularactivities' element={<CoCurricularActivities/>}></Route>
    <Route path='/houses' element={<Houses/>}></Route>
    <Route path='/uniforms' element={<Uniforms/>}></Route>
    <Route path='/idcards' element={<IdCards/>}></Route>
    <Route path='/busservices' element={<BusServices/>}></Route>
    <Route path='/trustee' element={<Trustee/>}></Route>
    <Route path='/belief' element={<Belief/>}></Route>
    <Route path='/aimsandideals' element={<AimsAndIdeals/>}></Route>
    <Route path='/vision' element={<Vision/>}></Route>
    <Route path='/mission' element={<Mission/>}></Route>
    <Route path='/goals' element={<Goals/>}></Route>
    <Route path='/objectives' element={<Objectives/>}></Route>
    <Route path='/motto' element={<Motto/>}></Route>

    </Routes>    
    <Footer/>
    </Router> 
     
  )
}

export default App