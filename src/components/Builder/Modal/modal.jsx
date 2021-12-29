import React from 'react';
import classes from './modal.module.css';

const modal = ({children}) => {
    return (
        <div>
        <div className={classes.backdrop} ></div>
        <div className={classes.modalBody}>
            {children}
        </div>
      </div>
    )
}

export default modal;
