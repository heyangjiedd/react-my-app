import React from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './app.css';
import {Layout, Menu, Breadcrumb, Icon, DatePicker} from 'antd';
import {Switch, Route, Redirect,BrowserRouter,NavLink} from 'react-router-dom'
import ProductSubLayout from "./layouts/ProductSubLayout";
import UserSubLayout from "./layouts/UserSubLayout";
import AppHomePage from "./pages/AppHomePage";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;
const {MonthPicker, RangePicker, WeekPicker} = DatePicker;
function alertItem({ item, key, keyPath }){
    console.log(item)
    console.log(key)
    console.log(keyPath)
}
ReactDOM.render(
    <Layout>
        <Header className="header">
            <div style={{color: 'white', fontSize: '20px'}}>重庆智慧农业云平台</div>
        </Header>
        <Content style={{position: 'absolute', top: 64, bottom: 0, left: 0, right: 0}}>
            <Layout style={{height: '100%', padding: '24px 0', background: '#fff'}}>
                <Sider width={200} style={{background: '#fff'}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%'}}
                    >
                        <Menu.Item key="1">
                                <Icon type="desktop" to="/"/>
                                <span>首页</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="user"/>案件</span>}>
                            <Menu.Item key="21" to="/users">待办案件</Menu.Item>
                            <Menu.Item key="22">归档案件</Menu.Item>
                            <Menu.Item key="23">历史案件</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="user"/>管理</span>}>
                            <Menu.Item key="31">用户管理</Menu.Item>
                            <Menu.Item key="32">管理员管理</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4">
                            <Icon type="desktop"/>
                            <span>出警记录</span>
                        </Menu.Item>
                        <SubMenu key="sub3" title={<span><Icon type="notification"/>日志</span>}>
                            <Menu.Item key="50">用户操作</Menu.Item>
                            <Menu.Item key="51">管理员操作</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6">
                            <Icon type="desktop"/>
                            <span>权限设置</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{padding: '0 24px', minHeight: 280,}}>
                    <BrowserRouter>
                        <Switch>
                            <Route path={`/`} exact component={AppHomePage}/>
                            <Route path={`/users`} component={UserSubLayout}/>
                            <Route path={`/products`} component={ProductSubLayout}/>
                            <Redirect to={`/`}/>
                        </Switch>
                    </BrowserRouter>
                </Content>
            </Layout>
        </Content>
    </Layout>
    , document.getElementById('root'));
