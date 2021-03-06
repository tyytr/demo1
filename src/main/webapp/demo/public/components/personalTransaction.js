import React,{Component} from 'react';
import {Input, Table, Button, Column, Modal} from 'antd';
import { ColorPicker } from 'zent';
import 'zent/css/index.css';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import {deleteTransaction} from "../actions/auth";

class PersonalTransaction extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 'left',
            isCheck : false,
            data: {},
            selectedRowKeys: [], // Check here to configure the default column
            loadingAgree: false,
            loadingDisagree: false,

            visible:false,

            index:"",
        };
    }
    componentDidMount(){
        const id = localStorage.getItem("userId");
        axios.get(`${ROOT_URL}/person/buyTransaction?id=${id}`)
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
            title : '卖方',
            dataIndex : 'username',
            key : 'username',
            className : '',
            // render: text => <a href="#">{text}</a>,
        },{
            title : '商品种类',
            dataIndex : 'prop',
            key : 'prop',
            className : ''
        },{
            title : '商品颜色',
            dataIndex : 'color',
            key : 'color',
            className : '',
            render: (text, record) => (
                <div>
                    <ColorPicker color={record.color}/>
                </div>
            ),
        },
            {
            title : '商品标题',
            dataIndex : 'title',
            key : 'title',
            className : '',
        },{
            title : '购买数量',
            dataIndex : 'transaction_number',
            key : 'transaction_number',
            className : ''
        },{
            title : '商品原价',
            dataIndex : 'originalPrice',
            key : 'originalPrice',
            className : ''
        },{
            title : '商品售价',
            dataIndex : 'price',
            key : 'price',
            className : ''
        },{
            title : '商品图片',
            dataIndex : 'url',
            key : 'url',
            className : '',
            // render: (text, record) => (<img src={record.url} alt={record.key}/>),
            render: (text, record, index) => (
                <div style={{border:"1px solid #bbb"}}>
                    <img width={"50px"} onClick={() => {
                        this.setState({
                            visible: true,
                            index: this.state.data[index].url,
                        });
                    }} src={`${ROOT_URL}`+record.url} alt={record.key}/>
                    <Modal visible={this.state.visible} footer={null} onCancel={(e) => {
                        console.log(e);
                        this.setState({
                            visible: false,
                        });
                    }}>
                        {/*<img width={"50px"} src="http://localhost:8080/ServiceImage/0/currencyTop_CN.png" alt={record.key}/>*/}
                        <img alt={record.key} style={{ width: '100%' }} src={`${ROOT_URL}`+this.state.index} />
                    </Modal>
                </div>
            ),
        }];
        const data = this.state.data;
        // console.log(data);
        const array = Object.keys(data).map(key=> data[key]);
        // console.log(typeof(array));
        console.log(array);

        const {  loadingDisagree, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: (selectedRowKeys) => {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.setState({ selectedRowKeys });
            },
        };
        // console.log(selectedRowKeys);
        const hasSelected = selectedRowKeys.length > 0;
        const _this = this;
        return (
            <div className={"col-sm-12"}>
                <div className={"col-sm-6"} style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({ loadingDisagree: true });
                            // ajax request after empty completing
                            deleteTransaction(selectedRowKeys);
                            setTimeout(() => {
                                this.setState({
                                    selectedRowKeys: [],
                                    loadingDisagree: false,
                                });
                            }, 1000);
                        }}
                        disabled={!hasSelected}
                        loading={loadingDisagree}
                    >
                        删除记录
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `选择 ${selectedRowKeys.length} 目标` : ''}
                    </span>
                </div>
                <div className={"col-sm-6"}>
                    <Input.Search
                        placeholder="请输入搜索内容"
                        onSearch={value => {
                            console.log(value);
                            $.ajax({
                                type : "POST",
                                url : `${ROOT_URL}/search/searchTransactionGoods`,
                                cache : false,
                                traditional: true,
                                data :
                                    {
                                        "search":value,
                                        "userId":localStorage.getItem("userId"),
                                    },
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
                <Table className={"col-sm-12"} rowSelection={rowSelection} columns={columns} dataSource={array}  style={{marginBottom:"100px"}}>
                </Table>
            </div>
        )
    }
}
export default PersonalTransaction;