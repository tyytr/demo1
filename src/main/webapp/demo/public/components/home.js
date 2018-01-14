import React,{Component} from 'react';
import Left from './leftaffix';
import Center from './centerNews';
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className={"container"}>
                <div className={"row g-py-50"}>
                    <Left/>
                    <Center/>
                </div>
            </div>
        )
    }
}
export default Home;
// module.exports = ProductBox;