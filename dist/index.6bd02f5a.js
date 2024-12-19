//Scenario : Creating tags using react and rendering it
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Iam h1"),
        React.createElement("h2", {}, "Iam h2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Iam h1"),
        React.createElement("h2", {}, "Iam h2")
    ])
]);
// const heading = React.createElement("h1", { id : "heading" , xyz : "abc"}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
