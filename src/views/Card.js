import {React, useState} from "react";
import ReactDom from 'react-dom';
import './Card.css';

function Card({imageUrl, title, body})  {


    const [isHover, setIsHover] = useState(false);

    function handleMouseEnter(e){
        console.log(e.target);
        setIsHover(true);
    }
    function handleMouseLeave(e) {
        console.log('I left', e.target);
        setIsHover(false);
    }
    function classChanger(){
       return `card-container ${isHover ? "grow": ""}`;
    }

    return(
        <div className={classChanger()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div className='img-container'>
                <img src={imageUrl} alt="ye" />
            </div>
            <div className='title-container'>
                <h3>{title}</h3>
            </div>
            <div className='body-container'>
                <p>{body}</p>
            </div>


        </div>
    )
}
export default Card;