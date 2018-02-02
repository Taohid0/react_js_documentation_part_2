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

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text:
        'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl:
            'http://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
);
