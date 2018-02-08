/**
 * Created by lijun on 2018/1/22.
 */
import React, { Component } from 'react';
import {Upload, Icon, Modal, Divider} from 'antd';
import 'antd/dist/antd.css';
class GroundingImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        };
    }
    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className={""}  style={{}}>
                <div className={"col-xs-12"}>
                    <Divider><h4>图片管理</h4></Divider>
                </div>
                <div className={"col-xs-12 g-my-5"}>
                    <span className={"col-xs-6"} style={{textAlign:"center"}}>上传图片：</span>
                    <div className="col-xs-6 clearfix">
                        <Upload action="http://localhost:8080/groundingImg" listType="picture-card"
                            // fileList={fileList}
                            onPreview={(file) => {
                                this.setState({
                                    previewImage: file.url || file.thumbUrl,
                                    previewVisible: true,
                                });
                            }}
                            onChange={({ fileList }) => {this.setState({ fileList });console.log(fileList[0].url);this.props.handlePhoto(fileList)}}>
                            {fileList.length >= 3 ? null : uploadButton}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={() => this.setState({ previewVisible: false })}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}
export default GroundingImg;






