import React, { Component } from 'react';

class LinkedListObj extends Component {
  constructor() {
    super();

    this.state = {
        listName: '',
        numNodes: 0,
        currentLL: [],
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

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.listName);
    console.log(this.state.numNodes);
    const ll = new LinkedList();
    console.log(ll);
    ll.head = 1;
    console.log(ll.head);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default LinkedList;
