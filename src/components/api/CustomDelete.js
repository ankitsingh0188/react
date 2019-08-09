import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import config from './config';

export default class CustomDelete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      id: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    config.delete(`users/${this.state.id}`)
      .then(res => {
        console.log('delete successful');
      })
  }

  render() {
    return (
      <>
        <Form className="custom-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            {/* <Label for="name">Person ID</Label> */}
            <Input type="text" name="name" placeholder="Person ID" onChange={this.handleChange} />
          </FormGroup>
          <Button color="danger" type="submit">Delete</Button>
        </Form>
      </>
    )
  }
}