import React,{Component} from 'react';
import Left from './leftaffix';
import CenterNews from './centerNews';
import Publish from './commons/publish';
import Detail from "./centerNewsDetail";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className={"container"}>
                <div className={"row g-py-50"}>
                    <CenterNews/>
                    {/*<Publish/>*/}
                    <Left/>
                    <Detail/>
                </div>
            </div>
        )
    }
}
export default Home;
// module.exports = ProductBox;