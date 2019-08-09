import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import config from './config';


export default class CustomPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name
    }

    config.post('users', { user })
      .then(res => {
        // console.log(res);
        console.log('post successful');
      })
  }

  render() {
    return (
      <>
        <Form className="custom-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            {/* <Label for="name">Person</Label> */}
            <Input type="text" name="name" placeholder="Person Name" onChange={this.handleChange} />
          </FormGroup>
          <Button color="info" type="submit">Add</Button>
        </Form>
      </>
    )
  }
}