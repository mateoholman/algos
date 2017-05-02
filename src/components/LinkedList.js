import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

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

  render() {
    return (
      <div>
        <h1>LinkedList</h1>
        <form>
          <FormGroup>
          <ControlLabel>List Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.ListNameValue}
            placeholder="Enter List Name"
            onChange={this.handleChange.bind(this)}
          />
          <Button bsStyle="info">New Linked List</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default LinkedList;
