import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Contacts from "./Components/contacts/Contacts";
import Header from "./Components/layout/Header";
import About from "./Components/pages/About";
import { Provider } from './context';
import AddContact from "./Components/contacts/AddContact";
import EditContact from "./Components/contacts/EditContact";
import NotFound from "./Components/pages/NotFound";


class App extends Component {
  render() {
    return (
      <Provider>
       <Router>
          <div className="App">
            <Header branding="Contact Manager"/>
            <div className="container"> 
            <Switch>
              <Route exact path="/" component={Contacts} ></Route>
              <Route exact path="/add" component={AddContact} ></Route>
              <Route exact path="/about" component={About} ></Route>
              <Route exact path="/edit/:id" component={EditContact} ></Route>
              <Route component={NotFound}> </Route>            
            </Switch>
            </div>
          </div>
       </Router>
      </Provider>
    );
  }
}

export default App;
