import { Component } from "react";
import {Form, Button} from 'react-bootstrap'

class LoginForm extends Component {
  submitHandler = (event) =>{
    event.preventDefault();
    const user={
      name:event.target.name.value,
      email:event.target.email.value
    };
    this.props.onLogin(user)
  }

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form onSubmit={this.submitHandler}>
      <Form.Group className="mb-3" >
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email"</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" name="email" />
      </Form.Group>
     
      
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
};

export default LoginForm;
