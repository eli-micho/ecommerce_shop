import React, {useState} from 'react';
import './styles.scss';
import beige_sofa from './../../assets/sofas/beige_sofa.jpeg';

export default function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(1) 
    const showSlides = () => {
       
    };
    return (
        <div className="slideshowContainer">
            <div className="slideCard">
                <div className="numberText">1/6</div>
                <img src={beige_sofa} style={{width: "100%"}} alt=""/>
            </div>

            <a className="prev" href="#">&#10094;</a>
            <a className="next" href="#">&#10095;</a>

            <div className="captionContainer">
                <p id="caption"></p>
            </div>

            <div className="row">
                <div className="column">
                    <img src="" alt="" className="demo cursor" style={{width: "100%"}} />
                </div>
                <div className="column">
                    <img src="" alt="" className="demo cursor" style={{width: "100%"}} />
                </div>
                <div className="column">
                    <img src="" alt="" className="demo cursor" style={{width: "100%"}} />
                </div>
                <div className="column">
                    <img src="" alt="" className="demo cursor" style={{width: "100%"}} />
                </div>
            </div>
        </div>
    )
}
