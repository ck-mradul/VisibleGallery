// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import Selector from "./components/Selector";

// export function renderGallery(selector, id) {
//   console.log("Rendering gallery with ID456:", id);
//   const container = document.querySelector(selector);
//   if (container) {
//     console.log("Rendering gallery with ID123:", id);

//     const root = ReactDOM.createRoot(container);
//     root.render(<Selector id={id} />);

//     // ReactDOM.render(<Selector id={id} />, container);
//   } else {
//     console.error("Container element not found for selector:", selector);
//   }
// }
// window.renderGallery = renderGallery;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Selector from "./components/Selector";

export function RenderGallery({ selector = "", id = 4 }) {
  // const container = document.querySelector(selector);
  // if (container) {

  // const root = ReactDOM.createRoot(container);
  // root.render(<Selector id={id} />);
  return <Selector id={id} />;
  // ReactDOM.render(<Selector id={id} />, container);
  // } else {
  //   console.error("Container element not found for selector:", selector);
  // }
}
// window.renderGallery = renderGallery;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RenderGallery />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
