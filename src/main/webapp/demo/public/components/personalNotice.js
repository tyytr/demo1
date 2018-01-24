import React,{Component} from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';



class PersonalNotice extends Component{
    constructor(props) {
        super(props);
        this.state = {tabPosition: 'left',};
    }
    render(){
        const columns = [{
            title : '公告内容',
            dataIndex : 'news',
            key : 'news',
            className : 'col-xs-6'
            // render: text => <a href="#">{text}</a>,
        },{
            title : '时间',
            dataIndex : "time",
            key : 'time',
            className : 'col-xs-6'
        }];
        const data = [{
            key: '1',
            news: ' John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown',
            time: '2018-4-20',
        },{
            key: '2',
            news: 'John Brown',
            time: '2018-4-20',
        },{
            key: '3',
            news: 'John Brown',
            time: '2018-4-20',
        },{
            key: '4',
            news: 'John Brown',
            time: '2018-4-20',
        },{
            key: '5',
            news: 'John Brown',
            time: '2018-4-20',
        },{
            key: '6',
            news: 'John Brown',
            time: '2018-4-20',
        },{
            key: '7',
            news: 'John Brown',
            time: '2018-4-20',
        },{
            key: '8',
            news: 'John Brown',
            time: '2018-4-20',
        },{
            key: '9',
            news: 'John Brown',
            time: '2018-4-20',
        },{
            key: '10',
            news: 'John Brown',
            time: '2018-4-20',
        },{
            key: '11',
            news: 'John Brown',
            time: '2018-4-20',
        }];
        return (
            <div className={"col-xs-12"} style={{textAlign:"center"}}>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
export default PersonalNotice;