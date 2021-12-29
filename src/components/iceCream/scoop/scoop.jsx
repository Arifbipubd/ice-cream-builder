import React from 'react';
import classes from './scoop.module.css';

const scoop = () => {
    return (
<div className={[classes.scoop , classes.orange].join(' ')}></div>
    )
}

export default scoop
