import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import MockBrowser from './mock-browser'
import AuthorizedRoute from './AuthorizedRoute'
import store from './store'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import PrimaryLayout from './layouts/PrimaryLayout'
import './app.css';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {DatePicker} from 'antd';
const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

// ** See notes on this `<App>` component at the bottom of this file **
const App = props => (
    <Provider>
        <BrowserRouter>
            <div>
                <MockBrowser />
                <Switch>
                    <Route path="/auth" component={UnauthorizedLayout} />
                    <AuthorizedRoute path="/app" component={PrimaryLayout} />
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
