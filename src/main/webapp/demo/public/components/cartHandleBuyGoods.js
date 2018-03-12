import React,{Component} from 'react';
import {Table, Button, Column, Modal} from 'antd';
import {ColorPicker, previewImage} from 'zent';
import 'zent/css/index.css';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import {cartDeleteGoods} from "../actions/auth";
import {Link} from "react-router-dom";

class CartHandleBuyGoods extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 'left',
            isCheck : false,
            data: {},
            selectedRowKeys: [], // Check here to configure the default column
            type : "radio",
            loadingAgree: false,
            loadingDisagree: false,

            visible:false,
            index : ""
        };
    }
    componentDidMount(){
        const user_id = localStorage.getItem("userId");
        axios.get(`${ROOT_URL}/cart/showCart?user_id=${user_id}`)
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
                    <img width={"50px"} onClick={(e) => {
                        this.setState({
                            visible: true,
                            index:this.state.data[index].url,
                        });
                        // console.log(this.state.data[index].url);
                    }} src={`${ROOT_URL}`+record.url} alt={record.key}/>
                    <Modal visible={this.state.visible} footer={null} onCancel={(e) => {
                        // console.log(e);
                        this.setState({
                            visible: false,
                        });
                    }}>
                        {/*{console.log(text)}*/}
                        {/*{console.log(record)}*/}
                        {/*{console.log(this.state.data[index].url)}*/}
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

        const { loadingAgree, selectedRowKeys, type } = this.state;
        const rowSelection = {
            type,
            selectedRowKeys,
            onChange: (selectedRowKeys) => {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.setState({ selectedRowKeys });
            },
        };
        // console.log(selectedRowKeys);
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Link to={`/shopDetails/${selectedRowKeys[0]}`}>
                    <Button
                        type="primary"
                        // onClick={() => {
                        //     this.setState({ loadingAgree: true });
                        //     // ajax request after empty completing
                        //     // console.log(typeof (selectedRowKeys));
                        //     // window.location.href = `/shopDetails/${selectedRowKeys[0]}`;
                        //     // goodsAgree(selectedRowKeys);
                        //     setTimeout(() => {
                        //         this.setState({
                        //             selectedRowKeys: [],
                        //             loadingAgree: false,
                        //         });
                        //     }, 1000);
                        // }}
                        disabled={!hasSelected}
                        loading={loadingAgree}
                        className={"g-mr-10"}
                    >
                        购买商品
                    </Button>
                    </Link>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `选择 ${selectedRowKeys.length} 目标` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={array}>
                </Table>
            </div>
        )
    }
}
export default CartHandleBuyGoods;