import React,{Component} from 'react';
import { Input ,Button ,Table} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';

class PersonNotice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: {},

        };
    }

    componentDidMount(){
        axios.get(`${ROOT_URL}/person/personSelectNotice`)
            .then(response =>{
                console.log(response);
                this.setState({data : response.data.data});
                // alert("success");
            })
            .catch((err) => {
                alert(err);
            })
    }

    render(){
        const columns = [{
            title : '公告内容',
            dataIndex : 'notice',
            key : 'notice',
            className : 'col-xs-6'
            // render: text => <a href="#">{text}</a>,
        },{
            title : '发布时间',
            dataIndex : 'time',
            key : 'time',
            className : 'col-xs-4'
        }];
        const data = this.state.data;
        // console.log(data);
        const array = Object.keys(data).map(key=> data[key]);
        const _this = this;
        return (
            <div>
                <div className={"col-sm-6 col-sm-offset-6"} style={{ marginBottom: 16 }}>
                    <Input.Search
                        placeholder="请输入搜索内容"
                        onSearch={value => {
                            console.log(value);
                            $.ajax({
                                type : "POST",
                                url : `${ROOT_URL}/search/searchNotice`,
                                cache : false,
                                traditional: true,
                                data : {"search":value},
                                // dataType : "json",
                                success : function (msg) {
                                    console.log(msg);
                                    if (msg.status === 1){
                                        _this.setState({data : msg.data});
                                        // window.location.href = `${ROOT_URLF}/adminGoods`;
                                    }
                                },
                                error : function (err) {
                                    console.log(err);
                                    alert("与后台交互走error");
                                }
                            });
                        }}
                        enterButton
                    />
                </div>
                <Table className={"col-sm-12"} columns={columns} dataSource={array} />
            </div>
        )
    }
}
export default PersonNotice;