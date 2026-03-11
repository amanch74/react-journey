// import UserClass from "./UserClass";
import React from "react";

// Lifecylce of a React Component

// * Constructor
// * Render
// * componentDidMount

class About extends React.Component {

    constructor(props) {
        console.log("Parent Constructor is called");
        super(props);

        
    }

    componentDidMount() {
        console.log("Parent componentDidMount is called");
        //Api call
    }


    render() {
        console.log("Parent Render is called");
        return <div>
            <h1>About us</h1>
            <div> We are a team of passionate developers </div>
            {/* <User name="Aman Choudhary(functional)" /> */}
            {/* <UserClass name="Akshay Saini(class-based)" /> */}
            {/* <UserClass name={"Elon Musk(class-based)"} /> */}
        </div>
    }
}

// const About = () =>{
//     return <div>
//         <h1>About us</h1>
//         <div> We are a team of passionate developers </div>
//         <User name="Aman Choudhary(functional)" />
//         <UserClass name="Akshay Saini(class-based)" />
//     </div>
// }

export default About;

/*
first react calls the constructor and render of each child component and then it calls the componentDidMount of each child component and then parent component. React optimizes the DOM updatio in a single flow there it do componentDidMount altogether.

there are two phases in the lifecycle of a React component
-Render phase 
-Commit phase

In the render phase, React calls the render method of each component and creates a virtual DOM tree. In the commit phase, React updates the actual DOM based on the changes in the virtual DOM tree. During the commit phase, React also calls the componentDidMount lifecycle method for each component that has been rendered.

Parent Constructor is called
About.js:27 Parent Render is called
UserClass.js:10 Akshay Saini(class-based)Child Constructor is called
UserClass.js:23 Akshay Saini(class-based)Child Render is called
UserClass.js:10 Elon Musk(class-based)Child Constructor is called
UserClass.js:23 Elon Musk(class-based)Child Render is called
UserClass.js:18 Akshay Saini(class-based)Child componentDidMount is called
UserClass.js:18 Elon Musk(class-based)Child componentDidMount is called
About.js:21 Parent componentDidMount is called

*/
