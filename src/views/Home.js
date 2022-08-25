import { ReactDOM } from "react-dom";
import React from 'react';
import './Home.css';
import Card from './Card';
import vaca1 from '../media/vaca1.jpg'
import vaca2 from '../media/vaca2.jpg'
import vaca3 from '../media/vaca3.jpg'
function Home() {
    return(
        <main>
            <section className='cover'>
            <div>
                <h1>Numinous.</h1>
                <h1>Let us inspire you</h1>
                <br/>
                <br/>
                <a className="plan_link" href="/Search"> Plan your trip </a>
            </div>
            </section>
        <section className='images'>
        <ul>
            <li >
                <Card imageUrl={vaca1} title='Image1' body='Venice, Italy'  />
            </li>
            <li >
                <Card imageUrl={vaca2} title='Image2' body='Fiji, Japan'  />
            </li>
            <li >
                <Card imageUrl={vaca3} title='Image3' body='Toronto, Canada'  />
            </li>
            
        </ul>
        </section>
        </main>
    )
}

export default Home;