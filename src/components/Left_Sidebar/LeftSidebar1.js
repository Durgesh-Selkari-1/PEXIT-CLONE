import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './LeftSidebar1.css';
import { NavLink } from 'react-router-dom';
import profile from './../../assets/Dashboard/profile_img.png'
import { Layout, Menu } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import {
  DesktopOutlined,
  ContactsOutlined, UserOutlined
} from '@ant-design/icons';
import { Checkbox } from 'antd';



const { Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const onSearch = value => console.log(value);

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });

  };
  onChange1(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  onChange2(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  onChange3(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  onChange4(e) {
    console.log(`checked = ${e.target.checked}`);
  }



  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh', position: 'sticky', marginTop: 65, overflowY: 'scroll' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={{ overflowY: 'scroll' }}>
          <div className='container-fluid'>
            <div className=''>
              <div className='d-flex justify-content-start'>
                <div className="logo text-start" >
                  <img src={profile} className='img-fluid ms-2 my-2 rounded rounded-pill' style={{ width: 45, height: 45 }} />
                </div>
                <span className='text-light ms-2'>
                  PEXit User
                  <br />
                  <span className='text-light ms-0'>
                    SST India Pvt. Ltd.
                  </span>
                </span>
              </div>
            </div>
          </div>



          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >



            <Menu.Item key="1" style={{ background: 'none', color: 'white' }} icon={<DesktopOutlined />}>
              <NavLink
                to='/Dashboard'
                style={isActive => ({
                  color: isActive ? "white" : "white",
                  fontWeight: isActive ? "bold" : "normal"
                })}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/Dashboard';
                }} >
                Pending invites ()
              </NavLink>
            </Menu.Item>

            <Menu.Item key="2" style={{ background: 'none', color: 'white' }} icon={<ContactsOutlined />}>

              <NavLink
                to='/ContactForm'
                style={isActive => ({
                  color: isActive ? "white" : "white",
                  fontWeight: isActive ? "bold" : "normal"
                })}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/ContactForm';
                }}>

                Profile View ()

              </NavLink>
            </Menu.Item>
            <Menu.Item key="3" style={{ background: 'none', color: 'white' }} icon={<ContactsOutlined />}>

              <NavLink
                to='/ContactForm'
                style={isActive => ({
                  color: isActive ? "white" : "white",
                  fontWeight: isActive ? "bold" : "normal"
                })}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/ContactForm';
                }}>

                Invite Contacts

              </NavLink>
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="View your post to" style={{ background: 'none', color: 'white' }}


            >
              <Menu.Item key="3" style={{ background: 'none', color: 'white' }}>Content 1</Menu.Item>
              <Menu.Item key="4" style={{ background: 'none', color: 'white' }}>Content 2</Menu.Item>
              <Menu.Item key="5" style={{ background: 'none', color: 'white' }}>Content 3</Menu.Item>
            </SubMenu>

            <Menu.Item key="4" style={{ background: 'none', color: 'white', height: 200 }} >

              <NavLink
                to='#'
              >
                <div>

                  <Space direction="vertical">
                    <Search placeholder="search" className='mx-auto' onSearch={onSearch} />
                  </Space>
                </div>
                <div className='d-flex flex-column ms-3 justify-content-start '>
                  <Checkbox className='ms-2 text-light' onChange={this.onChange1}>GVR @SST USA</Checkbox>
                  <Checkbox className='text-light' onChange={this.onChange2}>PEXit</Checkbox>
                  <Checkbox className='text-light' onChange={this.onChange3}>Guna</Checkbox>
                  <Checkbox className='text-light' onChange={this.onChange4}>Ram</Checkbox>
                </div>

              </NavLink>
            </Menu.Item>

            <Menu.Item key="5" style={{ background: 'none', color: 'white' }} icon={<ContactsOutlined />}>

              <NavLink
                to='/ContactForm'
                style={isActive => ({
                  color: isActive ? "white" : "white",
                  fontWeight: isActive ? "bold" : "normal"
                })}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/ContactForm';
                }}>

                Software

              </NavLink>
            </Menu.Item>

            <Menu.Item key="6" style={{ background: 'none', color: 'white' }} icon={<ContactsOutlined />}>

              <NavLink
                to='/ContactForm'
                style={isActive => ({
                  color: isActive ? "white" : "white",
                  fontWeight: isActive ? "bold" : "normal"
                })}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/ContactForm';
                }}>

                Products

              </NavLink>
            </Menu.Item>

            <Menu.Item key="7" style={{ background: 'none', color: 'white' }} icon={<ContactsOutlined />}>

              <NavLink
                to='/ContactForm'
                style={isActive => ({
                  color: isActive ? "white" : "white",
                  fontWeight: isActive ? "bold" : "normal"
                })}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/ContactForm';
                }}>

                Job

              </NavLink>
            </Menu.Item>
            <Menu.Item key="8" style={{ background: 'none', color: 'white' }} icon={<ContactsOutlined />}>

              <NavLink
                to='/ContactForm'
                style={isActive => ({
                  color: isActive ? "white" : "white",
                  fontWeight: isActive ? "bold" : "normal"
                })}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/ContactForm';
                }}>

                Services

              </NavLink>
            </Menu.Item>






            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item> */}
          </Menu>
        </Sider>
        {/* <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
             <AppRoutes/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout> */}
      </Layout>
    );
  }
}

export default SiderDemo;
