import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ContactList from "./ContactList";
import UserList from "./UserList";
import Favourites from "./Favourites";

class App extends Component {  
  render() {  
    return (
      <Router>
        <Route exact path="/" component={ContactList} />
        <Route exact path="/userlist/:id" component={UserList} />
        <Route exact path="/favourite/:id" component={Favourites}/>
      </Router>
    );
  }
}
export default App;
