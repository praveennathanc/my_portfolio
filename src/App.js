
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Footer from './Footer';
import SuperHome from './Component/SuperHome';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <SuperHome/>
      <Footer/>
        <Switch>
          <Route path="/myportfolio"/>
          </Switch>
      </Router>
   
     </div>
  );
}

export default App;
