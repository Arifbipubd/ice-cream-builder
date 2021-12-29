import React from "react";
import classes from './builder.module.css';

const builder = () => {
  return (
    <div className={classes.builder}>
      <h3>Build your own Ice Cream Sundae</h3>
        {/* items */}
        {/* total price */}
      <button type="button" className={[classes.order, 'rounded'].join('')}>
        Add to Cart
      </button>
    </div>
  );
};

export default builder;
