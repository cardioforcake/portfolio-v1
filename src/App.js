import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import styles from './App.module.css'

function App() {


  return (
    <div className="App">      
      <BrowserRouter>
        <main className={styles.main}>
          <Nav/>
          <div className={styles.contents}>
              <Switch>
                <Route path="/about">
                  <About/>
                </Route>
                <Route path="/projects">
                  <Projects/>
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
                <Route path="/">
                  <Home/>
                </Route>
              </Switch>
          </div>
        </main>        
      </BrowserRouter>
    </div>
  );
}

export default App;
