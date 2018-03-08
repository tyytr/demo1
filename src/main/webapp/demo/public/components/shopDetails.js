import React,{Component} from 'react';
import {Icon, Tabs, Card, Avatar} from "antd";
import 'antd/dist/antd.css';
import {ROOT_URL, ROOT_URLF} from "../actions/type";
import axios from 'axios';
import Masonry from 'react-masonry-component';
import LazyLoad from 'react-lazy-load';
import {AddCart} from "../actions/auth";
import {Link} from "react-router-dom";
class ShopDetails extends Component{
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
        // this.onAddCart = this.onAddCart.bind(this,src.goods_id);
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
        AddCart(src);
    }

    renderRow(src,index){
        console.log(src);
        return (
            <div key={index} className={"col-xs-4 col-sm-3 col-md-3 col-lg-2 g-my-10"}>
                <Card
                    // style={{ height: 300 }}
                    //<a href={`${ROOT_URLF}/`+src.id+"/"+src.key}><Icon style={{color :"#000"}} type="shopping-cart" /></a>,
                    //<a href=""><Icon style={{color :"#000"}} type="heart-o" /></a>,
                    //<a href={`${ROOT_URLF}/`+src.id+"/"+src.key}><Icon style={{color :"#000"}} type="ellipsis" /></a>,
                    cover={<img className={"g-pa-5"} src={`${ROOT_URL}`+src.url} alt={index} />}
                    actions={[
                        <Icon onClick={this.onAddCart.bind(this,src.goods_id)} style={{color :"#000"}} type="shopping-cart" />,
                        <a href={`${ROOT_URLF}/`+"/"+src.key}><Icon style={{color :"#000"}} type="heart-o" /></a>,
                        <Icon style={{color :"#000"}} type="ellipsis" />,
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
            <div className={"container g-my-20"}>
                <div className={"row"}>
                </div>
            </div>
        )
    }
}
export default ShopDetails;
