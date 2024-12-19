import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(after render)

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(after render)

const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React🚀
  </h1>
);

// React Functional Component
const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>;
};

const HeadingComponent2 = () => (
  <h1 className="heading">Namaste React Functional Component2</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />);

