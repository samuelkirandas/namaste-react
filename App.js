const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi H1"),
    React.createElement("h2", {}, "hi H2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi H1"),
    React.createElement("h2", {}, "hi H2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
