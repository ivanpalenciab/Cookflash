import React from 'react';
import Menu from '../navbar/navbar'
import MainPlanes from './planesMain';

export default class Planes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (<div>
            <Menu/>
            <MainPlanes></MainPlanes>
            </div>
         );
    }
}
 
