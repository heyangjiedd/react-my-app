import React from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './app.css';
import { Layout, Menu, Breadcrumb,Icon ,DatePicker} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

const AddUsersPage = () => (
    <div>
        Add Users
    </div>
)

export default AddUsersPage