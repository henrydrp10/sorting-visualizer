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
    let {array} = this.state;
    const nodes = document.getElementsByClassName("node");
    console.log(nodes);
    let animations = bubbleSort(array);
    
    for (let index = 0; index < animations.length; index++) {

      if (animations[index].mode === 0) {
        setTimeout(() => {

          // Change color to highlight comparison
          nodes[animations[index].indices[0]].style.backgroundColor = "lightgreen";
          nodes[animations[index].indices[1]].style.backgroundColor = "lightgreen";

        }, index * 150);
      } else if (animations[index].mode === 1) {
        setTimeout(() => {

          // Visually changing the values
          let oldValue = nodes[animations[index].indices[0]].innerHTML;
          nodes[animations[index].indices[0]].innerHTML = nodes[animations[index].indices[1]].innerHTML;
          nodes[animations[index].indices[1]].innerHTML = oldValue;


          // Color them back to main color
          nodes[animations[index].indices[0]].style.backgroundColor = "yellow";
          nodes[animations[index].indices[1]].style.backgroundColor = "yellow";

        }, index * 150);
      } else {
        setTimeout(() => {
          
          // Color the back to clear the comparison
          nodes[animations[index].indices[0]].style.backgroundColor = "powderblue";
          nodes[animations[index].indices[1]].style.backgroundColor = "powderblue";

        }, index * 150);
      }
    }

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

