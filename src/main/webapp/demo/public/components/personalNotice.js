import React,{Component} from 'react';
import { Input ,Button ,Table} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';

class PersonNotice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // status : "disabled",
            // notice : "",

            data: {},
            // selectedRowKeys: [], // Check here to configure the default column
            // loadingAgree: false,
            // loadingDisagree: false
        };
    }
    // componentWillMount(){
    //     const token = localStorage.getItem('token');
    //     const loginStatus = localStorage.getItem('loginStatus');
    //     if (token === 1 && loginStatus === "true"){
    //         this.setState({status: ""});
    //     }
    // }
    // handleAdvice(e){
    //     this.setState({notice: e.target.value});
    //     console.log(this.state.notice);
    // }
    // adminNotice(){
    //     const myDate = new Date();
    //     const token = localStorage.getItem('token');
    //     const loginStatus = localStorage.getItem('loginStatus');
    //     const userId = localStorage.getItem('userId');
    //     const username = localStorage.getItem('username');
    //     const notice = this.state.notice;
    //     const time = myDate.toLocaleString();
    //     const data = {
    //         "id" : userId,
    //         "username" : username,
    //         "notice" : notice,
    //         "time" : time
    //     };
    //     if (token === "2" && loginStatus === "true" && notice !== null){
    //         // console.log(data);
    //         adminNotice(data);
    //     }
    //     else {
    //         alert("发布公告内容为空，请合适重新提交");
    //     }
    //
    // }

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
        // console.log(typeof(array));
        // console.log(array);

        // const { loadingAgree, loadingDisagree, selectedRowKeys } = this.state;
        // const rowSelection = {
        //     selectedRowKeys,
        //     onChange: (selectedRowKeys) => {
        //         console.log('selectedRowKeys changed: ', selectedRowKeys);
        //         this.setState({ selectedRowKeys });
        //     },
        // };
        // console.log(selectedRowKeys);
        // const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className={"col-xs-12"}>
                {/*<Divider><h4>发布公告</h4></Divider>*/}
                {/*<form action=""  style={{textAlign:"center"}}>*/}
                    {/*<Input.TextArea placeholder="发布系统公告（100字以内）" autosize={{minRows: 4}} maxLength={"100"} onChange={this.handleAdvice.bind(this)}/>*/}
                    {/*<Button type="primary" size={"large"} onClick={this.adminNotice.bind(this)} >发布公告</Button>*/}
                {/*</form>*/}
                {/*<Divider><h4>处理公告</h4></Divider>*/}
                {/*<div style={{ marginBottom: 16 }}>*/}
                    {/*<Button*/}
                        {/*type="primary"*/}
                        {/*onClick={() => {*/}
                            {/*this.setState({ loadingAgree: true });*/}
                            {/*// ajax request after empty completing*/}
                            {/*// console.log(typeof (selectedRowKeys));*/}
                            {/*adminDeleteNotice(selectedRowKeys);*/}
                            {/*setTimeout(() => {*/}
                                {/*this.setState({*/}
                                    {/*selectedRowKeys: [],*/}
                                    {/*loadingAgree: false,*/}
                                {/*});*/}
                            {/*}, 1000);*/}
                        {/*}}*/}
                        {/*disabled={!hasSelected}*/}
                        {/*loading={loadingAgree}*/}
                        {/*className={"g-mr-10"}*/}
                    {/*>*/}
                        {/*删除公告*/}
                    {/*</Button>*/}
                    {/*<span style={{ marginLeft: 8 }}>*/}
                        {/*{hasSelected ? `选择 ${selectedRowKeys.length} 目标` : ''}*/}
                    {/*</span>*/}
                {/*</div>*/}
                <Table columns={columns} dataSource={array} />
            </div>
        )
    }
}
export default PersonNotice;