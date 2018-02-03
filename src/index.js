import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//     <h1>Hello,world!</h1>,
//     document.getElementById("root")
// );
//
// function formatName(user) {
//     return user.firstName+" "+user.lastName;
// }
// const user = {
//     firstName:"Harper",
//     lastName:"Perez"
// };
// const userDemo=undefined;
//
// const element =(
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );
// ReactDOM.render(
//     element,document.getElementById("root")
// );
//
// function getGreeting(user) {
//     if(user!==undefined)
//     {
//         return <h1>Hello ,{formatName(user)}!</h1>
//     }
//     return <h1>Hello, Stranger</h1>
// }
// ReactDOM.render(
//     getGreeting(userDemo),
//     document.getElementById("root")
// );
//
// const element1 = React.createElement(
//     "h1",
//     {className:"gretting"},
//     "hello world again!"
// );
//
// ReactDOM.render(
//     element1,
//     document.getElementById("root")
// );
//
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>
//                 It is {" "}
//                 {new Date().toLocaleTimeString()}.
//             </h2>
//         </div>
//     )
// ReactDOM.render(
//     element,
//     document.getElementById("root")
// );
// }
// //setInterval(tick,1000)
//
// function Welcome(props) {
//     return <h1> hello {props.name}</h1>;
// }
// const element2 = <Welcome name = "sara"/>;
// ReactDOM.render(element2,
//     document.getElementById("root"));
//
// function App()
// {
//     return(
//         <div>
//             <Welcome name="Sara"/>
//             <Welcome name="Cahal"/>
//             <Welcome name="Edite"/>
//         </div>
//     );
// }
// ReactDOM.render(
//     <App/>,
//     document.getElementById("root")
// );
//
// function formatDate(date) {
//     return date.toLocaleDateString();
// }
//
// function Avatar(props) {
//     return (
//         <img
//             className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     );
// }
//
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }
//
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <UserInfo user={props.author} />
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
//
// const comment = {
//     date: new Date(),
//     text:
//         'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl:
//             'http://placekitten.com/g/64/64',
//     },
// };
// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('root')
// );
// function Clock2(props)
// {
//     return(
//         <div>
//             <h1>Hello, world again and again!</h1>
//             <h2>It is {props.date2.toLocaleString()}</h2>
//         </div>
//     );
// }
// function tick2() {
//     ReactDOM.render(
//         <Clock2 date2 = {new Date()}/>,
//         document.getElementById("root")
//     );
// }
// //setInterval(tick2,1000);
//
// class Clock3 extends React.Component{
//
//     constructor(props)
//     {
//         super(props);
//         this.state = {date:new Date()};
//     }
//
//     componentDidMount()
//     {
//         this.timerID = setInterval(()=> this.tick(),1000);
//     }
//     componenWillUnmount()
//     {
//         clearInterval(this.timerID);
//     }
//     tick()
//     {
//         this.setState(
//             {
//                 date:new Date()
//             }
//         );
//     }
//     render()
// {
//     return(
//         <div>
//     <h1>Hello world third time!</h1>
//         <h2> It is {this.state.date.toLocaleString()}</h2>
//         </div>
//             );
// }
// }
//
// ReactDOM.render(
//     <Clock3/>,
//     document.getElementById("root")
// );
//
//
// class Toggle extends React.Component{
// constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//
//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
// }
//
// handleClick() {
//     this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//     }));
// }
//
// render() {
//     return (
//         <button onClick={this.handleClick}>
//             {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//     );
// }
// }
//
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );
//
// function UserGreeting(props)
// {
//     return <h1>Welcome back!</h1>;
// }
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>
// }
//
// function Greeting(props)
// {
//     const isLoggedIn = props.isLoggedIn;
//
//     if(isLoggedIn)
//     {
//         return <UserGreeting/>;
//     }
//     return <GuestGreeting/>;
// }
//
// ReactDOM.render(
//     <Greeting isLoggedIn={true}/>,
//     document.getElementById("root")
// );
//
// function LoginButton(props)
// {
//     return(
//         <button onclick={props.onClick}>
//             Login
//         </button>
//     );
// }
//
// function LogoutButton(props)
// {
//     return(
//         <button onClick = {props.onClick}>
//             Logout
//         </button>
//     );
// }
//
// class LoginControl extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn:false};
//     }
//     handleLoginClick()
//     {
//         this.setState({isToggledIn:true});
//     }
//     handleLogoutClick()
//     {
//         this.setState({isLoggedIn:false});
//     }
//     render()
//     {
//         const isLoggedIn = this.state.isLoggedIn;
//
//         let button=null;
//
//         if(isLoggedIn)
//         {
//             button =<LogoutButton onClick={this.handleLogoutClick}/>;
//         }
//         else
//         {
//             button = <LoginButton onClick={this.handleLoginClick}/>;
//         }
//         return(
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn}/>
//                 {button}
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <LoginControl/>,
//     document.getElementById("root")
// );

class NameForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({value:event.target.value});
    }
    handleSubmit(event)
    {
        alert("A name was submitted: "+this.state.value);
        event.preventDefault();
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name :
                    <input type="text" value={this.state.value}
                    onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
ReactDOM.render(
    <NameForm/>,
    document.getElementById("root")
);

class EssayForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            value: "Please write an essay" +
            " about your favourite DOM eliment"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({value:event.target.value});
    }
    handleSubmit(eveent)
    {
        alert("An essay was submitted : "+this.state.value);
        eveent.preventDefault();
    }
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>

            <label>
                Essay:
              <textarea value={this.state.value}
              onChange={this.handleChange}></textarea>
        </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}
ReactDOM.render(
    <EssayForm/>,
    document.getElementById("root")
);

