import React,{Component} from 'react';
import { Tabs, Select } from 'antd';
import 'antd/dist/antd.css';
import AdminRegister from "./adminRegister";
import {adminSelectAllUser} from "../actions/auth";

class Admin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 'left',
        };
    }
    render(){
        return (
            <div className={"container g-my-10"}>
                <div className={"row"}>
                    <div className={"col-xs-12 g-py-20"}>
                        个人中心：
                        <Select value={this.state.tabPosition} onChange={(tabPosition) => {this.setState({ tabPosition });}} dropdownMatchSelectWidth={false}>
                            <Select.Option value="top">顶部</Select.Option>
                            <Select.Option value="bottom">底部</Select.Option>
                            <Select.Option value="left">左侧</Select.Option>
                            <Select.Option value="right">右侧</Select.Option>
                        </Select>
                    </div>
                    <div className={"col-xs-12"}>
                        <Tabs tabPosition={this.state.tabPosition}>
                            {/*<Tabs.TabPane tab="注册用户" key="1" onTabClick={adminSelectAllUser(this.state.data)}><AdminRegister/></Tabs.TabPane>*/}
                            <Tabs.TabPane tab="注册认证" key="1"><AdminRegister/></Tabs.TabPane>
                            <Tabs.TabPane tab="权限管理" key="2">Content of Tab 2</Tabs.TabPane>
                            {/*<Tabs.TabPane tab="系统公告" key="3"><PersonalNotice/></Tabs.TabPane>*/}
                            {/*<Tabs.TabPane tab="反馈建议" key="4"><PersonalAdvice/></Tabs.TabPane>*/}
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin;