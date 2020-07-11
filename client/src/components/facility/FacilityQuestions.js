import React from 'react';
import styled from 'styled-components';
import { Button, Form, Segment, Header, date, input } from 'semantic-ui-react';


class FacilityQuestions extends React.Component {
  state = { patients: '', covid_cases: '' , date: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    const { patients, covid_cases, date } = this.state;
    this.props.auth.handleLogin({ patients, covid_cases, date}, this.props.history);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { patients, covid_cases, date } = this.state;
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Facility Data</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Patients"
            required
            name='patients'
            value={patients}
            placeholder='#'
            type='patients'
            onChange={this.handleChange}
          />
           <Form.Input
            label="Covid Cases"
            required
            name='covid_cases'
            value={covid_cases}
            placeholder='#'
            type='covidcases'
            onChange={this.handleChange}
          />
            <Form.Input
            label="date"
            required
            name='date'
            value={date}
            placeholder='Date'
            type='date'
            onChange={this.handleChange}
           />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>No Touchie</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}
;

  export default FacilityQuestions;

