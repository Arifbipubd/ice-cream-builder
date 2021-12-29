import React from 'react';
import IceCreamBuilder from '../../containers/iceCreamBuilder';
import classes from './body.module.css';

const body = () => {
    return (
       <div className={classes.mainBody}>
           <IceCreamBuilder />
       </div>
    )
};

export default body;
