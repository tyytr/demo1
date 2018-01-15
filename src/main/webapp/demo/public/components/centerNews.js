import React,{Component} from 'react';
import {Carousel} from "antd";
import 'antd/dist/antd.css';
import Detail from './centerNewsDetail';
class CenterNews extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.renderRow = this.renderRow.bind(this);
    }
    renderRow(src,index){
        return (
            <div key={index}>
                <img style={{width:"100%",height:"auto"}} src={src.src} alt={index}/>
            </div>
        )
    }
    render(){
        const carousel = [
            {
                src : "../../public/style/image/carousel1.jpg"
            },
            {
                src : "../../public/style/image/carousel2.jpg"
            },
            {
                src : "../../public/style/image/carousel1.jpg"
            },
            {
                src : "../../public/style/image/carousel2.jpg"
            },
        ];
        return (
            <div className={"col-xs-7 col-sm-9"} >
                <div>
                    <Carousel autoplay>
                        {carousel.map(this.renderRow)}
                    </Carousel>
                </div>
                <div>
                    <Detail/>
                </div>
            </div>
        )
    }
}
export default CenterNews;
// module.exports = ProductBox;