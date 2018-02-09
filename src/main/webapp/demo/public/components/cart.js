import React,{Component} from 'react';
import { Input ,Button} from 'antd';
import 'antd/dist/antd.css';

class Cart extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className={"col-xs-12"} style={{textAlign:"center"}}>
                <h3 className={"g-py-20"}>我们期待您的反馈与建议</h3>
                <form action="">
                    <Input.TextArea placeholder="我们期待您的反馈与建议" autosize={{ minRows: 4}} />
                    <Button type="primary" size={"large"}>发布建议</Button>
                </form>
            </div>
        )
    }
}
export default Cart;