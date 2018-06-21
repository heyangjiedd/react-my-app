import React from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './app.css';
import { Layout, Menu, Breadcrumb,Icon ,DatePicker} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const {MonthPicker, RangePicker, WeekPicker} = DatePicker;
ReactDOM.render(
    <Layout>
        <Header className="header">
            <div style={{ color:'white',fontSize:'20px' }}>重庆智慧农业云平台</div>
        </Header>
        <Content style={{ position:'absolute',top:64,bottom:0,left:0,right:0 }}>
            <Layout style={{ height:'100%',padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['111']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="111">
                            <Icon type="desktop" />
                            <span>首页</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="user" />案件</span>}>
                            <Menu.Item key="1">待办案件</Menu.Item>
                            <Menu.Item key="2">归档案件</Menu.Item>
                            <Menu.Item key="3">历史案件</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" title={<span><Icon type="user" />管理</span>}>
                            <Menu.Item key="1">用户管理</Menu.Item>
                            <Menu.Item key="2">管理员管理</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>出警记录</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="notification" />日志</span>}>
                            <Menu.Item key="1">用户操作</Menu.Item>
                            <Menu.Item key="10">管理员操作</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>权限设置</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280,}}>
                    Content
                </Content>
            </Layout>
        </Content>
    </Layout>
    , document.getElementById('root'));
