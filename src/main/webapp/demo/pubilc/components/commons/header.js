import React,{Component} from 'react';
import { Link } from 'react-router-dom';
// import Home from  '../home';
// import
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
                            <a className="navbar-brand" href="#">测试</a>
                        </div>
                        <div className="collapse navbar-collapse" id="example-navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className=""><Link to="/home" >首页</Link></li>
                                <li><a href="#">测试</a></li>
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
                                <li>
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