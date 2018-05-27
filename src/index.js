import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Redirect, Router, Route, Link, Switch} from 'react-router-dom';
import './app.css';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}
class Home extends React.Component {
    render() {
        return (<div>
            <ul>
                <li><Link to="/login">登录</Link></li>
                <li><Link to="/register">注册</Link></li>
            </ul>
            <div>
                <DatePicker onChange={onChange} />
                <br />
                <MonthPicker onChange={onChange} placeholder="Select month" />
                <br />
                <RangePicker onChange={onChange} />
                <br />
                <WeekPicker onChange={onChange} placeholder="Select week" />
            </div>
        </div>)
    }
}

class LoginContainer extends React.Component {
    render() {
        return (<div>登录</div>)
    }
}

class Register extends React.Component {
    render() {
        return (<div>注册</div>)
    }
}

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </div>
        </BrowserRouter>
    </LocaleProvider>
            , document.getElementById('root'));
