import React,{Component} from 'react';
import {Tabs} from "antd";
import 'antd/dist/antd.css';
class ShopShow extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.renderRow = this.renderRow.bind(this);
    }
    renderRow(src,index){
        return (
            <div key={index} className={"col-xs-6 col-sm-3 g-pa-20"}>
                <img style={{width:"100%",height:"100%"}} src={src.src} alt={index}/>
                <p className={"shop_name"}>{src.name}</p>
                <span>￥：{src.price}</span>
            </div>
        )
    }
    render(){
        const carousel = [
            {
                src : "../../public/style/image/shop1.jpg",
                name : "手机",
                price : "1200"
            },
            {
                src : "../../public/style/image/shop2.jpg",
                name : "红酒",
                price : "600"
            },
            {
                src : "../../public/style/image/shop3.jpg",
                name : "华硕主板",
                price : "2000"
            },
            {
                src : "../../public/style/image/shop4.jpg",
                name : "神舟（HASEE）战神Z7-KP7GT GTX1060 6G 15.6英寸游戏本",
                price : "3200"
            },
            {
                src : "../../public/style/image/shop1.jpg",
                name : "手机",
                price : "1200"
            },
            {
                src : "../../public/style/image/shop2.jpg",
                name : "红酒",
                price : "600"
            },
            {
                src : "../../public/style/image/shop3.jpg",
                name : "华硕主板",
                price : "2000"
            },
            {
                src : "../../public/style/image/shop4.jpg",
                name : "神舟（HASEE）战神Z7-KP7GT GTX1060 6G 15.6英寸游戏本",
                price : "3200"
            },
            {
                src : "../../public/style/image/shop1.jpg",
                name : "手机",
                price : "1200"
            },
            {
                src : "../../public/style/image/shop2.jpg",
                name : "红酒",
                price : "600"
            },
            {
                src : "../../public/style/image/shop3.jpg",
                name : "华硕主板",
                price : "2000"
            },
            {
                src : "../../public/style/image/shop4.jpg",
                name : "神舟（HASEE）战神Z7-KP7GT GTX1060 6G 15.6英寸游戏本",
                price : "3200"
            }
        ];
        return (
            <div className={"col-xs-12 col-sm-12"} >
                <div className={"g-my-20"}>
                    <Tabs defaultActiveKey="0">
                        <Tabs.TabPane tab="推荐" key="0">{carousel.map(this.renderRow)}</Tabs.TabPane>
                        <Tabs.TabPane tab="最新" key="1">{carousel.map(this.renderRow)}</Tabs.TabPane>
                    </Tabs>
                </div>


            </div>
        )
    }
}
export default ShopShow;
// module.exports = ProductBox;