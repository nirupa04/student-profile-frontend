
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import { useEffect,useState } from 'react';
import Home1 from './Home1';
import Form from './Form';
import Card from './Card';

function App() {
 
  return (
    <Router>
      
      <Routes>
        <Route  path='/' element={<Home1/>}/>
        <Route  path='https://student-profile-frontend.vercel.app/card' element={<Card/>} />
        <Route  path='https://student-profile-frontend.vercel.app/form' element={<Form/>} />
      </Routes>
    </Router>


  )
}

export default App 

