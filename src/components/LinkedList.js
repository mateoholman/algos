import React, { Component } from 'react';
import { Col, Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class LinkedList extends Component {
  constructor() {
    super();

    this.state = {
        listName: '',
    };
  }

  //Our LinkedList constructor
  LinkedList() {
    this.head = null;
    this.tail = null;
  }

  //Our Node constructor
  Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  handleChange(e) {
    this.setState({ listName: e.target.value });
  }

  createLinkedList(listInfo){
    console.log(listInfo);
  }

  render() {
    return (
      <div>
        <h1>LinkedList</h1>
        <Form horizontal>
          <FormGroup controlId="listName">
            <Col componentClass={ControlLabel} sm={2}>
              List Name
            </Col>
            <Col sm={4}>
              <FormControl
                type="text"
                value={this.state.ListNameValue}
                placeholder="Enter List Name"
                onChange={this.handleChange.bind(this)}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="numNodes">
            <Col componentClass={ControlLabel} sm={2}>
              # of Nodes
            </Col>
            <Col sm={4}>
              <FormControl componentClass="select" placeholder="1">
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
              <Button type="submit" onSubmit={this.createLinkedList.bind(this)}>
                Create
              </Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    );
  }
}

export default LinkedList;
