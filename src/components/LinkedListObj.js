import React, { Component } from 'react';

class LinkedListObj extends Component {
  constructor(props) {
    super(props);

    this.state = {
        listName: this.props.listName,
        numNodes: this.props.numNodes
    };
  }

  //Our LinkedList constructor
  LinkedList() {
    this.head = null;
    this.tail = null;
    this.sayHi = function () {
      console.log('Hi!');
    }
  }

  //Our Node constructor
  Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  render() {
    return (
      <div>
        <p>List Name: {this.state.listName}</p>
        <p>Number of Nodes in the list: {this.state.numNodes}</p>
      </div>
    );
  }
}

export default LinkedListObj;
