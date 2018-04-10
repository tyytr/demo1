import React,{Component} from 'react';
// import Grounding from '../grounding';
import {Icon, Card,Input,Button} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../../actions/type";
import Masonry from 'react-masonry-component';
import {Link} from "react-router-dom";
import {AddCart} from "../../actions/auth";
class Publish extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        };
        this.renderRow = this.renderRow.bind(this);
    }
    onAddCart(src,event){
        console.log(src);
        if (localStorage.getItem("user_id") === null || localStorage.getItem("user_id") === ""){
            alert("请先登录");
        }else {
            AddCart(src);
        }
    }
    renderRow(src,index){
        console.log(src);
        return (
            <div key={index} className={"col-xs-4 col-sm-3 col-md-3 col-lg-2 g-my-10"}>
                <Card
                    // style={{ height: 300 }}
                    //<a href={`${ROOT_URLF}/`+src.id+"/"+src.key}><Icon style={{color :"#000"}} type="shopping-cart" /></a>,
                    //<Link to={`/shopBuy/${src.key}`}><Icon style={{color :"#000"}} type="heart-o" /></Link>,
                    //<a href={`${ROOT_URLF}/`+src.id+"/"+src.key}><Icon style={{color :"#000"}} type="ellipsis" /></a>,
                    cover={<img className={"g-pa-5"} src={`${ROOT_URL}`+src.url} alt={index} />}
                    actions={[
                        <Icon onClick={this.onAddCart.bind(this,src.goods_id)} style={{color :"#000"}} type="shopping-cart" />,
                        //<Link to={`/shopBuy/${src.key}`}><Icon style={{color :"#000"}} type="heart-o" /></Link>,
                        <Link to={`/shopDetails/${src.key}`}><Icon style={{color :"#000"}} type="ellipsis" /></Link>
                    ]}
                    // bordered={false}
                    hoverable={true}
                >
                    <Card.Meta
                        avatar={<img style={{marginTop:"4px"}} width={"15px"} src="../../../public/style/image/icon.png" alt="1"/>}
                        title={src.title}
                        description={"￥"+src.price+" 元"}
                    />
                </Card>
            </div>
        )
    }
    render(){
        const _this = this;
        return (
                <div className={"text-center"}>
                    {/*<div className={"g-my-10 col-xs-12 col-sm-2"}>*/}
                        {/*<Select defaultValue="全部" onchange={(value)=>{console.log(`selected ${value}`);}} className={"col-xs-12"} size={"large"} showSearch={true} >*/}
                            {/*<Select.Option value="全部" >全部</Select.Option>*/}
                            {/*<Select.Option value="手机">手机</Select.Option>*/}
                            {/*<Select.Option value="电脑">电脑</Select.Option>*/}
                        {/*</Select>*/}
                    {/*</div>*/}
                    <div className={"g-my-20 col-sm-6"}>
                        <Input.Search placeholder="请输入搜索内容" enterButton="搜索" size="large"
                                      onSearch={value => {
                                          console.log(value);
                                          $.ajax({
                                              type : "POST",
                                              url : `${ROOT_URL}/search/homeSearchGoods`,
                                              cache : false,
                                              traditional: true,
                                              data :
                                                  {
                                                      "search":value,
                                                      // "userId":localStorage.getItem("userId"),
                                                  },
                                              // dataType : "json",
                                              success : function (msg) {
                                                  console.log(msg);
                                                  if (msg.status === 1){
                                                      _this.setState({data : msg.data});
                                                      // window.location.href = `/shopDetails/${value}`;
                                                  }
                                              },
                                              error : function (err) {
                                                  console.log(err);
                                                  alert("与后台交互走error");
                                              }
                                          });
                                      }}
                        />
                    </div>
                    {/*<div className={"g-my-20 col-sm-6"}>*/}
                        {/*<a href="/publish"><Button type="primary" size={"large"}>搜索</Button></a>*/}
                    {/*</div>*/}
                    <div className={"g-my-20 col-sm-6"}>
                        <a href="/publish"><Button type="primary" size={"large"}>发布</Button></a>
                    </div>
                    <div className={"col-sm-12"}>
                        <Masonry>{this.state.data.map(this.renderRow)}</Masonry>
                    </div>
                </div>
        )
    }
}
export default Publish;
// module.exports = ProductBox;