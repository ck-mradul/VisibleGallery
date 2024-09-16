// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Selector from "./components/Selector";
// import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <Selector />
    </div>
  );
}

// export function renderGallery(selector, id) {
//   const container = document.querySelector(selector);

//   if (container) {
//     // ReactDOM.render(<Selector id={id} />, container);
//     const root = createRoot(container);
//     root.render(<Selector id={id} />);
//   } else {
//     console.error("Container element not found");
//   }
// }

export default App;
