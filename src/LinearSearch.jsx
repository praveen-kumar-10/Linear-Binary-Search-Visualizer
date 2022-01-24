// import React, { useState } from "react";

// // import { ReactComponent as Arrow } from "./assets/arrow.svg";
// import Arrow from "./assets/arrow.svg";

// import "./App.css";

// const App = () => {
//   const [elements, setElements] = useState([]);
//   const [element, setElement] = useState("");
//   const [keyElement, setKeyElement] = useState("");
//   var arr = document.getElementById("array");

//   const onInputChange = (event) => {
//     setElement(event.target.value);
//   };

//   const onKeyEleChange = (event) => {
//     setKeyElement(event.target.value);
//   };

//   const addElement = (e) => {
//     e.preventDefault();
//     if (element !== 0) {
//       setElements((prevElements) => [...prevElements, parseInt(element)]);
//       setElement("");
//       let ele = document.createElement("div");
//       ele.innerText = element;
//       ele.style.width = "50px";
//       ele.style.height = "50px";
//       ele.style.border = "2px solid #717d95";
//       ele.setAttribute("class", "ele");
//       ele.setAttribute("id", elements.length);
//       arr.appendChild(ele);
//     }
//   };

//   var shift = 15;
//   var pos = 0;
//   let arrow = document.getElementById("arrow");

//   const linearSearch = (key) => {
//     let item = document.getElementById(pos);
//     // console.log(item.offsetLeft);
//     arrow.style.display = "block";
//     arrow.style.left = shift + "px";
//     shift += 54;
//     // console.log(item);

//     if (key !== elements[pos]) {
//       console.log("position" + pos);
//       item.style.background = "red";
//       pos += 1;
//     } else {
//       item.style.background = "green";
//       stopInterval();
//     }
//   };

//   var interval;
//   const searchElement = () => {
//     var key = parseInt(keyElement);
//     setKeyElement("");
//     interval = setInterval(() => {
//       linearSearch(key);
//     }, 1000);
//   };

//   function stopInterval() {
//     clearInterval(interval);
//   }

//   return (
//     <div className="App">
//       <h3>Enter elements to insert into array</h3>
//       <form>
//         <input type="number" value={element} onChange={onInputChange} />
//         <button className="btn" onClick={addElement}>
//           Add
//         </button>
//       </form>
//       <div id="array">
//         <img id="arrow" src={Arrow} />
//       </div>

//       <input type="number" value={keyElement} onChange={onKeyEleChange} />
//       <button className="btn" onClick={searchElement}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default App;
