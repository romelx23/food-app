import { Link } from 'react-router-dom'
import './Sidebar.scss'

export const Sidebar = () => {

    return (
        <>
            <div className="container__sidebar__menu">
                <div className="content__siedebar__top">
                    <Link to={"/"}><img src="https://res.cloudinary.com/react-romel/image/upload/v1642904494/logo__food_hybpnb.png" alt="logo" /></Link>
                    <button className='boton'><i className="fas fa-compass"></i></button>
                    <button className='boton'><i className="fas fa-shopping-cart"></i></button>
                    <button className='boton'><i className="fas fa-credit-card"></i></button>
                    <button className='boton'><i className="fas fa-chart-bar"></i></button>
                    <button className='boton'><i className="far fa-file-alt"></i></button>
                    <button className='boton'><i className="far fa-heart"></i></button>
                </div>
                <div className="content__siedebar__bottom">
                    <button className='boton'><i className="fas fa-cog"></i></button>
                    <button className='boton'><i className="fas fa-sign-out-alt"></i></button>
                </div>
            </div>
        </>
    )
}
