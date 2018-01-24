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
                            <ul className="nav navbar-nav navbar-right">
                                <li className=""><Link to="/home" >首页</Link></li>
                                <li><a href="/shopList">商品展示</a></li>
                                <li><a href="/personal">个人中心</a></li>
                                <li><a href="/cart"><Icon type="shopping-cart"/>购物车</a></li>
                                {/*<li className={"dropdown"}>*/}
                                    {/*<a href="#" className="dropdown-toggle" data-toggle="dropdown">*/}
                                        {/*商品分类 <b className="caret"></b>*/}
                                    {/*</a>*/}
                                    {/*<ul className="dropdown-menu">*/}
                                        {/*<li><a href="#">学习文具</a></li>*/}
                                        {/*<li><a href="#">生活用品</a></li>*/}
                                        {/*<li><a href="#">交通工具</a></li>*/}
                                        {/*<li className="divider"></li>*/}
                                        {/*<li><a href="#">衣装服饰</a></li>*/}
                                        {/*<li className="divider"></li>*/}
                                        {/*<li><a href="#">专业书籍</a></li>*/}
                                    {/*</ul>*/}
                                {/*</li>*/}
                                <li className={""}>
                                    <Link to="/singin" >登录</Link>
                                </li>
                                <li>
                                    <Link to="/singup" >注册</Link>
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