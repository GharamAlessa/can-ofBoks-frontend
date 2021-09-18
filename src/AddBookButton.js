import React, { Component } from "react";
import {Modal, Button,Form}from 'react-bootstrap'
import axios from "axios";

export class AddBookButton extends Component {
    constructor(props) {
        super(props);
        this.state={
            addBook:null
        
        }
    }
submitHandler= async (event)=>{
event.preventDefault();
 const addBook ={
    title:event.target.title.value,
    description:event.target.description.value,
    status:event.target.status.value
}

await this.setState({ 
    addBook:addBook
})
await this.addBook();
this.props.modalHide();
} 

addBook = () => {
    axios
    .post(`${process.env.REACT_APP_API_URL}/books?email=${this.props.user.email}`,this.state.addBook)
    .then (result=>{
this.props.bookAddingHandler(result.data)

    })
  }

  render() {
    return (
      <>

        <Modal show={this.props.show} onHide={this.props.modalHide} >
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book title:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter book title"
                  name="title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Description:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter book description"
                  name="description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Status:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Status"
                  name="status"
                />
              </Form.Group>

              <Button   variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AddBookButton;
