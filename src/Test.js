import React, { useState } from "react";

import Arrow from "./assets/arrow.svg";
import "./App.css";

const App = () => {
  const [elements, setElements] = useState([]);
  const [element, setElement] = useState("");
  const [keyElement, setKeyElement] = useState("");
  var arr = document.getElementById("array");
  var lb = document.getElementById("lb");
  var ub = document.getElementById("ub");
  var md = document.getElementById("mid");
  var arrow = document.getElementById("arrow");
  var interval;

  const onInputChange = (event) => {
    setElement(event.target.value);
  };

  const onKeyEleChange = (event) => {
    setKeyElement(event.target.value);
  };

  const addElement = (e) => {
    e.preventDefault();
    if (element !== 0) {
      setElements((prevElements) => [...prevElements, parseInt(element)]);
      setElement("");
      let ele = document.createElement("div");
      ele.innerText = element;
      ele.style.width = "50px";
      ele.style.height = "50px";
      ele.style.border = "2px solid #717d95";
      ele.setAttribute("class", "ele");
      ele.setAttribute("id", elements.length);
      arr.appendChild(ele);
    }
  };

  var lowerBound = 0;
  var upperBound = elements.length - 1;
  var shift = 15;
  var lshift = 0;
  var ushift = 0;

  const linearSearch = () => {
    var key = parseInt(keyElement);
    let item = document.getElementById(pos);
    arrow.style.display = "block";
    arrow.style.left = shift + "px";
    shift += 54;

    if (key !== elements[pos]) {
      console.log("position" + pos);
      item.style.background = "red";
      pos += 1;
    } else {
      item.style.background = "green";
      stopInterval();
    }
  };

  const binarySearch = () => {
    var key = parseInt(keyElement);
    console.log(lowerBound, upperBound);
    lb.style.display = "block";
    ub.style.display = "block";
    md.style.display = "block";

    let lowerBoundEle = document.getElementById(lowerBound);
    console.log("lo" + lowerBoundEle.offsetLeft);
    lb.style.left = 15 + lowerBoundEle.offsetLeft + "px";

    let upperBoundEle = document.getElementById(upperBound);
    ub.style.left = 15 + upperBoundEle.offsetLeft + "px";
    console.log("uo" + upperBoundEle.offsetLeft);

    if (lowerBound > upperBound) {
      stopInterval();
    }
    let mid = Math.floor((lowerBound + upperBound) / 2);

    let midEle = document.getElementById(mid);
    md.style.left = 15 + midEle.offsetLeft + "px";

    console.log("mid " + mid);
    if (elements[mid] === key) {
      console.log("pos " + mid);
      document.getElementById(mid).style.background = "green";
      stopInterval();
    }
    if (elements[mid] > key) {
      upperBound = mid - 1;
    } else {
      lowerBound = mid + 1;
    }
  };

  const onLinearSearch = () => {
    setKeyElement("");
    interval = setInterval(() => {
      linearSearch();
    }, 1000);
  };

  const onBinarySearch = () => {
    setKeyElement("");
    interval = setInterval(() => {
      binarySearch();
    }, 1500);
  };

  function stopInterval() {
    clearInterval(interval);
  }

  return (
    <div className="App">
      <h3>Enter elements to insert into array</h3>
      <form>
        <input type="number" value={element} onChange={onInputChange} />
        <button className="btn" onClick={addElement}>
          Add
        </button>
      </form>
      <div id="array">
        <img id="arrow" src={Arrow} />
        <div id="lb">
          <img className="arrow" src={Arrow} />
          <p>lb</p>
        </div>
        <div id="mid">
          <img className="arrow" src={Arrow} />
          <p>mid</p>
        </div>
        <div id="ub">
          <img className="arrow" src={Arrow} />
          <p>ub</p>
        </div>
      </div>

      <input type="number" value={keyElement} onChange={onKeyEleChange} />
      <br />
      <button className="btn" onClick={onLinearSearch}>
        Linear Search
      </button>
      <button className="btn" onClick={onBinarySearch}>
        Binary Search
      </button>
    </div>
  );
};

export default App;
