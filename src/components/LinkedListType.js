import React, { Component } from 'react';
import LinkedListObj from './LinkedListObj';
import { Col, Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class LinkedList extends Component {
  constructor() {
    super();

    this.state = {
        listName: '',
        numNodes: 0,
        currentLL: false,
    };
  }

  handleNameChange(e) {
    this.setState({ listName: e.target.value });
  }

  handleNodeChange(e) {
    this.setState({ numNodes: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.listName);
    console.log(this.state.numNodes);
    this.setState({ currentLL: true});
  }

  renderLinkedList() {
    //console.log(this.state.currentLL.length);
    if (this.state.currentLL) {
      return(
        <div>
        <h2>There is a Linked List!</h2>
        <LinkedListObj listName={this.state.listName} numNodes={this.state.numNodes} />
        </div>
      );
    }
    else {
      return(<h2>No Current Linked Lists</h2>);
    }
  }

  render() {
    return (
      <div>
        <h1>LinkedList</h1>
        <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="listName">
            <Col componentClass={ControlLabel} sm={2}>
              List Name
            </Col>
            <Col sm={4}>
              <FormControl
                type="text"
                value={this.state.ListNameValue}
                placeholder="Enter List Name"
                onChange={this.handleNameChange.bind(this)}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="numNodes">
            <Col componentClass={ControlLabel} sm={2}>
              # of Nodes
            </Col>
            <Col sm={4}>
              <FormControl componentClass="select" placeholder="1" onChange={this.handleNodeChange.bind(this)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={4}>
              <Button type="submit">
                Create
              </Button>
            </Col>
          </FormGroup>
        </Form>
        {this.renderLinkedList()}
      </div>
    );
  }
}

export default LinkedList;
