import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'
import {useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import styles from './App.module.css'

function App() {


  return (
    <div className="App">      
      <BrowserRouter>
        <main className={styles.main}>
          <Nav/>
          <div className={styles.contents}>
              <Switch>
                <Route path="/home">
                  <Home/>
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
                <Route path="/projects">
                  <Projects/>
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
              </Switch>
          </div>
        </main>        
      </BrowserRouter>
    </div>
  );
}

export default App;
