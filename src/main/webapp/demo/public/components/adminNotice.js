import React,{Component} from 'react';
import { Tabs, Select } from 'antd';
import 'antd/dist/antd.css';
import AdminHandleNoticeDelete from "./adminHandleNoticeDelete";
import AdminHandleNoticePublish from "./adminHandleNoticePublish";

class AdminNotice extends Component{
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
                        公告系统：
                        <Select value={this.state.tabPosition} onChange={(tabPosition) => {this.setState({ tabPosition });}} dropdownMatchSelectWidth={false}>
                            <Select.Option value="top">顶部</Select.Option>
                            <Select.Option value="bottom">底部</Select.Option>
                            <Select.Option value="left">左侧</Select.Option>
                            <Select.Option value="right">右侧</Select.Option>
                        </Select>
                    </div>
                    <div className={"col-xs-12 g-pb-30"}>
                        <Tabs tabPosition={this.state.tabPosition}>
                            <Tabs.TabPane tab="发布公告" key="1"><AdminHandleNoticePublish/></Tabs.TabPane>
                            <Tabs.TabPane tab="删除公告" key="2"><AdminHandleNoticeDelete/></Tabs.TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminNotice;