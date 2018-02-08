
import React,{Component} from 'react';
import { ColorPicker } from 'zent';
import 'zent/css/index.css';
import Left from './leftaffix';
import 'antd/dist/antd.css';
import {Divider, InputNumber, Input, Button} from "antd";
import GroundingImg from './groundingImg';
import GroundingProp from './groundinngProp';
class Grounding extends Component{
    constructor(props) {
        super(props);
        this.state = {
            groundingProp:"",
            color:"",

            inputValueBuy: 1,
            inputValueSell:1,

            shopTitle:"",
            shopDescribe:"",

            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        };
    }
    //商品属性
    handleProp_type(value){
        this.setState({groundingProp : value[0]});
        console.log(this.state.groundingProp);
    }
    handleProp_color(color){
        this.setState({color : color});
        console.log(this.state.color);
    }
    //商品信息
    handleShop_title(e){
        this.setState({shopTitle:e.target.value});
        console.log(e.target.value);
    }
    handleShop_describe(e){
        this.setState({shopDescribe:e.target.value});
        console.log(e.target.value);
    }
    // 商品图片
    handlePhoto(fileList){
        console.log(fileList);
        this.setState({fileList:fileList});
    }
    render(){
        return (
            <div className={"container g-mb-100"}>
                <div className={"row"}>
                    <form action="">
                        {/*商品属性*/}
                        <GroundingProp name={"groundingProp"} handleProp_type={this.handleProp_type.bind(this)} handleProp_color={this.handleProp_color.bind(this)}/>
                        {/*商品描述*/}
                        <div className={""}  style={{lineHeight:"32px",textAlign:"center"}}>
                            <div className={"col-xs-12"}>
                                <Divider><h4>商品信息</h4></Divider>
                            </div>
                            <div className={"col-xs-12 g-my-5"}>
                                <span className={"col-xs-6"}>商品标题：</span>
                                <div className={"col-xs-6"}>
                                    <Input.TextArea placeholder="请用10字以内的话定义商品的标题" autosize maxLength={"10"} onChange={this.handleShop_title.bind(this)} />
                                </div>
                            </div>
                            <div className={"col-xs-12 g-my-5"}>
                                <span className={"col-xs-6"}>商品描述：</span>
                                <div className={"col-xs-6"}>
                                    <Input.TextArea placeholder="请用100字以内的话来对商品进行描述" autosize maxLength={"100"} onChange={this.handleShop_describe.bind(this)} />
                                </div>
                            </div>
                        </div>
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
                        {/*图片管理*/}
                        <GroundingImg handlePhoto={this.handlePhoto.bind(this)} />
                        {/*发布*/}
                        <div className={"g-mb-70"}>
                            <div className={"col-xs-12"}>
                                <Divider></Divider>
                            </div>
                            <div className="col-xs-4 col-xs-offset-4" style={{textAlign:"center"}}>
                                <Button type="primary" size={"large"}>发布商品</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        )
    }
}
export default Grounding;