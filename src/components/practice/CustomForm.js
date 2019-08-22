import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

export function Test() {
  return (
    <>
      <div>
        <div>
          <i>React Extra Component</i>
        </div>
      </div>
    </>
  )
}

let initialState = {
  name: "",
  email: "",
  address: "",
  nameError: "",
  emailError: "",
  addressError: "",
};

export default class CustomForm extends Component {
  state = initialState;
  // It will run very firstly.
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      email: '',
      name: '',
      address: '',
      nameError: '',
      emailError: '',
      addressError: '',
      user: '',
      // console.log('constructor');
      // this.customSubmit = this.customSubmit.bind(this);
    }
  }

  handleValidate = () => {
    let nameError = "";
    let emailError = "";
    let addressError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.address) {
      addressError = "Address cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (emailError || nameError || addressError) {
      this.setState({ emailError, nameError, addressError });
      return false;
    }

    return true;
  };


  handleSubmit = (event) => {
    event.preventDefault();
    let isValid = this.handleValidate();
    if (isValid) {
      console.log(this.state);
      // Clear form
      this.setState(initialState);
      this.setState({
        message: 'Hello'
      })
    }
    this.props.updateParent('Lorem');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      message: ''
    })
    // console.log(event.target.value)
  }

  // onPasswordChange = (event) => {
  //   this.setState({
  //     password: event.target.value,
  //     message: ''
  //   })
  //   console.log(event.target.value)
  // }

  // Run before render
  componentWillMount() {
    // console.log('componentWillMount');
  }

  // Run after render
  componentDidMount() {
    // console.log('componentDidMount');
  }

  // Conditional rendering
  shouldComponentUpdate() {
    return true;
  }

  render() {
    // console.log(this.props);
    return (
      <>
        <Form className="custom-form">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" placeholder="enter your name" value={this.state.name} onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" name="email" placeholder="enter your email" value={this.state.email} onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input type="text" name="address" placeholder="enter your address" value={this.state.address} onChange={this.handleChange} />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.addressError}
            </div>
          </FormGroup>
          {/* <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="enter your password" value={this.state.password} onChange={this.onPasswordChange} />
        </FormGroup> */}
          <Button color="info" onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <div className="col-md-6">
          {
            this.state.message !== '' ? <div className="col-sm-12">{this.state.email}</div> : null
          }
        </div>
      </>
    );
  }
}