import React,{Component} from 'react';
import Left from './leftaffix'
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <Left/>
                </div>
            </div>
        )
    }
}
export default Home;
// module.exports = ProductBox;