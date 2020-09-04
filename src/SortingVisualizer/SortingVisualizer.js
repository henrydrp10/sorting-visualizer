import React, { Component } from 'react';
import './SortingVisualizer.css';

export class SortingVisualizer extends Component {

  state = {
    array: []
  };

  componentDidMount() {
    this.generateArray();
  }

  generateArray() {

      const array = [];
      for (let i = 0; i < 15; i++) {
        array.push(Math.ceil(Math.random() * 50));
      }
      this.setState({array});

  }

  bubbleSort() {
    const {array} = this.state;

  }

  insertionSort() {
    const {array} = this.state;

  }

  quickSort() {
    const {array} = this.state;

  }

  mergeSort() {
    const {array} = this.state;

  }


  render() {

    const {array} = this.state;

    return (
      <div className="app-div">
        <div className="array-div">
          {array.map((value, idx) => (
            <div className="node" key={idx}>{value}</div>
          ))}
        </div>
        <div className="buttons-div">
          <button onClick={() => this.generateArray()}>Generate New Array</button>
          <button>Bubble Sort</button>
          <button>Insertion Sort</button>
          <button>Quick Sort</button>
          <button>Merge Sort</button>
        </div>
        
      </div>   
    )
  }
}

export default SortingVisualizer;

