/**
 * Created by lijun on 2018/1/22.
 */
import React, { Component } from 'react';
import { ColorPicker } from 'zent';
import 'zent/css/index.css';
import 'antd/dist/antd.css';
import {Divider,Cascader} from "antd";
class PublishProp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : '#1890ff'
        };
    }
    render() {
        const options = [{
            value: '手机',
            label: '手机',
        },{
            value: '电脑',
            label: '电脑',
        },{
            value: '书籍',
            label: '书籍',
        },{
            value: '衣服',
            label: '衣服',
        },{
            value: '摄影',
            label: '摄影',
        },{
            value: '存储设备',
            label: '存储设备',
        },{
            value: '其他',
            label: '其他',
        }];
        const { color } = this.state;
        return (
            <div>
                <div className={"col-xs-12"}>
                    <Divider><h4>商品属性</h4></Divider>
                </div>
                <div style={{lineHeight:"32px",textAlign:"center"}}>
                    <div className={"col-xs-12 g-my-5"}>
                        <span className={"col-xs-6 "}>商品种类：</span>
                        <div className={"col-xs-6"}>
                            <Cascader style={{}} defaultValue={['手机']} options={options} onChange={(value, selectedOptions)=>{this.props.handleProp_type(value);console.log(value, selectedOptions);}} placeholder="商品名称" showSearch />
                        </div>
                    </div>
                    <div className={"col-xs-12 g-my-5"}>
                        <span className={"col-xs-6"}>商品颜色：</span>
                        <div className={"col-xs-6"}>
                            <ColorPicker color={color} onChange={(color) => {this.props.handleProp_color(color); this.setState({color});}} />
                        </div>
                    </div>
                    <div className={"col-xs-12 g-my-5"}>
                        <span className={"col-xs-6"} style={{float:"left"}}>当前颜色：</span>
                        <span className={"col-xs-6"} style={{ color, marginTop: 5,float:"left"}}>{color}</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default PublishProp;






