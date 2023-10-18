import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Navigate from './components/Navigate';
import IntructionsApiKey from './components/InstructionsAPIKEY';
import GenerateApiKey from './components/GenerateApiKey';
import Hospitals from './components/Hospitals';
import AddHospital from './components/AddHospital';
import UpdateHospital from './components/UpdateHospital';
import RemoveHospital from './components/RemoveHospital';
import Login from "./components/Login";
import Contact from './components/Contact';
import Search from './components/Search';
import './App.css';
import VerifyApiKey from './components/VerifyApiKey';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navigate/>
        </div>
        <div>
        <BrowserRouter>
          <div className='App'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/IntructionsApiKey' component={IntructionsApiKey}/>
              <Route path='/GenerateApiKey' component={GenerateApiKey}/>
              <Route path='/VerifyApiKey' component={VerifyApiKey}/>
              <Route path='/Hospitals' component={Hospitals}/>
              <Route path='/AddHospital' component={AddHospital}/>
              <Route path='/UpdateHospital' component={UpdateHospital}/>
              <Route path='/RemoveHospital' component={RemoveHospital}/>
              <Route path='/Contact' component={Contact}/>
              <Route path="/Login"  component={Login} />
              <Route path='/Search' component={Search}/>
              <Route render={() => (
                  <p> NOT FOUND</p>
                )} />
            </Switch>
          </div>
        </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
