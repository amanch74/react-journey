import React from "react";

class UserClass extends React.Component {

    constructor(props) {

        super(props);
        console.log(this.props.name + "Child Constructor is called");
        this.state = {
            userInfo: {
                login: "Dummy",
                type: "Default",
                avatar_url: "https://dummy-img"
            }
        }

    }

    async componentDidMount() {
        console.log(this.props.name + "Child componentDidMount is called");
        const data = await fetch("https://api.github.com/users/amanch74");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        });
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate is called");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount is called")
    }

    render() {

        console.log(this.props.name + "Child Render is called");

        // const { count2 } = this.state;

        const { login, type, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2> Name: {login} </h2>
                <p> type: {type}</p>
                <img className="avata" src={avatar_url}></img>
                <h4>Rating: 4.8/5</h4>
            </div>
        )
    }
}

export default UserClass;

// this.state = {
//             count: 0,
//             // count2 : 1
//         }


// {/* <h1>Count: {this.state.count}</h1>
// {/* <h1>Count2: {count2}</h1> */ }
// <button onClick={() => {
//     //Never update count directly
//     this.setState({
//         count: this.state.count + 1,
//         // count2 : count2 +1,
//     })
// }}>Increase count</button> */}


// why  do we need to call super() in constructor of class-based component? Ans: We need to call super() in the constructor of a class-based component to ensure that the parent class (React.Component) is properly initialized. This allows us to access the 'this' keyword and use it to set state, bind methods, and access props within our component. Without calling super(), we would not be able to use 'this' in our component, which would lead to errors when trying to access props or state.

// state is declared in the constructor of a class-based component and it is an object that holds the data that can change over time. It is used to manage the dynamic behavior of the component and to trigger re-rendering when the state changes. In contrast, in functional components, we use the useState hook to manage state, which allows us to declare state variables and update them without needing a constructor or class syntax.