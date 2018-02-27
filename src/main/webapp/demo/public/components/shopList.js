import React,{Component} from 'react';
import {Icon, Tabs, Card, Avatar} from "antd";
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import Masonry from 'react-masonry-component';
import LazyLoad from 'react-lazy-load';
class ShopList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mobile : [],
            desktop : [],
            book : [],
            skin : [],
            camera : [],
            usb : [],
            ellipsis : [],
        };
        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount(){
        axios.get(`${ROOT_URL}/shopList/mobile`)
            .then(response =>{
                console.log(response);
                this.setState({mobile : response.data.data});
                console.log(this.state.usb);
                // alert("success");
            })
            .catch((err) => {
                alert(err);
            });
    }

    componentDidMount(){
        axios.get(`${ROOT_URL}/shopList/desktop`)
            .then(response =>{
                console.log(response);
                this.setState({desktop : response.data.data});
                console.log(this.state.usb);
                // alert("success");
            })
            .catch((err) => {
                alert(err);
            });
        axios.get(`${ROOT_URL}/shopList/book`)
            .then(response =>{
                console.log(response);
                this.setState({book : response.data.data});
                console.log(this.state.usb);
                // alert("success");
            })
            .catch((err) => {
                alert(err);
            });
        axios.get(`${ROOT_URL}/shopList/skin`)
            .then(response =>{
                console.log(response);
                this.setState({skin : response.data.data});
                console.log(this.state.usb);
                // alert("success");
            })
            .catch((err) => {
                alert(err);
            });
        axios.get(`${ROOT_URL}/shopList/camera`)
            .then(response =>{
                console.log(response);
                this.setState({camera : response.data.data});
                console.log(this.state.usb);
                // alert("success");
            })
            .catch((err) => {
                alert(err);
            });
        axios.get(`${ROOT_URL}/shopList/usb`)
            .then(response =>{
                console.log(response);
                this.setState({usb : response.data.data});
                console.log(this.state.usb);
                // alert("success");
            })
            .catch((err) => {
                alert(err);
            });
        axios.get(`${ROOT_URL}/shopList/ellipsis`)
            .then(response =>{
                console.log(response);
                this.setState({ellipsis : response.data.data});
                console.log(this.state.usb);
                // alert("success");
            })
            .catch((err) => {
                alert(err);
            });
    }

    renderRow(src,index){
        console.log(src);
        return (
            <div key={index} className={"col-xs-4 col-sm-2 g-my-10"}>
                <a href="">
                    <Card
                        // style={{ height: 300 }}
                        cover={<img className={"g-pa-5"} src={`${ROOT_URL}`+src.url} alt={index} />}
                        actions={[<Icon style={{color :"#000"}} type="shopping-cart" />, <Icon style={{color :"#000"}} type="heart-o" />, <Icon style={{color :"#000"}} type="ellipsis" />]}
                        // bordered={false}
                        hoverable={true}
                    >
                        <Card.Meta
                            avatar={<LazyLoad><img style={{marginTop:"4px"}} width={"15px"} src="../../public/style/image/icon.png" alt="1"/></LazyLoad>}
                            title={src.title}
                            description={"￥"+src.price}
                        />
                    </Card>
                </a>
            </div>
        )
    }

    render(){
        return (
            <div className={"container g-my-20"}>
                <div className={"row"}>
                    <Tabs defaultActiveKey="0">
                        {/*{renderTabs.map(this.renderTags)}*/}
                        <Tabs.TabPane tab="手机" key="0"><Masonry>{this.state.mobile.map(this.renderRow)}</Masonry></Tabs.TabPane>
                        <Tabs.TabPane tab="电脑" key="1"><Masonry>{this.state.desktop.map(this.renderRow)}</Masonry></Tabs.TabPane>
                        <Tabs.TabPane tab="书籍" key="2"><Masonry>{this.state.book.map(this.renderRow)}</Masonry></Tabs.TabPane>
                        <Tabs.TabPane tab="服装" key="3"><Masonry>{this.state.skin.map(this.renderRow)}</Masonry></Tabs.TabPane>
                        <Tabs.TabPane tab="摄影" key="4"><Masonry>{this.state.camera.map(this.renderRow)}</Masonry></Tabs.TabPane>
                        <Tabs.TabPane tab="存储设备" key="5"><Masonry>{this.state.usb.map(this.renderRow)}</Masonry></Tabs.TabPane>
                        <Tabs.TabPane tab="其他" key="6"><Masonry>{this.state.ellipsis.map(this.renderRow)}</Masonry></Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default ShopList;