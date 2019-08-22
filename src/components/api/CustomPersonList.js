import React from 'react';
// import axios from 'axios';
import { Table } from 'reactstrap';
import config from './config';


export default class CustomPersonList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    config.get('users')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      < Table >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.persons.map(
              (persons) =>
                <tr key={persons.id}>
                  <td>{persons.id}</td>
                  <td>{persons.name}</td>
                  <td>{persons.email}</td>
                  <td>{persons.company.name}</td>
                  <td>{persons.address.city}</td>
                </tr>
            )
          }
        </tbody>
      </Table >
    )
  }
}