import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import {Button, Card, Divider, Modal} from 'antd';
import {ColorPicker, NumberInput} from "zent";
import {AddCart} from "../actions/auth";
class ShopDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : {
                color : "",
                number : 1,
                goods_id: "",
            },
            visible:false,
        };
    }

    componentWillMount(){
        const goods_id = this.props.match.params.id;
        console.log(goods_id);
        axios.get(`${ROOT_URL}/shopList/shopDetails?goods_id=${goods_id}`)
            .then(response =>{
                console.log(response);
                this.setState({data : response.data.data});
                console.log(this.state.data);
            })
            .catch((err) => {
                alert(err);
            });
    }
    onAddCart(src,event){
        console.log(src);
        AddCart(src);
    }
    onBuyGoods(src,event){
        // console.log(src);
        // const _this = this;
        // const data = {
        //     _this.state.data
        // };
        // buyGoods()(data);
    }
    render(){
        const _this = this;
        // console.log(typeof (this.state.data));
        console.log();
        return (
            <div className={"container g-my-20"}>
                <div className={"row g-py-100"} style={{backgroundColor:"#fff"}}>
                    <div className={"col-sm-6"}>
                        <Card
                            hoverable
                            style={{ width: 240,  margin:"0 auto", padding:"10px"}}
                            cover={<img onClick={() => {
                                this.setState({
                                    visible: true,
                                });
                            }} alt={this.state.data.goods_id} src={`${ROOT_URL}`+this.state.data.url} />}
                        >
                            <Card.Meta
                                // title={this.state.data.prop}
                                // description={"卖家："+this.state.data.username}
                            />
                        </Card>
                        <Modal visible={this.state.visible} footer={null} onCancel={(e) => {
                            // console.log(e);
                            this.setState({
                                visible: false,
                            });
                        }}>
                            {/*<img width={"50px"} src="http://localhost:8080/ServiceImage/0/currencyTop_CN.png" alt={record.key}/>*/}
                            <img alt={this.state.data.key} style={{ width: '100%' }} src={`${ROOT_URL}`+this.state.data.url} />
                        </Modal>
                    </div>
                    <div className={"col-sm-6 text-center"}>
                        <p style={{fontSize:"1.5em", color:"red"}}>{this.state.data.title}</p>
                        <Divider dashed />
                        <p style={{fontSize:"1.1em"}}>{this.state.data.goods_describe}</p>
                        <Divider dashed />
                        <div style={{fontSize:"1em"}}><s>原价：{this.state.data.originalPrice} 元</s><Divider type="vertical" /><span style={{color:"red"}}>售价：{this.state.data.price} 元</span></div>
                        <Divider dashed />
                        <div>
                            颜色：
                            <ColorPicker color={this.state.data.color}/>
                        </div>
                        <Divider dashed />
                        <div className={"col-sm-12"} style={{margin:"0px 0px 10px 0px"}}>
                            <div className={"col-sm-6"} style={{lineHeight:"30px"}}>库存数：{this.state.data.number} 个</div>
                            <div className={"col-sm-6"}>
                                <NumberInput min={1} max={Number(this.state.data.number)} value={1} showCounter placeholder="请输入数字" />
                            </div>
                        </div>
                        <div className={"g-py-10"}>
                            <Button className={"g-mr-10"} type="primary" icon="shopping-cart" size={"large"} onClick={this.onAddCart.bind(this,_this.state.data.goods_id)}>加入购物车</Button>
                            <Button className={"g-ml-10"} type="primary" icon="heart-o" size={"large"} onClick={this.onBuyGoods.bind(this,_this.state.data.goods_id)}>立即购买</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShopDetails;
