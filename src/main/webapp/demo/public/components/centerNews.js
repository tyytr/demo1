import React,{Component} from 'react';
import {Carousel} from "antd";
import 'antd/dist/antd.css';
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
                src : "../../public/style/image/carousel3.jpg"
            },
            {
                src : "../../public/style/image/carousel4.jpg"
            },
        ];
        return (
            <div className={"col-xs-12 col-sm-12"} >
                <div className={"g-my-10"}>
                    <Carousel autoplay>
                        {carousel.map(this.renderRow)}
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default CenterNews;