import React from 'react';
import classes from './totalPrice.module.css';

const totalPrice = () => {
    return (
        <div className={classes.total}>
        <div>Total Price</div>
        <div>3000.00 Tk</div>
      </div>
    )
}

export default totalPrice;
