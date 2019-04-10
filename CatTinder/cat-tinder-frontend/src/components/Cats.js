import React, { Component } from 'react';
import {
  Col, Container, Row, ListGroup, ListGroupItem, Modal, Button, Form, FormControl
} from 'react-bootstrap'


class Cats extends Component {
    constructor(props) {
    super(props);
    this.state = {
      show: false,
      cat: {
          name: "",
          age: "",
          enjoys: ""
    },
      editForm:{
          name: " ",
          enjoys: " ",
          age: " "
      }
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = (cat) => {
      console.log(cat);
      this.setState({ show: true, cat:cat, editForm:cat});
  }

  handleEditCat = (e) =>{

      const {editForm} = this.state
      editForm[e.target.name] = e.target.value
    this.setState({editForm});
  }
  handleCatSubmit = (e) => {
      e.preventDefault()
      console.log(this.state.editForm);
      this.props.editCat(this.state.cat.id, this.state.editForm)
  }


  handleDelete = (id) => {
    this.props.deleteCat(id)
    }

  render() {
    return (
	<Container>
      <Row>
        <Col xs={12}>
        <ListGroup>
        {this.props.cats.map((cat, index) =>{
          return (
            <ListGroupItem key={index}>
                <h4>
                  <span onClick= {this.handleShow} className='cat-name'>
                    {cat.name}
                  </span>
                  - <small className='cat-age'>{cat.age} years old</small>
                </h4>

              <span className='cat-enjoys'>
                {cat.enjoys}
              </span>
              <div class="button-right"><button onClick= {() => this.handleDelete(cat.id)}type="button" className="btn btn-outline-danger">Sorry, but no</button></div>
            <br></br>
            <div class="button-right">
              <button onClick= {() => this.handleShow(cat)}type="button" className="btn btn-outline-danger">Edit Cat</button></div>
            </ListGroupItem>
          )
      })} </ListGroup>
        </Col>
      </Row>
      <Modal show={this.state.show} onHide={this.handleClose}>
           <Modal.Header closeButton>
             <Modal.Title>{this.state.cat.name}</Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <Form onSubmit= {this.handleCatSubmit}>
           <label id= "enjoys">Enjoys:</label><FormControl
               type="text"
               name="enjoys"
               onChange={this.handleEditCat}
               value={this.state.editForm.enjoys}
           /><br/> <div class= "createButton">
           <button type="submit" class="btn btn-secondary">Save Changes</button>
               </div>
           </Form>
           </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={this.handleClose}>
               Close
             </Button>
           </Modal.Footer>
         </Modal>

	</Container>

    );
  }
}

export default Cats;
