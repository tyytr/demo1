import React,{Component} from 'react';
import CenterNews from './centerNews';
import Publish from './commons/publish';
import ShopList from "./shopList";
import CenterNewsDetail from "./centerNewsDetail";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className={"container g-mt-10 g-pb-100"}>
                <div className={"row g-py-10"}>
                    <CenterNews/>
                    <Publish/>
                    {/*<ShopList/>*/}
                    <CenterNewsDetail/>
                </div>
            </div>
        )
    }
}
export default Home;