import React,{Component} from 'react';
// import Grounding from '../grounding';
import 'antd/dist/antd.css';
class Singout extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className={"container"}>
                { localStorage.clear()}
            </div>
        )
    }
}
export default Singout;
// module.exports = ProductBox;