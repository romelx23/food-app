import React from "react";
import { Link, useParams } from 'react-router-dom';
import { StarRaiting } from "../../components/StarRainting/StarRaiting";
import { data_menu } from "../../data/data_menu";
import './CategoryScreen.scss'

export const CategoryScreen = () => {
    const { category } = useParams()
    const itemCategory = data_menu.filter(el => el.category === category?.toLocaleLowerCase())
    console.log(itemCategory);
    return (
        <div className="container__category">
            <div className="navbar">
            <h2>Pantalla Categoria {category}</h2>
            <Link className="btn__volver" to={"/menu-food"}>{"<-"}Volver</Link>
            </div>
            <div className="list__category">
                {
                    itemCategory.map(el => {
                        return (
                            <div className="cards__category">
                                <h2>{el.nombre}</h2>
                                <h2>{el.rating}</h2>
                                <StarRaiting start={el.rating} />
                                <img src={el.url} alt="imagen" />
                                <h2>${el.price}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
