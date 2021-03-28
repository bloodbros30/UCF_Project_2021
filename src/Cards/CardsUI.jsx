import React from 'react';
import './card-style.css';
import LandingPage from '../LandingPage.js'; // Used <LandingPage/> for href but that created its own page
//Please import the remaining pages

const Card = props =>{
    return(
        <div className = "card text-center shadow">
            <div className = "overflow">
                <img src={props.imgsrc} alt='Image 1' className="card-img-top"/>
            </div>
            <div className ='card-body text-dark'>
                <h4 ClassName = 'card-title'>{props.title}</h4>
                <p className='card-text.text-secondary'>
                </p>
                <a href='/' className='btn btn-outline-success'>
                Click</a>
            </div>
        </div>
    );
}

export default Card;