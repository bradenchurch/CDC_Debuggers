import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Login extends React.Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { reviewer, passing_grade, inspector_report } = this.state;
    this.props.auth.handleLogin({ reviewer, passing_grade, inspector_report}, this.props.history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { reviewer, passing_grade, inspector_report } = this.state;
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Inspector"
            autoFocus
            required         
            name= 'inspector'
            value={inspector}
            placeholder='inspector'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Reviewer"
            required
            name='reviewer
            value={reviewer}
            placeholder='Reviewer'
            type='reviewer'
            onChange={this.handleChange}
          />
           <Form.Input
            label="Passing_Grade"
            required
            name='Passing Grade'
            value={password}
            placeholder='Passing Grade'
            type='Passing Grade'
            onChange={this.handleChange}
          />
            <Form.Input
            label="Inspector_Report"
            required
            name='Inspector Report'
            value={inspector report)
            placeholder='Inspector Report'
            type='Inspector Report'
            onChange={this.handleChange}
           />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}
export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
});



const Home = () => (
  <>
  <h1>CDC Guidline Compliance</h1>
  <h2>Nursing Home Safety</h2>
    <Hero>
    </Hero>
  </>
);
