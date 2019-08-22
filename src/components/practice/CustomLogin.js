import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';


let initialState = {
  name: "",
  nameError: "",
};

export default class CustomLogin extends Component {
  state = initialState;
  // It will run very firstly.
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      // console.log('constructor');
      // this.customSubmit = this.customSubmit.bind(this);
    }
  }

  handleValidate = () => {
    let nameError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (nameError) {
      this.setState({ nameError });
      return false;
    }

    return true;
  };


  handleSubmit = (event) => {
    event.preventDefault();
    let isValid = this.handleValidate();
    if (isValid) {
      console.log('hi');
      localStorage.setItem('user', this.state.name);
      this.setState(initialState);
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

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
    if (localStorage.getItem('user')) {
      return <Redirect to="/emp" />
    }
    // console.log(this.props.location.search);
    return (
      <>
        {
          this.props.location.search !== '' ? <Alert color="danger">Please set local storage.</Alert> : ''
        }
        <Form className="custom-form">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" placeholder="enter your name" value={this.state.name} onChange={this.handleChange} />
            {this.state.name === '' ? <div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div> : ''
            }
          </FormGroup>
          <Button color="info" onClick={this.handleSubmit}>Submit</Button>
        </Form>
        {/* <div className="col-md-6">
          {
            <div className="col-sm-12">{this.state.name}</div>
          }
        </div> */}
      </>
    );
  }
}