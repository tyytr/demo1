import React,{Component} from 'react';
import { Tabs, Select } from 'antd';
import 'antd/dist/antd.css';
import AdminHandleAdvice from "./adminHandleAdvice";

class adminAdvice extends Component{
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
                        注册认证：
                        <Select value={this.state.tabPosition} onChange={(tabPosition) => {this.setState({ tabPosition });}} dropdownMatchSelectWidth={false}>
                            <Select.Option value="top">顶部</Select.Option>
                            <Select.Option value="bottom">底部</Select.Option>
                            <Select.Option value="left">左侧</Select.Option>
                            <Select.Option value="right">右侧</Select.Option>
                        </Select>
                    </div>
                    <div className={"col-xs-12 g-pb-30"}>
                        <Tabs tabPosition={this.state.tabPosition}>
                            <Tabs.TabPane tab="反馈建议" key="1"><AdminHandleAdvice/></Tabs.TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
export default adminAdvice;