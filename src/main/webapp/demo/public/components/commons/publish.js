import React,{Component} from 'react';
// import Grounding from '../grounding';
import {Select,Input,Button} from 'antd';
import 'antd/dist/antd.css';
class Publish extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"row g-py-20 g-rounded-5"}>
                            {/*<div className={"g-my-10 col-xs-12 col-sm-2"}>*/}
                                {/*<Select defaultValue="全部" onchange={(value)=>{console.log(`selected ${value}`);}} className={"col-xs-12"} size={"large"} showSearch={true} >*/}
                                    {/*<Select.Option value="全部" >全部</Select.Option>*/}
                                    {/*<Select.Option value="手机">手机</Select.Option>*/}
                                    {/*<Select.Option value="电脑">电脑</Select.Option>*/}
                                {/*</Select>*/}
                            {/*</div>*/}
                            <div className={"g-my-10 col-xs-6 col-sm-4"}>
                                <Input.Search placeholder="请输入搜索内容" enterButton="搜索" size="large" />
                            </div>
                            <div className={"g-my-10 col-xs-2 col-sm-2 col-xs-offset-2 col-sm-offset-4"}>
                                <a href="/grounding"><Button type="primary" size={"large"}>发布</Button></a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Publish;
// module.exports = ProductBox;