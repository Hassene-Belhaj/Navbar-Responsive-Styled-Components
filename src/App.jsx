import React from 'react'
import { GlobalStyle } from './Globalstyle/Globalstyle'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <>
  <Router>
  <GlobalStyle/>
   <Navbar />
  </Router>
    </>
 
    )
}

export default App