/**
 * Created by lijun on 2017/12/10.
 */
import React, { Component } from 'react';
import Sing from './sing/sing';
import SingFormUp from './sing/singFormUp';
import axios from 'axios';
import {
    ROOT_URL
} from "../../actions/type";

class Singup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }
    render(){
        return(
            <div>
                <Sing/>
                <SingFormUp/>
            </div>
        );
    }
}
export default Singup;






