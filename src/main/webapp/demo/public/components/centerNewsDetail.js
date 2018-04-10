import React,{Component} from 'react';
import {Icon, Tabs, Card} from "antd";
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import Masonry from 'react-masonry-component';
import LazyLoad from 'react-lazy-load';
import {AddCart} from "../actions/auth";
import {Link} from "react-router-dom";
class CenterNewsDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userId:"",
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
    onAddCart(src,event){
        console.log(src);
        if (localStorage.getItem("user_id") === null || localStorage.getItem("user_id") === ""){
            alert("请先登录");
        }else {
            AddCart(src);
        }
    }

    renderRow(src,index){
        console.log(src);
        return (
            <div key={index} className={"col-xs-4 col-sm-3 col-md-3 col-lg-2 g-my-10"}>
                <Card
                    // style={{ height: 300 }}
                    //<a href={`${ROOT_URLF}/`+src.id+"/"+src.key}><Icon style={{color :"#000"}} type="shopping-cart" /></a>,
                    //<Link to={`/shopBuy/${src.key}`}><Icon style={{color :"#000"}} type="heart-o" /></Link>,
                    //<a href={`${ROOT_URLF}/`+src.id+"/"+src.key}><Icon style={{color :"#000"}} type="ellipsis" /></a>,
                    cover={<img className={"g-pa-5"} src={`${ROOT_URL}`+src.url} alt={index} />}
                    actions={[
                        <Icon onClick={this.onAddCart.bind(this,src.goods_id)} style={{color :"#000"}} type="shopping-cart" />,
                        //<Link to={`/shopBuy/${src.key}`}><Icon style={{color :"#000"}} type="heart-o" /></Link>,
                        <Link to={`/shopDetails/${src.key}`}><Icon style={{color :"#000"}} type="ellipsis" /></Link>
                    ]}
                    // bordered={false}
                    hoverable={true}
                >
                    <Card.Meta
                        avatar={<LazyLoad><img style={{marginTop:"4px"}} width={"15px"} src="../../public/style/image/icon.png" alt="1"/></LazyLoad>}
                        title={src.title}
                        description={"￥"+src.price+" 元"}
                    />
                </Card>
            </div>
        )
    }

    render(){
        // this.setState({userId:localStorage.getItem("userId")});
        return (
            <div className={"col-sm-12"}>
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
        )
    }
}
export default CenterNewsDetail;