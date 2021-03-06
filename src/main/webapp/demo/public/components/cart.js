import React,{Component} from 'react';
import { Tabs, Select } from 'antd';
import 'antd/dist/antd.css';
import CartHandleDeleteGoods from "./cartHandleDeleteGoods";
import CartHandleBuyGoods from "./cartHandleBuyGoods";

class Cart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 'left',
        };
    }
    render(){
        return (
            <div className={"container g-mt-10 g-pb-100"}>
                <div className={"row"}>
                    <div className={"col-xs-12 g-py-10"}>
                        购物车：
                        <Select value={this.state.tabPosition} onChange={(tabPosition) => {this.setState({ tabPosition });}} dropdownMatchSelectWidth={false}>
                            <Select.Option value="top">顶部</Select.Option>
                            <Select.Option value="bottom">底部</Select.Option>
                            <Select.Option value="left">左侧</Select.Option>
                            <Select.Option value="right">右侧</Select.Option>
                        </Select>
                    </div>
                    <div className={"col-xs-12 g-pb-30"}>
                        <Tabs tabPosition={this.state.tabPosition}>
                            <Tabs.TabPane tab="购物商品" key="1"><CartHandleBuyGoods/></Tabs.TabPane>
                            <Tabs.TabPane tab="删除商品" key="2"><CartHandleDeleteGoods/></Tabs.TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;