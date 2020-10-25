import React, { Component } from 'react';
import $ from "jquery";
import './SortingVisualizer.css';
import { bubbleSort } from '../SortingAlgorithms/BubbleSort';
import { insertionSort } from '../SortingAlgorithms/InsertionSort';
import { quickSort } from '../SortingAlgorithms/QuickSort';
import { mergeSort } from '../SortingAlgorithms/MergeSort';

const ALGO_SPEED = 500;

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

  refreshPage() {
    window.location.reload();
    return false;
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

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          // Color the back to clear the comparison
          nodes[animations[index].indices[0]].style.backgroundColor = "powderblue";
          nodes[animations[index].indices[1]].style.backgroundColor = "powderblue";

        }, (index + 1) * ALGO_SPEED);

      } else if (animations[index].mode === 1) {

        setTimeout(() => {

          // Visually changing the values
          let oldValue = nodes[animations[index].indices[0]].innerHTML;
          nodes[animations[index].indices[0]].innerHTML = nodes[animations[index].indices[1]].innerHTML;
          nodes[animations[index].indices[1]].innerHTML = oldValue;


          // Color them back to main color
          nodes[animations[index].indices[0]].style.backgroundColor = "yellow";
          nodes[animations[index].indices[1]].style.backgroundColor = "yellow";

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          // Color the back to clear the comparison
          nodes[animations[index].indices[0]].style.backgroundColor = "powderblue";
          nodes[animations[index].indices[1]].style.backgroundColor = "powderblue";

        }, (index + 1) * ALGO_SPEED);
 
      }
    }

  }

  insertionSort() {
    let {array} = this.state;
    const nodes = document.getElementsByClassName("node");
    let animations = insertionSort(array);

    console.log(nodes);


    for (let index = 0; index < animations.length; index++) {

      if (animations[index].mode === 0) {

        setTimeout(() => {
          var rect = nodes[animations[index].indices[0]].getBoundingClientRect();

          var position = {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
          };

          var clonedPivot = nodes[animations[index].indices[0]].cloneNode(true);
          $(clonedPivot).css({
            'position': "absolute",
            'left': `${position.left - 3}px`,
            'top': `${position.top}px`,
            'width': `${$(nodes[animations[index].indices[0]]).width()}px`
          });

          $(".array-div").append(clonedPivot);

          $(".node").last().css({
            "transform": "translate(0px, -45px)"
          });

        }, index * ALGO_SPEED);

      } else if (animations[index].mode === 1) {

        setTimeout(() => {

          // Change color to highlight comparison
          nodes[animations[index].indices[0] + 14].style.backgroundColor = "lightgreen";
          nodes[animations[index].indices[1]].style.backgroundColor = "lightgreen";

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          // Color the back to clear the comparison
          nodes[animations[index].indices[0] + 14].style.backgroundColor = "powderblue";
          nodes[animations[index].indices[1]].style.backgroundColor = "powderblue";

        }, (index + 1) * ALGO_SPEED);
        
      } else if (animations[index].mode === 2) {

        setTimeout(() => {
          
          nodes[animations[index].indices[0]].style.backgroundColor = "yellow";
          nodes[animations[index].indices[0] + 1].style.backgroundColor = "yellow";
          nodes[animations[index].indices[0] + 1].innerHTML = nodes[animations[index].indices[0]].innerHTML; 

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          nodes[animations[index].indices[0]].style.backgroundColor = "powderblue";
          nodes[animations[index].indices[0] + 1].style.backgroundColor = "powderblue";

        }, (index + 1) * ALGO_SPEED);
        
      } else if (animations[index].mode === 3) {

        setTimeout(() => {
          
          nodes[animations[index].indices[0]].style.backgroundColor = "yellow";
          nodes[animations[index].indices[1] + 14].style.backgroundColor = "yellow";
          nodes[animations[index].indices[0]].innerHTML = nodes[animations[index].indices[1] + 14].innerHTML;

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          nodes[animations[index].indices[0]].style.backgroundColor = "powderblue";
          nodes[animations[index].indices[1] + 14].style.backgroundColor = "powderblue";

        }, (index + 1) * ALGO_SPEED);

      }
      
    }
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
          <button onClick={() => this.refreshPage()}>Stop Algorithm</button>
        </div>  
      </div>   
    )
  }
}

export default SortingVisualizer;

