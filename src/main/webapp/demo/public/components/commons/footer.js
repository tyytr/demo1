import React,{Component} from 'react';
import {BackTop} from "antd";
import 'antd/dist/antd.css';
class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <BackTop />
                <footer className="footer navbar-fixed-bottom ">
                    <div className="container-fluid" style={{backgroundColor:"#9a9a9a"}}>
                        <h4 style={{textAlign:"center"}}>易换网</h4>
                    </div>
                </footer>
            </div>
        )
}
}
export default Footer;