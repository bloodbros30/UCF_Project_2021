import React,{Component} from 'react';
import Card from './CardsUI';

//Change the photo to anything you want I just had this on hand

import img1 from '../Assets/gundam1.jpg';
import img2 from '../Assets/gundam2.jpg';
import img3 from '../Assets/gundam3.jpg';


class Cards extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1}title="Console"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2}title="Playgroud"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}title="Adventure"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;