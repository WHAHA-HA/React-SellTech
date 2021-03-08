import React from 'react';

import classes from './SuccessMark.module.css';

const successMark = () => {
    return (
        <div className={classes.successCheckmark}>
        <div className={classes.checkIcon}>
            <span className={[classes.iconLine, classes.lineTip].join(' ')}></span>
            <span className={[classes.iconLine, classes.lineLong].join(' ')}></span>
            <div className={classes.iconCircle}></div>
            <div className={classes.iconFix}></div>
        </div>
</div>
    );
};

export default successMark;