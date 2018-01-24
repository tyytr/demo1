
import React,{Component} from 'react';
import { ColorPicker } from 'zent';
import 'zent/css/index.css';
import Left from './leftaffix';
import 'antd/dist/antd.css';
import {Divider, InputNumber, Input} from "antd";
import GroundingImg from './groundingImg';
import GroundingProp from './groundinngProp';
class Grounding extends Component{
    constructor(props) {
        super(props);
        this.state = {

            inputValueBuy: 1,
            inputValueSell:1
        };
    }


    render(){
        return (
            <div className={"container"}>
                <div className={"row"}>
                <form action="">
                {/*商品属性*/}
                <GroundingProp/>

                {/*商品价格*/}
                <div className={"g-my-30"}  style={{lineHeight:"32px",textAlign:"center"}}>
                    <div className={"col-xs-12"}>
                        <Divider><h4>商品价格</h4></Divider>
                    </div>
                    <div className={"col-xs-12 g-my-5"}>
                        <span className={"col-xs-6"}>商品原价：</span>
                        <div className={"col-xs-6"}>
                            ￥：
                            <InputNumber min={1} max={10000} value={this.state.inputValueBuy} range={false} onChange={(value) => {
                                console.log(isNaN(value));if(isNaN(value)){alert("请输入数字");this.setState({inputValueBuy: 1,});}
                                else{this.setState({inputValueBuy: value,});}}}
                            />
                        </div>
                    </div>
                    <div className={"col-xs-12 g-my-5"}>
                        <span className={"col-xs-6"}>出售价格：</span>
                        <div className={"col-xs-6"}>
                            ￥：
                            <InputNumber min={1} max={10000} value={this.state.inputValueSell} range={false} onChange={(value) => {
                                console.log(isNaN(value));if(isNaN(value)){alert("请输入数字");this.setState({inputValueSell: 1,});}
                                else{this.setState({inputValueSell: value,});}}}
                            />
                        </div>
                    </div>
                </div>
                {/*商品描述*/}
                <div className={"g-my-30"}  style={{lineHeight:"32px",textAlign:"center"}}>
                    <div className={"col-xs-12"}>
                        <Divider><h4>商品信息</h4></Divider>
                    </div>
                    <div className={"col-xs-12 g-my-5"}>
                        <span className={"col-xs-6"}>商品描述：</span>
                        <div className={"col-xs-6"}>
                            <Input.TextArea placeholder="请用简短的话来对商品进行描述" autosize />
                        </div>
                    </div>
                </div>
                {/*图片管理*/}
                <GroundingImg/>
                </form>
                </div>
            </div>



        )
    }
}
export default Grounding;
// module.exports = ProductBox;