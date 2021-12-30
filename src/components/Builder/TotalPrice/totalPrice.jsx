import React from 'react';
import classes from './totalPrice.module.css';

const totalPrice = ({ price = 0 }) => {
    return (
        <div className={classes.total}>
        <div>Total Price</div>
        <div>{price.toFixed(2)} TK</div>
      </div>
    );
};

export default totalPrice;
