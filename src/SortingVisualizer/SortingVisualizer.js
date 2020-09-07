import React, { Component } from 'react';
import './SortingVisualizer.css';
import { bubbleSort } from '../SortingAlgorithms/BubbleSort';
import { insertionSort } from '../SortingAlgorithms/InsertionSort';
import { quickSort } from '../SortingAlgorithms/QuickSort';
import { mergeSort } from '../SortingAlgorithms/MergeSort';

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
    this.setState(bubbleSort(this.state.array));
  }

  insertionSort() {
    this.setState(insertionSort(this.state.array));
  }

  quickSort() {
    this.setState(quickSort(this.state.array, 0, this.state.array.length - 1));
  }

  mergeSort() {
    this.setState(mergeSort(this.state.array, 0, this.state.array.length - 1));
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
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
        </div>  
      </div>   
    )
  }
}

export default SortingVisualizer;

