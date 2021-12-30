import React from 'react';
import classes from './iceCream.module.css';
import Scoop from './scoop/scoop';

const iceCream = ({scoops}) => {
  // const flavors = Object.keys(items);
    return (
        <div>
        <div className={classes.icecream}>
          <p className={classes.cone} />
          {/* {<p>Please start adding scoops</p>} */}
          {/* dcoop component */}
            {scoops.map((scoop) => ( 
            <Scoop key = {`${scoop}${Math.random()}`} scoop = {scoop} />
            ))}
          <div className={classes.cherry}></div>
        </div>
      </div>
    );
};

export default iceCream
