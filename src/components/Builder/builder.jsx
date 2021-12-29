import React from "react";
import classes from './builder.module.css';
import Items from './items/items';
import Modal from './Modal/modal';
import TotalPrice from './TotalPrice/totalPrice';

const builder = () => {
  return (
    <div>
    <div className={classes.builder}>
      <h3>Build your own Ice Cream Sundae</h3>
        <Items />
        <TotalPrice />
      <button type="button" className={[classes.order, 'rounded'].join('')}>
        Add to Cart
      </button>
    </div>
    <Modal>
      hello
    </Modal>
    </div>
  );
};

export default builder;
