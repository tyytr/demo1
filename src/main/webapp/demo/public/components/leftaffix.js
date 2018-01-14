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
            <div className="scrollable-container col-xs-4 col-sm-3" ref={(node) => { this.container = node; }}>
                <div className="background">
                    <Affix target={() => this.container}>
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
                                // style={{ width: 256 }}
                                defaultOpenKeys={['sub1']}
                                selectedKeys={[this.state.current]}
                                mode="inline"
                            >
                                <SubMenu key="sub1" title={<span><Icon type="mobile" /><span>手机</span></span>}>
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="desktop" /><span>电脑</span></span>}>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="book" /><span>书籍</span></span>}>
                                </SubMenu>
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