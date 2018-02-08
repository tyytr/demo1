import React,{Component} from 'react';
import {Table,Button} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import {adviceAgree, adviceDisagree} from "../actions/auth";

class AdminAuthority extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 'left',
            isCheck : false,
            data: {},
            selectedRowKeys: [], // Check here to configure the default column
            loadingAgree: false,
            loadingDisagree: false
        };
    }
    componentDidMount(){
        axios.get(`${ROOT_URL}/admin/advice`)
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
            className : 'col-xs-2'
            // render: text => <a href="#">{text}</a>,
        },{
            title : '反馈建议',
            dataIndex : 'advice',
            key : 'advice',
            className : 'col-xs-5'
        },{
            title : '时间',
            dataIndex : 'time',
            key : 'time',
            className : 'col-xs-2'
        }];
        const data = this.state.data;
        // console.log(data);
        const array = Object.keys(data).map(key=> data[key]);
        // console.log(typeof(array));
        // console.log(array);

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
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({ loadingAgree: true });
                            // ajax request after empty completing
                            // console.log(typeof (selectedRowKeys));
                            adviceAgree(selectedRowKeys);
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
                        采纳建议
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({ loadingDisagree: true });
                            // ajax request after empty completing
                            adviceDisagree(selectedRowKeys);
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
                        拒绝建议
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `选择 ${selectedRowKeys.length} 目标` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={array} />
            </div>
        )
    }
}
export default AdminAuthority;
