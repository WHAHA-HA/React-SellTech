import React from 'react';

import Logo from '../Logo/Logo';

import classes from './Footer.module.css';

const footer = () => {
    return (
        <section className={classes.Footer}>
            <div className={classes.List}>
                <Logo fontSize="32px"/>
            </div>
            <div className={classes.List}>
                <h3>Explore</h3>
                <ul>
                    <li><span className={classes.Link}>Shipping Policy</span></li>
                    <li><span className={classes.Link}>Terms &#38; Conditions</span></li>
                    <li><span className={classes.Link}>Return &#38; Exchange Policy</span></li>
                </ul>
            </div>
            <div className={classes.List}>
                <h3>About</h3>
                <ul>
                    <li><span className={classes.Link}>About Us</span></li>
                    <li><span className={classes.Link}>Contact Us</span></li>
                    <li><span className={classes.Link}>FAQs</span></li>
                </ul>
            </div>
            <div className={classes.List}>
                <h3>Contact Information</h3>
                <p>
                    <strong>Phone:</strong>
                    <br/>
                    <span className={classes.Link}>xxxx-xxxx-xxx</span>
                </p>
                <p>
                    <strong>Email:</strong>
                    <br/>
                    <span className={classes.Link}>info@shopify.com.pk</span>
                </p>
            </div>
            <hr />
            <div className={classes.Copyrigth}>
                Copyright &#169; <span><Logo></Logo></span>
            </div>
        </section>
    );
};

export default footer;