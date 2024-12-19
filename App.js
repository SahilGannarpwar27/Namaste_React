import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(after render)

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(after render)

//Scenario : Component Composition

const element = <span>React Element </span>;

const Title = () => (
  <h1 id="heading" className="head">
    {element}
    Namaste React using JSX🚀
  </h1>
);

// React Functional Component


const HeadingComponent = () => (

  <div id="container">
    <Title />
    
    <h1 className="heading">Namaste React Functional Component</h1>

  </div>
  
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />);

