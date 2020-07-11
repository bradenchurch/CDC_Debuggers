import React from 'react';
import styled from 'styled-components';
import { Button, Form, Segment, Header, date, input } from 'semantic-ui-react';


const FacilityQuestions = () => (
  <Wrapper>
    <Header>Facility Information</Header>
    <Header>Please respond to the questions below:</Header>

    <p>Total Patients:</p>
      <input  />
    <p>Total Covid Cases:</p>
      <input />
    <p>Date and Time</p>
      <date />
  </Wrapper>

) 

const Wrapper = styled.div`
`;



export default FacilityQuestions;