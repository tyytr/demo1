import React,{Component} from 'react';
import {BackTop,Icon} from "antd";
import 'antd/dist/antd.css';
class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <BackTop style={{bottom:"100px"}} visibilityHeight={"300"} />
                <footer className="footer navbar-fixed-bottom">
                    <div className="container g-py-20" style={{textAlign:"center"}}>
                        <div className={"col-xs-12 col-sm-6"}>
                            <a href=""><Icon type="github" />GitHub</a><br/>
                            <a href=""><Icon type="gitlab" />GitLab</a>
                        </div>
                        <div className={"col-xs-12 col-sm-6"}>
                            <a href=""><Icon type="qq" />1141734565</a><br/>
                            <a href=""><Icon type="wechat" />zijindiao002</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
}
}
export default Footer;