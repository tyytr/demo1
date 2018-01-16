import React,{Component} from 'react';
import {Tabs} from "antd";
import 'antd/dist/antd.css';
class ShopList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
            current: '1',
        };
        this.renderRow = this.renderRow.bind(this);
    }
    renderRow(src,index){
        return (
            <div key={index} className={"col-xs-4 col-sm-2 g-pa-20"}>
                <img style={{width:"100%",height:"100%"}} src={src.src} alt={index}/>
                <p className={"shop_name"}>{src.name}</p>
                <span>￥：{src.price}</span>
            </div>
        )
    }
    // renderTags(src,index){
    //     <Tabs.TabPane tab={src.name} key={index}>11111</Tabs.TabPane>
    //     {/*<Tabs.TabPane tab={src[index]} key={index}>{carousel.map(this.renderRow)}</Tabs.TabPane>*/}
    // }
    render(){
        // const renderTabs = [
        //     {name : "手机"},
        //     {name : "电脑"},
        //     {name : "书籍"},
        //     {name : "衣服"},
        //     {name : "摄影"},
        //     {name : "存储设备"},
        //     {name : "其他"}
        // ];
        const carousell = [
            {
                src : "../../public/style/image/shop1.jpg",
                name : "手机",
                price : "1200"
            }
            ];
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
            ,
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
            ,
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
            ,
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
            ,
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
        // const renderTabs = ["手机","电脑","书籍","衣服","摄影","存储设备","其他"];
        return (
            <div className={"container g-my-20"}>
                <div className={"row"}>
                    <Tabs defaultActiveKey="0">
                        {/*{renderTabs.map(this.renderTags)}*/}
                        <Tabs.TabPane tab="手机" key="0"><div id={"Mobile"}>{carousel.map(this.renderRow)}</div></Tabs.TabPane>
                        <Tabs.TabPane tab="电脑" key="1"><div id={"Desktop"}>{carousel.map(this.renderRow)}</div></Tabs.TabPane>
                        <Tabs.TabPane tab="书籍" key="2">{carousel.map(this.renderRow)}</Tabs.TabPane>
                        <Tabs.TabPane tab="衣服" key="3">{carousel.map(this.renderRow)}</Tabs.TabPane>
                        <Tabs.TabPane tab="摄影" key="4">{carousel.map(this.renderRow)}</Tabs.TabPane>
                        <Tabs.TabPane tab="存储设备" key="5">{carousel.map(this.renderRow)}</Tabs.TabPane>
                        <Tabs.TabPane tab="其他" key="6">{carousel.map(this.renderRow)}</Tabs.TabPane>
                    </Tabs>
                </div>
                {/*<ul className="nav nav-tabs" role={"tablist"}>*/}
                    {/*<li role={"presentation"} className="active"><a href={"#Mobile"} aria-controls="Mobile" role="tab" data-toggle="tab">手机</a></li>*/}
                    {/*<li role={"presentation"}><a href={"#Desktop"}  aria-controls="Desktop" role="tab" data-toggle="tab">电脑</a></li>*/}
                    {/*<li><a href="#">iOS</a></li>*/}
                    {/*<li><a href="#">VB.Net</a></li>*/}
                    {/*<li><a href="#">Java</a></li>*/}
                    {/*<li><a href="#">PHP</a></li>*/}
                {/*</ul>*/}
                {/*<div className="tab-content">*/}
                    {/*<div role={"tabpanel"} id={"Mobile"} className={"tab-pane active"}>{carousel.map(this.renderRow)}</div>*/}
                    {/*<div role={"tabpanel"} id={"Desktop"} className={"tab-pane"}>{carousell.map(this.renderRow)}</div>*/}
                {/*</div>*/}
                {/*<div role={"tabpanel"} id={"Mobile"} className={"tab-pane active"}>{carousel.map(this.renderRow)}</div>*/}
                {/*<div role={"tabpanel"} id={"Desktop"} className={"tab-pane"}>{carousel.map(this.renderRow)}</div>*/}
            </div>
        )
    }
}
export default ShopList;
// module.exports = ProductBox;