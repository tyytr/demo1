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
                <div className={"row"}>
                    <div className="col-sm-12" style={{textAlign:"center"}}>
                        <h2>欢迎来到易换网</h2>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sing;