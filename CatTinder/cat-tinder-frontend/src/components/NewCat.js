import React, { Component } from 'react'
import {FormControl, Form} from 'react-bootstrap'



class NewCat extends Component {
    constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      age: '',
      enjoys: ''
    }
  }
}


    handleSubmit = (e) => {
        e.preventDefault()
    this.props.submitNew(this.state.form)
    const form = {
      name: '',
      age: '',
      enjoys: ''
    }
    this.setState({form: form})
    }



  handleChange = (event) => {
    let {form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  render() {
    return (
        <div class= "newform"> <br/>
        <div class= "newcat"><h3>Create New Cat Profile</h3>  </div> <br/>
        <Form onSubmit= {this.handleSubmit}>
        <label id= "name">Name:</label><FormControl
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.form.name}
        />
        <label id= "age">Age:</label><FormControl
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.form.age}
        />
        <label id= "enjoys">Enjoys:</label><FormControl
            type="text"
            name="enjoys"
            onChange={this.handleChange}
            value={this.state.form.enjoys}
        /><br/> <div class= "createButton">
        <button type="submit" class="btn btn-secondary">Create Profile</button>
            </div>
        </Form>
        </div>
    );
  }
}

export default NewCat;
