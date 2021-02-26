import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';
import GifPlayer from 'react-gif-player';

function HeroSection() {
    return (
        <div className="hero-container">
        
            <h1>Le site qui facilite la vie des artistes</h1>
            <p>Lancez-vous, maintenant !</p>
            <div class Name= "hero-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'> Proposez-vos customs
        
            </Button>

            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'> Récoltez des abonnés <i className='far fa-play-circle' />
            
            </Button>
            <GifPlayer gif="/videos/video-2.gif" autoplay loop muted />

            </div>
        </div>
    )
}

export default HeroSection
