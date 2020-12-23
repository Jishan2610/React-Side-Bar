
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Side_bar from './Component/Side_bar';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from "./Component/pages/Home.jsx";
import Contact from "./Component/pages/Contact.jsx";
import About from "./Component/pages/About.jsx";
import Reports from "./Component/pages/Reports.jsx";
import Teams from "./Component/pages/Teams.jsx";

function App() {
  return (
    <>
    <Router>
         <Side_bar/>
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/about" component={About}/>
           <Route exact path="/report" component={Reports}/>
           <Route exact path="/team" component={Teams}/>
           <Route exact path="/contact" component={Contact}/>
         </Switch>
    </Router>
    </>
  );
}

export default App;
