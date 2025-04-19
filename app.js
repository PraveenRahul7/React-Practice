import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "RCB is going to win IPL 2025"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "RCB is going to dominate IPL 2025"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("obj : " + root);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Welcome to React!"
);
console.log(heading);
root.render(parent);
console.log(parent);
