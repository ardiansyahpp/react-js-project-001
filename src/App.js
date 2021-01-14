import './App.css';
import AboutMe from "./Pages/AboutMe";
import Cards from "./Pages/Cards";
import WorkingPage from "./Pages/WorkingPage";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'antd/dist/antd.css';


function App() {

  return (
    <Router>
      <Switch>
      <div className="App">
        <Navbar />
        <Route path='/' exact component={Home}/>
        <Route path='/cards' component={Cards}/>
        <Route path='/about' component={AboutMe}/>
        <Route path='/working-page' component={WorkingPage}/>
        <Footer />
      </div>
      </Switch>
    </Router>
  );
}

const Home = () => {

  return (
    <div className="homepage">
      <div className="home">
        <h1>Welcome, AND Dont Stay Here For To Long</h1>
        <br/><br/><br/>
      </div>
    </div>
  );
}


export default App;
