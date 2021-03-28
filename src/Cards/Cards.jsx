import React,{Component} from 'react';
import Card from './CardsUI';

//Change the photo to anything you want I just had this on hand

import img1 from '../Assets/homeICON.jpg';
import img2 from '../Assets/profile.png';
import img3 from '../Assets/chatIcon.png';


class Cards extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1}title="Home"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2}title="Profile"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3}title="Chat Rooms"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;