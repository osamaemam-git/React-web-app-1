import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
        <h1>Un melting-pot de créativité, soyez acheteur ou vendeur</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                    <CardItem 
                    src="images/img-2.jpg" label="Custom Shop" text="Des paires adaptées à vos envies, à vos passions" path='/services' />

                    <CardItem 
                    src="images/img-4.jpg" label="Custom Shop" text="Passez un cap, soyez le seul et l'unique à en posséder" path='/services' />

                    <CardItem 
                    src="images/img-5.jpg" label="Custom Shop" text="Une plateforme qui se charge de vous mettre en avant" path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
