//1st way 
// const root = document.getElementById('root');
// root.innerHTML = '<h1> Hello world </h1>';

// 2nd way 
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world again";

// const root = document.getElementById("root");
// root.appendChild(heading);

// now when we install react and react-dom using npm, we can import them in our app.js file and use them to create our react code

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div', {id: 'parent'}, React.createElement('div', {id: 'child'}, [React.createElement("h1",{}, "I am heading"), React.createElement("h2",{}, "I am heading 2")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



// const heading = React.createElement("h1",{id : "heading", xyz: "value"}, 'Hello world with react');

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);