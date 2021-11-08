import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({
    box: {
        height: '50px',
        width: '50px',
        border: '1px solid navy',
        backgroundColor: 'dodgerblue'
    }
});

function CustomIcons(props) {

    const classes = useStyles();

     const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };

    return (
        <div style={{ padding: '25px' }}>
            <h3>React Slick Carousel</h3>
            <Slider {...settings}>
                <div className={classes.box}>
                    <h3>1</h3>
                </div>
                <div className={classes.box}>
                    <h3>2</h3>
                </div>
                <div className={classes.box}>
                    <h3>3</h3>
                </div>
                <div className={classes.box}>
                    <h3>4</h3>
                </div>
                <div className={classes.box}>
                    <h3>5</h3>
                </div>
                <div className={classes.box}>
                    <h3>6</h3>
                </div>
                <div className={classes.box}>
                    <h3>7</h3>
                </div>
                <div className={classes.box}>
                    <h3>8</h3>
                </div>
            </Slider>
        </div>
    );
}

export default CustomIcons;