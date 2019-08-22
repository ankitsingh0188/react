import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class CustomLogout extends Component {

  // Run before render
  componentWillMount() {
    // console.log('componentWillMount');
  }

  // Run after render
  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <Redirect to="/login" />
    );
  }
}