import React,{Component} from 'react';
import { Tabs, Select } from 'antd';
import 'antd/dist/antd.css';
import AdminRegister from "./adminRegister";
import AdminAuthority from "./adminAuthority";
import AdminAdvice from "./adminAdvice";
import AdminNotice from "./adminNotice";

class Admin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 'left',
        };
    }
    render(){
        return (
            <div className={"container g-mb-40"}>
                <div className={"row"}>
                    <div className={"col-xs-12 g-py-10"}>
                        个人中心：
                        <Select value={this.state.tabPosition} onChange={(tabPosition) => {this.setState({ tabPosition });}} dropdownMatchSelectWidth={false}>
                            <Select.Option value="top">顶部</Select.Option>
                            <Select.Option value="bottom">底部</Select.Option>
                            <Select.Option value="left">左侧</Select.Option>
                            <Select.Option value="right">右侧</Select.Option>
                        </Select>
                    </div>
                    <div className={"col-xs-12 g-pb-30"}>
                        <Tabs tabPosition={this.state.tabPosition}>
                            {/*<Tabs.TabPane tab="注册用户" key="1" onTabClick={adminSelectAllUser(this.state.data)}><AdminRegister/></Tabs.TabPane>*/}
                            <Tabs.TabPane tab="注册认证" key="1"><AdminRegister/></Tabs.TabPane>
                            <Tabs.TabPane tab="权限管理" key="2"><AdminAuthority/></Tabs.TabPane>
                            <Tabs.TabPane tab="公告系统" key="3"><AdminNotice/></Tabs.TabPane>
                            <Tabs.TabPane tab="反馈建议" key="4"><AdminAdvice/></Tabs.TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin;