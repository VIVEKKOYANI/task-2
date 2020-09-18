import React, { Component } from "react";
import SearchResults from "react-filter-search";
import { Link } from "react-router-dom";

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      value: "",
    };
  }
  componentWillMount() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => this.setState({ users: json.data }));
  }
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { users, value } = this.state;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <SearchResults
          value={value}
          data={users}
          renderResults={(results) => (
            <div>
              {results.map((el) => (
                <div>
                  <Link to={`/userlist/id=${el.id}`}>
                    <img src={el.avatar} />
                  </Link>
                  <span>{el.name}</span>
                  <span>{el.email}</span>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    );
  }
}
