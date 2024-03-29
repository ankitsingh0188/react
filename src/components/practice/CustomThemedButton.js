import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

export default class CustomThemedButton extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to pass the theme down explicitly anymore.
function Toolbar(props) {
  return (
    <div>
      <ThemedButton /> <ThemedButton2 />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  render() {
    return <Button theme={this.context}>Submit</Button>;
  }
}

class ThemedButton2 extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  render() {
    return <Button theme={this.context}>Submit2</Button>;
  }
}
// Context consumer
ThemedButton.contextType = ThemeContext;
ThemedButton2.contextType = ThemeContext;
