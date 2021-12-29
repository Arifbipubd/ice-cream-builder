import React, { Component } from 'react';
import Builder from '../components/Builder/builder';
import IceCream from '../components/iceCream/iceCream';
import classes from './iceCreamVuilder.module.css';

export default class iceCreamBuilder extends Component {
    state = {};
    render() {
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream />
                <Builder />
            </div>
        )
    }
}
