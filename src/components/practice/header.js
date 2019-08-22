import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

class Header extends Component {

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (
      <>
        <nav>
          {
            localStorage.getItem('user') ? <NavLink exact activeClassName="nav-item-active" to="/logout">Logout</NavLink>
              : <NavLink exact activeClassName="nav-item-active" to="/login">Login</NavLink>
          }
          <NavLink exact activeClassName="nav-item-active" to="/">Home</NavLink>
          <NavLink exact activeClassName="nav-item-active" to="/emp">Emp</NavLink>
          <NavLink exact activeClassName="nav-item-active" to="/update-emp">Add Emp</NavLink>
          <NavLink exact activeClassName="nav-item-active" to="/delete-emp">Delete Emp</NavLink>
          <NavLink exact activeClassName="nav-item-active" to="/children">Children</NavLink>
          <NavLink exact activeClassName="nav-item-active" to="/context">Context</NavLink>
          <NavLink exact activeClassName="nav-item-active" to="/imdb">Imdb</NavLink>
        </nav>
      </>
    )
  }
}
const ShowHeader = withRouter(Header);

export default ShowHeader;
