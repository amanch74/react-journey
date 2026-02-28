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
import { jsx } from "react/jsx-runtime";

// React.createElement => ReactElement - js object => htmlElement(render)

const parent = React.createElement(
    'div', {id: 'parent'}, React.createElement(
        'div', {id: 'child'}, [
            React.createElement("h1",{}, "I am heading"),
            React.createElement("h2",{}, "I am heading 2")
        ]
    )
);


// jsx - is not HTML inside js, it is a syntax extension which looks like HTML but it is not HTML, it is a syntax extension which allows us to write HTML like code in our js file and it will be converted to react code by babel

// jsx(transpiled before going to js engine) - done by parcel(package) uses->babel(package) to convert jsx code to react code which can be understood by js engine

// transpiling means converting code from one language to another language, in this case from jsx to react code

// jsxElement => Babel transpiles into React.createElement => ReactElement - js object => htmlElement(render)
const jsxHeading = <h1> Hello from jsx </h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

const number = 1000;// we can also use js expressions inside jsx by using curly braces {}
const element = <h1> The number is {number} </h1> // ReactElement

const TitleComponent = () => {
    
    return <div>
        <HeadingComponent />
        <HeadingComponent></HeadingComponent>
        {HeadingComponent()}
        {number + 200}
        {element}
        <h1> Hello from TitleComponent </h1>
    </div>
}

const HeadingComponent = () => (
    <h1> Hello from HeadingComponent </h1>
)

root.render(<TitleComponent />);



// const heading = React.createElement("h1",{id : "heading", xyz: "value"}, 'Hello world with react');

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);