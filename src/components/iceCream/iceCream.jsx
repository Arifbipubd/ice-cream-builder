import React from 'react';
import classes from './iceCream.module.css';
import Scoop from './scoop/scoop';

const iceCream = () => {
    return (
        <div>
        <div className={classes.icecream}>
          <p className={classes.cone}></p>
          {/* {<p>Please start adding scoops</p>} */}
          {/* dcoop component */}
          <Scoop />
          <div className="scoop vanilla react" />
          <div className={classes.cherry}></div>
        </div>
      </div>
    )
}

export default iceCream
