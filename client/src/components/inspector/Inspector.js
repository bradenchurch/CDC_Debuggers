import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class InspectorForm extends React.Component {
  state = { reviewer: '', passing_grade: '' , inspector_report: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    const { reviewer, passing_grade, inspector_report } = this.state;
    this.props.auth.handleLogin({ reviewer, passing_grade, inspector_report}, this.props.history);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { reviewer, passing_grade, inspector_report } = this.state;
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Inspector Review</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Reviewer"
            required
            name='reviewer'
            value={reviewer}
            placeholder='Reviewer'
            type='reviewer'
            onChange={this.handleChange}
          />
           <Form.Input
            label="passing grade"
            required
            name='passing_grade'
            value={passing_grade}
            placeholder='PassingGrade'
            type='passinggrade'
            onChange={this.handleChange}
          />
            <Form.Input
            label="inspector report"
            required
            name='inspector_report'
            value={inspector_report}
            placeholder='InspectorReport'
            type='inspectorreport'
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

  export default InspectorForm;

// export default class ConnectedLogin extends React.Component {
//   render() {
//     return (
//       <AuthConsumer>
//         { auth => <Login {...this.props} auth={auth} />}
//       </AuthConsumer>
//     )
//   }
// }
// ;


