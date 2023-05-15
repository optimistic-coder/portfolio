import logo from './logo.svg';
import Service from './pages/Service';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import "bootstrap/dist/css/bootstrap.min.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navs from './components/Nav';

function App() {
  return (
    <div>
      <Router>
        <Navs/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/service" component={Service}/>
          <Route exact path="/contact" component={Contact}/>

        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
