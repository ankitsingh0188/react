import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

function FancyBorder(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue" >
      {/* <h1 className="Dialog-title" > {props.title} </h1> */}
      {/* <p className="Dialog-message" > {props.message} </p> */}
      {props.children}
    </FancyBorder>
  );
}

export default class CustomChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ''
    };
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?" >
        <Form className="custom-form">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" value={this.state.login} onChange={this.handleChange} />
          </FormGroup>
          <Button color="info" onClick={this.handleSignUp}>Submit</Button>
        </Form>

      </Dialog >
    );
  }

  handleChange = (event) => {
    this.setState({
      login: event.target.value
    });
  }

  handleSignUp = () => {
    alert(`Welcome abroad, ${this.state.login}!`);
  }
}