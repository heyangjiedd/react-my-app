import React from 'react'
import {
    BrowserRouter,
    Route,
    Redirect,
    Link
} from 'react-router-dom'
import ReactDOM from "react-dom";

class BasicExample extends React.Component {
    render() {
        const match = this.props.match
        return (
            <div>
                <ul>
                    <li><Link to={`${match.url}/home`}>Home</Link></li>
                    <li><Link to={`${match.url}/about`}>About</Link></li>
                    <li><Link to={`${match.url}/topics`}>Topics</Link></li>
                </ul>

                <hr/>

                <Route exact path={`${match.url}/home`} component={Home}/>
                <Route path={`${match.url}/about`} component={About}/>
                <Route path={`${match.url}/topics`} component={Topics}/>
            </div>
        )
    }
}


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)
class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        )
    }
}
const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

const LoginPage = () => (
    <Link to={`/BasicExample`}>
        走你
    </Link>
);
const Login = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/BasicExample" component={BasicExample}/>
        </div>
    </BrowserRouter>
)
ReactDOM.render(<Login/>, document.getElementById('root'));