import React, { Component } from 'react';
import $ from "jquery";
import './SortingVisualizer.css';
import { bubbleSort } from '../SortingAlgorithms/BubbleSort';
import { insertionSort } from '../SortingAlgorithms/InsertionSort';
import { quickSortCall } from '../SortingAlgorithms/QuickSort';
import { mergeSort } from '../SortingAlgorithms/MergeSort';

const ALGO_SPEED = 100;

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
          nodes[animations[index].indices[0]].style.backgroundColor = "transparent";
          nodes[animations[index].indices[1]].style.backgroundColor = "transparent";

        }, (index + 1) * ALGO_SPEED);

      } else if (animations[index].mode === 1) {

        setTimeout(() => {

          // Visually changing the values
          let oldValue = nodes[animations[index].indices[0]].innerHTML;
          nodes[animations[index].indices[0]].innerHTML = nodes[animations[index].indices[1]].innerHTML;
          nodes[animations[index].indices[1]].innerHTML = oldValue;


          // Highlight the swap
          nodes[animations[index].indices[0]].style.backgroundColor = "yellow";
          nodes[animations[index].indices[1]].style.backgroundColor = "yellow";

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          // Color the back to clear the comparison
          nodes[animations[index].indices[0]].style.backgroundColor = "transparent";
          nodes[animations[index].indices[1]].style.backgroundColor = "transparent";

        }, (index + 1) * ALGO_SPEED);
 
      }
    }

  }

  insertionSort() {
    let {array} = this.state;
    const nodes = document.getElementsByClassName("node");
    let initialLength = nodes.length;
    let animations = insertionSort(array);


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
            'top': `${position.top - 45}px`,
            'width': `${$(nodes[animations[index].indices[0]]).width()}px`
          });

          $(".array-div").append(clonedPivot);

        }, index * ALGO_SPEED);

      } else if (animations[index].mode === 1) {

        setTimeout(() => {

          // Change color to highlight comparison
          nodes[animations[index].indices[0] + (initialLength - 1)].style.backgroundColor = "lightgreen";
          nodes[animations[index].indices[1]].style.backgroundColor = "lightgreen";

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          // Color the back to clear the comparison
          nodes[animations[index].indices[1]].style.backgroundColor = "transparent";

        }, (index + 1) * ALGO_SPEED);
        
      } else if (animations[index].mode === 2) {

        setTimeout(() => {
          
          nodes[animations[index].indices[0]].style.backgroundColor = "yellow";
          nodes[animations[index].indices[0] + 1].style.backgroundColor = "yellow";
          nodes[animations[index].indices[0] + 1].innerHTML = nodes[animations[index].indices[0]].innerHTML;
          nodes[animations[index].indices[0]].innerHTML = "";

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          nodes[animations[index].indices[0]].style.backgroundColor = "transparent";
          nodes[animations[index].indices[0] + 1].style.backgroundColor = "transparent";

        }, (index + 1) * ALGO_SPEED);
        
      } else if (animations[index].mode === 3) {

        setTimeout(() => {
          
          nodes[animations[index].indices[0]].style.backgroundColor = "orange";
          nodes[animations[index].indices[1] + (initialLength - 1)].style.backgroundColor = "orange";
          nodes[animations[index].indices[0]].innerHTML = nodes[animations[index].indices[1] + (initialLength - 1)].innerHTML;

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          nodes[animations[index].indices[0]].style.backgroundColor = "transparent";
          $(nodes[animations[index].indices[1] + (initialLength - 1)]).hide();

        }, (index + 1) * ALGO_SPEED);

      }
      
    }
  }

  quickSort() {
    let {array} = this.state;
    const nodes = document.getElementsByClassName("node");
    let animations = quickSortCall(array);
    let newLeftPivot = null;
    let newRightPivot = null;

    for (let index = 0; index < animations.length; index++) {

      if (animations[index].mode === 0) {

        setTimeout(() => {

          // Choosing the node at the end as the pivot to be placed in the final spot
          nodes[animations[index].indices[0]].style.backgroundColor = "orange";
          
        }, index * ALGO_SPEED);

      } else if (animations[index].mode === 1) {

        setTimeout(() => {
          
          // Left pivot
          if (newLeftPivot && newLeftPivot.style.backgroundColor !== "orange") {
            newLeftPivot.style.backgroundColor = "transparent";
          }
          nodes[animations[index].indices[0]].style.backgroundColor = "lightskyblue";
          newLeftPivot = nodes[animations[index].indices[0]];

        }, index * ALGO_SPEED);
        
      } else if (animations[index].mode === 2) {
        
        setTimeout(() => {
          
          // Right pivot
          if (newRightPivot && newRightPivot.style.backgroundColor !== "orange") {
            newRightPivot.style.backgroundColor = "transparent";
          }
          nodes[animations[index].indices[0]].style.backgroundColor = "darksalmon";
          newRightPivot = nodes[animations[index].indices[0]];

        }, index * ALGO_SPEED);

      } else if (animations[index].mode === 3) {
        
        setTimeout(() => {

          // Visually changing the values
          let oldValue = nodes[animations[index].indices[0]].innerHTML;
          nodes[animations[index].indices[0]].innerHTML = nodes[animations[index].indices[1]].innerHTML;
          nodes[animations[index].indices[1]].innerHTML = oldValue;

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          // Color the back to clear the comparison
          // nodes[animations[index].indices[0]].style.backgroundColor = "transparent";
          // nodes[animations[index].indices[1]].style.backgroundColor = "transparent";

        }, (index + 1) * ALGO_SPEED);

      } else if (animations[index].mode === 4) {

        setTimeout(() => {

          // Visually changing the values
          let oldValue = nodes[animations[index].indices[0]].innerHTML;
          nodes[animations[index].indices[0]].innerHTML = nodes[animations[index].indices[1]].innerHTML;
          nodes[animations[index].indices[1]].innerHTML = oldValue;

          nodes[animations[index].indices[0]].style.backgroundColor = "orange";
          nodes[animations[index].indices[1]].style.backgroundColor = "transparent";

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          // Color the back to clear the comparison
          nodes[animations[index].indices[0]].style.backgroundColor = "transparent";
          nodes[animations[index].indices[1]].style.backgroundColor = "transparent";

        }, (index + 1) * ALGO_SPEED);
        
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
            'top': `${position.top - 45}px`,
            'width': `${$(nodes[animations[index].indices[0]]).width()}px`
          });

          $(".array-div").append(clonedPivot);

          nodes[animations[index].indices[0]].style.backgroundColor = "transparent";

          if (newLeftPivot) {
            newLeftPivot.style.backgroundColor = "transparent";
          }
          
          if (newRightPivot) {
            newRightPivot.style.backgroundColor = "transparent";
          }

        }, (index + 1) * ALGO_SPEED);

      }
      
    }
  }

  mergeSort() {
    
    let {array} = this.state;
    const nodes = document.getElementsByClassName("node");
    let initialLength = nodes.length;
    let animations = mergeSort(array, 0, array.length - 1);

    for (let index = 0; index < initialLength; index++) {
      
      var rect = nodes[index].getBoundingClientRect();

          var position = {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
          };

          var clonedPivot = nodes[index].cloneNode(true);
          clonedPivot.innerHTML = "";
          $(clonedPivot).css({
            'position': "absolute",
            'left': `${position.left - 3}px`,
            'top': `${position.top - 45}px`,
            'height': `${$(nodes[index]).height()}px`,
            'width': `${$(nodes[index]).width()}px`
          });

          $(".array-div").append(clonedPivot);

    }

    for (let index = 0; index < animations.length; index++) {

      if (animations[index].mode === 0) {
      
        setTimeout(() => {
          
          for (let index = initialLength; index < nodes.length; index++) {
            nodes[index].innerHTML = "";
          }

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          for (let sortIndex = animations[index].indices[0]; sortIndex <= animations[index].indices[1]; sortIndex++) {
            nodes[sortIndex + initialLength].innerHTML = nodes[sortIndex].innerHTML;
          }

        }, (index + 1) * ALGO_SPEED);

      } else if (animations[index].mode === 1) {

        setTimeout(() => {

          // Change color to highlight comparison
          nodes[animations[index].indices[0] + initialLength].style.backgroundColor = "lightgreen";
          nodes[animations[index].indices[1] + initialLength].style.backgroundColor = "lightgreen";

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          // Color the back to clear the comparison
          nodes[animations[index].indices[0] + initialLength].style.backgroundColor = "transparent";
          nodes[animations[index].indices[1] + initialLength].style.backgroundColor = "transparent";

        }, (index + 1) * ALGO_SPEED);
        
      } else if (animations[index].mode === 2) {

        setTimeout(() => {
          
          nodes[animations[index].indices[0]].style.backgroundColor = "yellow";
          nodes[animations[index].indices[1] + initialLength].style.backgroundColor = "yellow";
          nodes[animations[index].indices[0]].innerHTML = nodes[animations[index].indices[1] + initialLength].innerHTML;
          nodes[animations[index].indices[1] + initialLength].innerHTML = "";

        }, index * ALGO_SPEED);

        setTimeout(() => {
          
          nodes[animations[index].indices[0]].style.backgroundColor = "transparent";
          nodes[animations[index].indices[1] + initialLength].style.backgroundColor = "transparent";

        }, (index + 1) * ALGO_SPEED);

      } 
      
    }

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
          <button onClick={() => this.refreshPage()}>Generate New Array</button>
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

