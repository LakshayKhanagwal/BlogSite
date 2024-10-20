import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './AdminPage.jsx'
import './Style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import LandingPage from './LandingPage.jsx'
import Context from './Context.jsx'
import Newcourseform from './Components_Admin/Newcourseform.jsx'
import Mainpannel from './Components_Admin/Mainpannel.jsx'

const App = () => {
  let [state, setstate] = useState(false)
  return (
    <div>
      <Context.Provider value={{ 'boolen_insert': setstate, 'boolen_fetch': state }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Newcourseform />}></Route>
            <Route element={<Mainpannel />}></Route>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/admin' element={<AdminPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
