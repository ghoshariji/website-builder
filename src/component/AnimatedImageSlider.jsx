import React, { useState, useEffect, useRef } from 'react';
import '../css/AnimatedImage.css';
import slider1  from "../assets/slider-7.jpg";
import slider2  from "../assets/slider-8.jpg";
import slider3  from "/src/assets/slider-9.png";
import slider4  from "/src/assets/slider-10.jpg";
 import slider5  from "/src/assets/slider-11.avif";
// import slider6  from "/src/assets/slider-6.avif";

const AnimatedImageSlider = () => {
    const [sliderItems, setSliderItems] = useState([
        { backgroundImage: `url(${slider1})`},
        { backgroundImage: `url(${slider2})` },
        { backgroundImage: `url(${slider3})` },
        { backgroundImage: `url(${slider4})` },
        { backgroundImage: `url(${slider5})`},
        // { backgroundImage: `url(${slider6})`},
       
    ]);

    const carouselRef = useRef(null);
    const runningTimeRef = useRef(null);
    const [timeRunning, setTimeRunning] = useState(3000);
    const [timeAutoNext, setTimeAutoNext] = useState(7000);
    let runNextAuto = useRef(null);
    let runTimeOut = useRef(null);

    const resetTimeAnimation = () => {
        if (runningTimeRef.current) {
            runningTimeRef.current.style.animation = 'none';
            runningTimeRef.current.offsetHeight; 
            runningTimeRef.current.style.animation = 'runningTime 7s linear 1 forwards';
        }
    };

    const showSlider = (type) => {
        const list = [...sliderItems];
        if (type === 'next') {
            const firstItem = list.shift();
            list.push(firstItem);
            carouselRef.current.classList.add('next');
        } else {
            const lastItem = list.pop();
            list.unshift(lastItem);
            carouselRef.current.classList.add('prev');
        }
        setSliderItems(list);


        const contentElements = carouselRef.current.querySelectorAll('.content');
        contentElements.forEach(element => element.classList.remove('animate'));

        
        clearTimeout(runTimeOut.current);
        runTimeOut.current = setTimeout(() => {
            carouselRef.current.classList.remove('next');
            carouselRef.current.classList.remove('prev');

            contentElements.forEach(element => element.classList.add('animate'));
        }, timeRunning);

        clearTimeout(runNextAuto.current);
        runNextAuto.current = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);

        resetTimeAnimation();
    };

    useEffect(() => {
        runNextAuto.current = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);

        // Initial animation start
        resetTimeAnimation();

        return () => {
            clearTimeout(runNextAuto.current);
            clearTimeout(runTimeOut.current);
        };
    }, [sliderItems]);

    return (
        <div style={{marginTop:"2.5rem"}}>
        <div className="carousel" ref={carouselRef}>
            <div className="list">
                {sliderItems.map((item, index) => (
                    <div className="item" key={index} style={{ backgroundImage: item.backgroundImage }}>
                        <div className="content">
                            <div className="title">Empowering </div>
                            <div className="name">Your Digital Presence</div>
                            <div className="des">
                            We offer tailored solutions that align with your specific needs,
                            whether it’s through digital marketing, strategic planning, or
                            enhancing operational efficiency. We specialize in creating custom
                            websites and mobile applications that drive growth and engagement
                            for businesses of all sizes. Whether you're looking to establish
                            your online presence or expand with advanced digital solutions,
                            we're here to help.
                            </div>
                            <div className="btn">
                                <button>See More</button>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="arrows">
                <button className="prev" onClick={() => showSlider('prev')}>&lt;</button>
                <button className="next" onClick={() => showSlider('next')}>&gt;</button>
            </div>

            <div className="timeRunning" ref={runningTimeRef}></div>
        </div>
        </div>
    );
};

export default AnimatedImageSlider;
