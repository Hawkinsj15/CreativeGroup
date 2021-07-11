import logo from './logo.svg';
import { Navigation} from './Components/Main/Navigation';
import { HomePage }from './Components/Main/HomePage';
import { Stack }from './Components/Main/Stack';
import { Footer }from './Components/Main/Footer';
import { Header }from './Components/devPort/Header';
import {AboutBody}from './Components/About/AboutBody';
import {HeaderAbout}from './Components/About/HeaderAbout';


// import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import {
  Link,
  Route,
  Switch,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Navigation />
        <Switch>
          {/* <Route exact path="/" component={HomePage,Stack} /> */}

          <Route
            exact
            path="/"
            render={() => (
              <div>
                <HomePage />
                <Stack />
                <Footer/>
               
                
              </div>
            )}
          />
          

<Route
            exact
            path="/dev"
            render={() => (
              <div>
                <Header />
                
               
                
              </div>
            )}
          />
          

          <Route
            exact
            path="/about"
            render={() => (
              <div>
                <div>
                <HeaderAbout />
                </div>
                <AboutBody />
                
               
                
              </div>
            )}
          />
          

          
          
          
  
          
        </Switch>
       
        
      </div>
    </HashRouter>
  );
}

export default App;
