import React, { Component } from "react";
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
export default class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentWillMount() {
    fetch(
      `https://reqres.in/api/users/${window.location.pathname.replace(
        "/favourite/id=",
        ""
      )}`
    )
      .then((response) => response.json())
      .then((json) => this.setState({ users: json.data }));
  }
  render() {
    return (
        <div>
        <div>
          <img src={this.state.users.avatar} />
          <h3>{this.state.users.first_name}</h3>
          <h3>{this.state.users.last_name}</h3>
          <h3>{this.state.users.email}</h3>
          <Link to='/'><HomeIcon fontSize="small" /></Link>
        </div>
    </div>
    );
  }
}
