import React,{Component} from 'react';
import {Select,Input,Button} from 'antd';
import 'antd/dist/antd.css';
class Publish extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div style={{backgroundColor:"#ddd"}}>
                <div className={"container"}>
                    <div className={"row g-py-20 g-rounded-5"}>
                        <div className={"g-my-10 col-xs-12 col-sm-2"}>
                            <Select className={"col-xs-12"} size={"large"} placeholder={"请选择搜索属性"} showSearch={true} value={"全部"}>
                                <Select.Option value="全部" >全部</Select.Option>
                                <Select.Option value="全部">全部</Select.Option>
                                <Select.Option value="全部">全部</Select.Option>
                            </Select>
                        </div>
                        <div className={"g-my-10 col-xs-8 col-sm-4"}>
                            <Input.Search placeholder="input search text" enterButton="Search" size="large" />
                        </div>
                        <div className={"g-my-10 col-xs-2 col-sm-2 col-xs-offset-1 col-md-offset-4"}>
                            <Button type="primary" size={"large"}>发布</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Publish;
// module.exports = ProductBox;