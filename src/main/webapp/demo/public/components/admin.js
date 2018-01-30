import React,{Component} from 'react';
import 'antd/dist/antd.css';

class Admin extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className={"col-xs-12"} style={{textAlign:"center"}}>
                <h3 className={"g-py-20"}>我们期待您的反馈与建议</h3>

            </div>
        )
    }
}
export default Admin;