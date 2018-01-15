import React,{Component} from 'react';
import { Affix,Menu,Icon,Switch } from 'antd';
import 'antd/dist/antd.css';
import SubMenu from "antd/es/menu/SubMenu";
class Left extends Component{
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
            current: '1',
        };
    }
    render(){
        return (
            <div className="scrollable-container col-xs-5 col-sm-3">
                <div className="background">
                    <Affix offsetTop={50}>
                        <div>
                            <Switch
                                checked={this.state.theme === 'light'}
                                onChange={(value) => {
                            this.setState({
                                theme: value ? 'light' : 'dark',
                            });
                        }}
                                checkedChildren="Dark"
                                unCheckedChildren="Light"
                            />
                            <br />
                            <br />
                            <Menu
                                theme={this.state.theme}
                                onClick={(e) => {
                                    console.log('click ', e);
                                    this.setState({
                                        current: e.key,
                                    });
                                }}
                                defaultOpenKeys={['sub1']}
                                selectedKeys={[this.state.current]}
                                mode="vertical"
                            >
                                <SubMenu key="sub1" title={<span><Icon type="mobile"/><span>手机</span></span>}/>
                                <SubMenu key="sub2" title={<span><Icon type="desktop"/><span>电脑</span></span>}/>
                                <SubMenu key="sub3" title={<span><Icon type="book"/><span>书籍</span></span>}/>
                                <SubMenu key="sub4" title={<span><Icon type="skin"/><span>衣服</span></span>}/>
                                <SubMenu key="sub5" title={<span><Icon type="camera-o"/><span>摄影</span></span>}/>
                                <SubMenu key="sub6" title={<span><Icon type="usb"/><span>存储设备</span></span>}/>
                                <SubMenu key="sub7" title={<span><Icon type="ellipsis"/><span>其他</span></span>}/>
                            </Menu>
                        </div>
                    </Affix>
                </div>
            </div>
        )
    }
}
export default Left;
// module.exports = ProductBox;