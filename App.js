import React from 'react';
import ReactDOM from 'react-dom/client';



//Scenario : Building a react app without using cdn links and importing react and react dom

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam h1"),
    React.createElement("h2", {}, "Imported React and ReactDom modules"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam h1"),
    React.createElement("h2", {}, "Iam h2"),
  ]),
]);

// const heading = React.createElement("h1", { id : "heading" , xyz : "abc"}, "Hello World From React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
