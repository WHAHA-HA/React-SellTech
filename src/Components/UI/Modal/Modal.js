import React from 'react';

import BackDrop from "../BackDrop/BackDrop";

import classes from "./Modal.module.css"

const modal = (props) => {

    const classesName = [classes.Modal]
    props.show ? classesName.push(classes.Open) : classesName.push(classes.Closed)

    return (
        <React.Fragment>
            <BackDrop show={props.show} clicked={props.closed} />
            <div className={classesName.join(" ")}>
                {props.children}
            </div>
        </React.Fragment>
    );
};

export default modal;