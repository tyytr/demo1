import React,{Component} from 'react';
import Left from './leftaffix';
import CenterNews from './centerNews';
import Publish from './commons/publish';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className={"container"}>
                <div className={"row g-py-50"}>
                    <Publish/>
                    <Left/>
                    <CenterNews/>
                </div>
            </div>
        )
    }
}
export default Home;
// module.exports = ProductBox;