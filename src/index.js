import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Redirect, Router, Route, Link,Switch} from 'react-router-dom';
import { Provider } from 'react-router-redux';
import './app.css';
class Home extends React.Component {
    render() {
        return ( <div className="App">
            <Switch>
                <Route path="/login" exact render={(({location}) => (<h1>来玩啊，小帅哥</h1>)) } />
                <Route path="/" render={(({location}) => (<h1>来玩啊，小帅哥321</h1>)) } />
            </Switch>
        </div>)
    }
}
class LoginContainer extends React.Component {
    render() {
        return (<div>niha</div>)
    }
}
ReactDOM.render(<BrowserRouter>
    <Provider>
        <div>
            <Switch>
                <Route exact path="/" component={LoginContainer}/>
                <Route path="/home" component={Home}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    </Provider>
</BrowserRouter>, document.getElementById('root'));
