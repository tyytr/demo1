import React,{Component} from 'react';
import { Input ,Button ,Table, Divider} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import {adminDeleteNotice, adminNotice} from "../actions/auth";

class AdminHandleNoticeDelete extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // status : "disabled",
            notice : "",

            data: {},
            selectedRowKeys: [], // Check here to configure the default column
            loadingAgree: false,
            loadingDisagree: false
        };
    }

    componentDidMount(){
        axios.get(`${ROOT_URL}/admin/selectNotice`)
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
            <div className={"col-xs-12"}>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({ loadingAgree: true });
                            // ajax request after empty completing
                            // console.log(typeof (selectedRowKeys));
                            adminDeleteNotice(selectedRowKeys);
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
                        删除公告
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
export default AdminHandleNoticeDelete;