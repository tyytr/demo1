import React,{Component} from 'react';
import {Input, Table, Button, Column, Modal} from 'antd';
import { ColorPicker } from 'zent';
import 'zent/css/index.css';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import {goodsAgree, goodsDisagree} from "../actions/auth";

class AdminHandleGoods extends Component{
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
            index: "",
        };
    }
    componentDidMount(){
        axios.get(`${ROOT_URL}/admin/goods`)
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
            title : '用户名',
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
        },{
            title : '商品标题',
            dataIndex : 'title',
            key : 'title',
            className : '',
        },{
            title : '商品描述',
            dataIndex : 'goods_describe',
            key : 'goods_describe',
            className : ''
        },{
            title : '商品数量',
            dataIndex : 'number',
            key : 'number',
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

        const { loadingAgree, loadingDisagree, selectedRowKeys } = this.state;
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
            <div className={"col-xs-12"}>
                <div className={"col-sm-6"} style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({ loadingAgree: true });
                            // ajax request after empty completing
                            // console.log(typeof (selectedRowKeys));
                            goodsAgree(selectedRowKeys);
                            setTimeout(() => {
                                this.setState({
                                    selectedRowKeys: [],
                                    loadingAgree: false,
                                });
                            }, 1000);
                        }}
                        disabled={!hasSelected}
                        loading={loadingAgree}
                        className={"g-mr-10"}
                    >
                        认证同意
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({ loadingDisagree: true });
                            // ajax request after empty completing
                            goodsDisagree(selectedRowKeys);
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
                        认证拒绝
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `选择 ${selectedRowKeys.length} 目标` : ''}
                    </span>
                </div>
                <div className="col-sm-6">
                    <Input.Search
                        placeholder="请输入搜索内容"
                        onSearch={value => {
                            console.log(value);
                            $.ajax({
                                type : "POST",
                                url : `${ROOT_URL}/search/searchGoods`,
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
                <Table className={"col-sm-12"} rowSelection={rowSelection} columns={columns} dataSource={array} >
                </Table>
            </div>
        )
    }
}
export default AdminHandleGoods;