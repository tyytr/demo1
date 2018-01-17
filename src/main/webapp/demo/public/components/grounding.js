import React,{Component} from 'react';
import Left from './leftaffix';
import 'antd/dist/antd.css';
class Grounding extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        // console.log(sub);
    }
    render(){
        return (
            <div className={"container"}>
                <div className={"row g-my-50"}>
                    <Left/>
                </div>
            </div>
        )
    }
}
export default Grounding;
// module.exports = ProductBox;