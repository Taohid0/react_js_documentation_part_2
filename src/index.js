import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <h1>Hello,world!</h1>,
    document.getElementById("root")
);

function formatName(user) {
    return user.firstName+" "+user.lastName;
}
const user = {
    firstName:"Harper",
    lastName:"Perez"
};
const userDemo=undefined;

const element =(
    <h1>
        Hello, {formatName(user)}!
    </h1>
);
ReactDOM.render(
    element,document.getElementById("root")
);

function getGreeting(user) {
    if(user!==undefined)
    {
        return <h1>Hello ,{formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger</h1>
}
ReactDOM.render(
    getGreeting(userDemo),
    document.getElementById("root")
);

const element1 = React.createElement(
    "h1",
    {className:"gretting"},
    "hello world again!"
);

ReactDOM.render(
    element1,
    document.getElementById("root")
);

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>
                It is {" "}
                {new Date().toLocaleTimeString()}.
            </h2>
        </div>
    )
ReactDOM.render(
    element,
    document.getElementById("root")
);
}
setInterval(tick,1000)

function Welcome(props) {
    return <h1> hello {props.name}</h1>;
}
const element2 = <Welcome name = "sara"/>;
ReactDOM.render(element2,
    document.getElementById("root"));

function App()
{
    return(
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    );
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);