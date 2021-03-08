import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
 
import Button from '../Button/Button';
import Logo from '../../Logo/Logo';

import classes from './ImageSlider.module.css';

import image1 from '../../../assets/Images/imageSlider1.jpg';
import image2 from '../../../assets/Images/imageSlider2.jpg';
import image3 from '../../../assets/Images/imageSlider3.jpg';

const ImageSlider = props => {
    const images = [image1, image2, image3]
    const [index, setIndex] = useState(0);

    const plusSlides = () => {
        setIndex(prevIndex => prevIndex + 1)
    }

    const minSlides = () => {
        setIndex(prevIndex => prevIndex - 1)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [images.length])

    return (
        <div className={[classes.ImageSlider, classes.slide].join(" ")} >
            <img src={images[index]} alt='slider' />
            <button className={[classes.sliderButton, classes.prev].join(" ")}
                disabled={index === 0} 
                onClick={minSlides}
            >
                &#10094;
            </button>
            <button className={[classes.sliderButton, classes.next].join(" ")} 
                disabled={index === images.length - 1} 
                onClick={plusSlides}
            >
                &#10095;
            </button>
            <div className={classes.text}>
                <h2>Welcome to <span><Logo /></span></h2>
                <Button btnType="Primary" clicked={() => props.history.push("/browse")}>Browse</Button>
                <Button btnType="Primary" clicked={() => props.history.push("/authenticate")}>Sign In!</Button>
            </div> 
            { props.darkOverlay && <div className={classes.darker}></div> }
        </div>
    );
};

export default React.memo(withRouter(ImageSlider));