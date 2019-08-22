import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export default class CountryState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      region: ''
    };
  }

  selectCountry(val) {
    this.setState({
      country: val
    });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;
    return (
      <>
        <Form className="custom-form">
          <FormGroup>
            <Label for="country">Country</Label>
            <CountryDropdown className="form-control" value={country} onChange={(val) => this.selectCountry(val)} />
          </FormGroup>
          {
            country ? <FormGroup>
              <Label for="state">State</Label>
              <RegionDropdown className="form-control" country={country} value={region} onChange={(val) => this.selectRegion(val)} />
            </FormGroup> : null
          }
        </Form>
      </>
    );
  }
}
