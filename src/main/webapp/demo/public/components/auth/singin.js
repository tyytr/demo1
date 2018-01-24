/**
 * Created by lijun on 2017/12/10.
 */
import React, { Component } from 'react';
import Sing from './sing/sing';
import SingFormIn from './sing/singFormIn';

class Singin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Sing/>
                <SingFormIn/>
            </div>
        );
    }
}
export default Singin;






