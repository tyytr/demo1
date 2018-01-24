import React,{Component} from 'react';
import { Affix,Menu,Icon,Switch } from 'antd';
import 'antd/dist/antd.css';
import SubMenu from "antd/es/menu/SubMenu";
class Left extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mode : 'inline',
            theme: 'light',
            current: '1',
            sub : ''
        };
    }
    render(){
        return (
            <div className="scrollable-container col-xs-5 col-sm-3">
                <div className="background">
                    <Affix offsetTop={50}>
                        <div>
                            <div className={"col-xs-12 col-sm-6"} style={{textAlign:"center"}}>
                                <Switch checked={this.state.mode === 'inline'} onChange={(value) => {this.setState({mode: value ? 'inline' : 'vertical',});}} checkedChildren="垂直" unCheckedChildren="内联"/>
                            </div>
                            <div className={"col-xs-12 col-sm-6"} style={{textAlign:"center"}}>
                                <Switch checked={this.state.theme === 'light'} onChange={(value) => {this.setState({theme: value ? 'light' : 'dark',});}} checkedChildren="夜间" unCheckedChildren="白天"/>
                            </div>
                            <Menu mode={this.state.mode} theme={this.state.theme} onClick={(e) => {
                                console.log('click ', e);
                                    this.setState({
                                        current: e.key,
                                        sub : e.item.props.children
                                    });
                                }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} selectedKeys={[this.state.current]}>
                                <SubMenu key="sub1" title={<span><Icon type="mobile"/><span><a href="/shopList#Mobile">手机</a></span></span>}>
                                    <Menu.Item key="1">苹果</Menu.Item>
                                    <Menu.Item key="2">小米</Menu.Item>
                                    <Menu.Item key="3">OPPO</Menu.Item>
                                    <Menu.Item key="4">vivo</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="desktop"/><span><a href="/shopList#Desktop">电脑</a></span></span>}>
                                    <Menu.Item key="5">苹果</Menu.Item>
                                    <Menu.Item key="6">联想</Menu.Item>
                                    <Menu.Item key="7">戴尔</Menu.Item>
                                    <Menu.Item key="8">华硕</Menu.Item>
                                </SubMenu>
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