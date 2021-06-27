import React from 'react';
import {useState} from 'react'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import About from './components/About'
import Contact from './components/Contact'




function App() {

  const [navToggle, setNavToggle] = useState(false)
  
  const navClick = () => {
    setNavToggle(!navToggle)
    console.log(navToggle)
  }


  return (
    <div className="App">

        <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
          <Navbar navToggle={navToggle} setNavToggle={setNavToggle}/>
        </div>
        <div className='nav-btn' onClick={navClick}>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
        </div>
        <div className='main-content'>
          <div className='content'>
            <Switch>
              <Route path='/' exact>
                <HomePage />
              </Route>
              <Route path='/about' exact>
                <About />
              </Route>
              <Route path='/contact' exact>
                <Contact />
              </Route>
            </Switch>
          </div>
        </div> 

    </div>
  );
}

export default App;
