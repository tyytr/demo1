import React, { Component } from 'react';
class Sing extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <div className={"container"}>
                <div className={"row g-py-40"}>
                    <div className="col-sm-12" style={{textAlign:"center",fontSize:"28px",color:"#1890ff"}}>
                        欢迎来到易换网
                    </div>
                </div>
            </div>
        );
    }
}
export default Sing;