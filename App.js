// create react element here

const heading = React.createElement("h1", { id: "title" }, "Namaste");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing the react element inside root
root.render(heading);