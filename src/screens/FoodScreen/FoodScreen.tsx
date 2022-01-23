import React, { useState } from 'react';
import './FoodScreen.scss'
// import plato from '../../assets/images/comida/plato.png'
import plato1 from '../../assets/images/comida/plato1.png'
import plato2 from '../../assets/images/comida/plato2.png'
import plato3 from '../../assets/images/comida/plato3.png'
import plato4 from '../../assets/images/comida/plato4.png'
import { Link } from 'react-router-dom';

export const FoodScreen = () => {

    return (
        <div className='container__food'>
            <div className="container__header__food">
                <h2>Foody</h2>
                
                <div className="buttons__rigth">
                    <div className=''>
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <button className='btn_sign'>Sign Up</button>
                </div>
            </div>
            <div className="container__hero">
                <div className="hero__title">
                    <h1>Esto no solo es Comida, Es una Expriencia</h1>
                    <div className="">
                        <Link to={"menu-food"} className='btn__hero'>Ver Menú</Link>
                        <button className='btn__hero__outline'>Libro de Recetas</button>
                    </div>
                </div>
                <div className="imagen">
                    <img className='hero_decoration leaft2' src="https://cdn-icons-png.flaticon.com/512/892/892917.png" alt="" />
                    <img className='hero__image' src={plato2} alt="plato__principal" />
                    <img className='hero_decoration leaft' src="https://cdn-icons-png.flaticon.com/512/892/892917.png" alt="" />
                    <img className='hero_decoration tomato' src="https://cdn-icons-png.flaticon.com/512/2909/2909922.png" alt="" />
                </div>
                <div className="buttons__content">
                    <h4>Reviews</h4>
                    <div className="reviews">
                        <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/6f/6f276d30388d59a5e1a16a7d4b9d3976c62392a4.jpg" alt="avatar" />
                        <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/56/56b5d2e29e1fc9bcc61a89ffcd3740b0538cafac.jpg" alt="avatar" />
                        <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/03/03fd0eb9105ce4eaafff1f8a038e8244f3b537dd.jpg" alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="container__slider">
                <div className="card">
                    <img className='img__card' src={plato3} alt="plato3" />
                    <div className="content__card">
                        <h2>Spagethi</h2>
                        <h3>con vegetales</h3>
                        <h3>$25.00</h3>
                        <button className='btn_card'>
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img className='img__card' src={plato4} alt="plato3" />
                    <div className="content__card">
                        <h2>Spagethi</h2>
                        <h3>con vegetales</h3>
                        <h3>$25.00</h3>
                        <button className='btn_card'>
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img className='img__card' src={plato1} alt="plato3" />
                    <div className="content__card">
                        <h2>Spagethi</h2>
                        <h3>con vegetales</h3>
                        <h3>$25.00</h3>
                        <button className='btn_card'>
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img className='img__card' src={plato1} alt="plato3" />
                    <div className="content__card">
                        <h2>Spagethi</h2>
                        <h3>con vegetales</h3>
                        <h3>$25.00</h3>
                        <button className='btn_card'>
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
