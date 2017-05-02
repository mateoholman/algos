import React, { Component } from 'react';

class LinkedList extends Component {

  //Our LinkedList constructor
  function LinkedList() {
    this.head = null;
    this.tail = null;
  }

  //Our Node constructor
  function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  render() {
    return (
      <div>
        <h1>LinkedList</h1>
        <p>LinkedList...</p>
      </div>
    );
  }
}

export default LinkedList;
