import React from 'react';

import classes from './FormField.module.css';

const formField = (props) => {

    var FieldClasses = [classes.FormField]
    if (props.invalid)
        FieldClasses.push(classes.Invalid)

    var field = null;
    switch (props.elementType) {
        default:
            field = <input className={FieldClasses.join(" ")} {...props.elementConfig} onChange={props.valueChanged}/>;
            break;
        case ('input'):
            field  = <input className={FieldClasses.join(" ")} {...props.elementConfig} onChange={props.valueChanged}/>;
            break;
        case ('textarea'):
            field = <textarea className={FieldClasses.join(" ")} {...props.elementConfig} onChange={props.valueChanged}/>;
            break;
        case ('select'):
            field = (<select className={FieldClasses.join(" ")} {...props.elementConfig} onChange={props.valueChanged}>
                        {Object.keys(props.options).map(key => (
                            <option key={key} value={props.options[key]} >{key}</option>
                        ))}
                    </select>)
    } 

    return (
        <div>
            <label className={classes.Label} >
                {props.label}
                <span className={classes.Required}>{props.required ? "*" : null}</span>
            </label>
            {field}
            {props.invalid ? <p className={classes.InvalidMessage}>{props.invalidMessage}</p>: null}   
        </div>
    );
};

export default formField;