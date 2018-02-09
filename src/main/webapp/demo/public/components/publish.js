
import React,{Component} from 'react';
import { ColorPicker } from 'zent';
import 'zent/css/index.css';
import Left from './leftaffix';
import 'antd/dist/antd.css';
import {Divider, InputNumber, Input, Button} from "antd";
import PublishImg from './publishImg';
import PublishProp from './publishProp';
class Publish extends Component{
    constructor(props) {
        super(props);
        this.state = {
            prop:"",
            color:"",

            originalPrice: 1,
            price:1,
            number:1,

            title:"",
            describe:"",

            agree : false,

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
        this.setState({prop : value[0]});
        console.log(this.state.prop);
    }
    handleProp_color(color){
        this.setState({color : color});
        console.log(this.state.color);
    }
    //商品信息
    handleShop_title(e){
        this.setState({title:e.target.value});
        console.log(e.target.value);
    }
    handleShop_describe(e){
        this.setState({describe:e.target.value});
        console.log(e.target.value);
    }
    // 商品图片
    handlePhoto(fileList){
        console.log(fileList);
        this.setState({fileList:fileList});
    }

    handleClick(){

    }
    render(){
        return (
            <div className={"container g-mb-100"}>
                <div className={"row"}>
                    <form action="">
                        {/*商品属性*/}
                        <PublishProp name={"publishProp"} handleProp_type={this.handleProp_type.bind(this)} handleProp_color={this.handleProp_color.bind(this)}/>
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
                                <span className={"col-xs-6"}>商品数量：</span>
                                <div className={"col-xs-6"}>
                                    <InputNumber min={1} max={10000} value={this.state.number} range={false} onChange={(value) => {
                                        console.log(isNaN(value));if(isNaN(value)){alert("请输入数字");this.setState({number: 1,});}
                                        else{this.setState({number: value,});}}}
                                    />
                                </div>
                            </div>
                            <div className={"col-xs-12 g-my-5"}>
                                <span className={"col-xs-6"}>商品原价：</span>
                                <div className={"col-xs-6"}>
                                    <InputNumber min={1} max={10000} value={this.state.originalPrice} range={false} onChange={(value) => {
                                        console.log(isNaN(value));if(isNaN(value)){alert("请输入数字");this.setState({originalPrice: 1,});}
                                        else{this.setState({originalPrice: value,});}}}
                                    />
                                </div>
                            </div>
                            <div className={"col-xs-12 g-my-5"}>
                                <span className={"col-xs-6"}>出售价格：</span>
                                <div className={"col-xs-6"}>
                                    <InputNumber min={1} max={10000} value={this.state.price} range={false} onChange={(value) => {
                                        console.log(isNaN(value));if(isNaN(value)){alert("请输入数字");this.setState({price: 1,});}
                                        else{this.setState({price: value,});}}}
                                    />
                                </div>
                            </div>
                        </div>
                        {/*图片管理*/}
                        <PublishImg handlePhoto={this.handlePhoto.bind(this)} />
                        {/*发布*/}
                        <div className={"g-mb-70"}>
                            <div className={"col-xs-12"}>
                                <Divider></Divider>
                            </div>
                            <div className="col-xs-4 col-xs-offset-4" style={{textAlign:"center"}}>
                                <Button type="primary" size={"large"} onClick={this.handleClick.bind(this)}>发布商品</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        )
    }
}
export default Publish;