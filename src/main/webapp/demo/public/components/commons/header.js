import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Icon} from "antd";
import 'antd/dist/antd.css';
// import Home from  '../home';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        const loginStatus = localStorage.getItem("loginStatus");
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        // console.log(loginStatus);
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top header g-mb-0" role="navigation">
                    <div className="container g-pa-10">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#example-navbar-collapse">
                                <span className="sr-only">切换导航</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="g-pl-40" href="/home"><img style={{height:"43px"}} src="../../../public/style/image/logo.png" alt="1"/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="example-navbar-collapse">
                            <ul className={`nav navbar-nav navbar-right ${loginStatus?"hidden":""}`}>
                                <li className=""><Link to="/home" >首页</Link></li>
                                <li><a href="/shopList">商品展示</a></li>
                                <li><a href="/personal">个人中心</a></li>
                                <li><a href="/cart"><Icon type="shopping-cart"/>购物车</a></li>
                                <li className={""}>
                                    <Link to="/singin" >登录</Link>
                                </li>
                                <li>
                                    <Link to="/singup" >注册</Link>
                                </li>
                            </ul>
                            <ul className={`nav navbar-nav navbar-right ${loginStatus?"":"hidden"}`}>
                                <li className=""><Link to="/home" >首页</Link></li>
                                <li><a href="/shopList">商品展示</a></li>
                                <li><a href={`${token==2?"/admin":"/personal"}`}>个人中心</a></li>
                                <li><a href="/cart"><Icon type="shopping-cart"/>购物车</a></li>
                                <li className={""}>
                                    <Link to="" style={{color:"#1890ff"}} >{username}</Link>
                                </li>
                                <li>
                                    {/*<button onClick={()=> {localStorage.clear();}}>退出</button>*/}
                                    <Link to="/singin" onClick={()=> {localStorage.clear();}} >退出</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;
// module.exports = ProductBox;