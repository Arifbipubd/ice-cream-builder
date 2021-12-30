import React, { Component } from 'react';
import Builder from '../components/Builder/builder';
import IceCream from '../components/iceCream/iceCream';
import classes from './iceCreamVuilder.module.css';

export default class iceCreamBuilder extends Component {
    state = {
        items: {
            vanilla: 45,
            chocolate: 50,
            lemon: 35,
            orange: 40,
            strawberry: 60,
        },
        scoops: [],
        totalPrice: 0,
    };

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);

        this.setState((prevState) => {
            return{
                    scoops: workingScoops,
                    totalPrice: prevState.totalPrice + items[scoop],
            };
        }
        );

    };

    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

        workingScoops.splice(scoopIndex, 1);

        this.setState((prevState) => {
            return{
                    scoops: workingScoops,
                    totalPrice: prevState.totalPrice - items[scoop],
            };
        });

    };

    render() {
        const { items, totalPrice, scoops } = this.state;
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoops = {scoops}  />
                <Builder items = {items}  price = {totalPrice} add = {this.addScoop} remove = {this.removeScoop} scoops = {scoops} />
            </div>
        );
    }
}

