import './MenuFoodScreen.scss'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { data } from '../../data/data_category';
import { data_menu } from '../../data/data_menu';
import { CardCategory } from '../../components/CardCategory/CardCategory';
// import plato1 from '../../assets/images/comida/plato1.png'
// import plato2 from '../../assets/images/comida/plato2.png'
// import plato3 from '../../assets/images/comida/plato3.png'
import { CardMenu } from '../../components/CardMenu/CardMenu';
import { FoodContext } from '../../context/FoodContext';
import { useContext, useEffect, useState } from 'react';
import { CardOrder } from '../../components/CardOrder/CardOrder';
export const MenuFoodScreen = () => {
    const { food } = useContext(FoodContext);
    // const [total, setTotal] = useState<Array<number>>([]);
    const [total2, setTotal2] = useState(0);
    const [show, setShow] = useState(false);
    const sumaTotal = () => {
        let acumulador: number[] = []
        food.map((item) => {
            const newprice = parseFloat((item.price * item.quantity).toFixed(2));
            acumulador.push(newprice)
            const suma = acumulador.reduce((a: number, b: number) => a + b)
            setTotal2(suma)
            // console.log(suma.toFixed(2));
        })
    }
    const showNotification=()=>{
        setShow(true)
    }
    const hideNotification=()=>{
        setShow(false)
    }
    useEffect(() => {
        sumaTotal()
    }, [food])
    // console.log(total2.toFixed(2));

    return (
        <div className='container__menu__food'>
            <Sidebar />
            <div className="navbar__menu">
                <div className="content__nav">
                    <h2>Today Menu</h2>
                    <input type="search" name="" id="" placeholder='Busque su comida...' />
                </div>
                <div className="nav__order">
                    <button className='button'><i className="fas fa-bell"></i></button>
                    <div className="avatar">
                        <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/60/6082c627b5d08fca106798d629a1703f14d61687.jpg" alt="avatar" />
                        <div className="content__avatar__name">
                            <h3>Jose</h3>
                            <h4>User</h4>
                        </div>
                        <button className='btn__down'><i className="fas fa-chevron-down"></i></button>
                    </div>
                </div>
            </div>
            <div className="container__menu__categories">
                <div className="hero__menu">
                    <img src="https://res.cloudinary.com/react-romel/image/upload/v1642453091/IlustracionFood_kxut3w.png" alt="hero__menu" />
                    <div className="content__hero">
                        <div className="">
                            <h2>Hola Jose</h2>
                            <h3>Obten más información</h3>
                            <button>Ver Más</button>
                        </div>
                    </div>
                </div>
                <div className="menu__categories">
                    <div className="cards_categories">
                        {
                            data.map((item) => {
                                return <CardCategory item={item} key={item.id} />
                            })
                        }
                    </div>
                    <div className="cards__food">
                        {
                            data_menu.map(item => {
                                return <CardMenu item={item} key={item.id} />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container__order">
                <div className="credit__card">
                    <h2 className='debit'>Debit Card</h2>
                    <h2 className='type__card'>Visa</h2>
                    <div className="content__quantity">
                        <h1>${total2.toFixed(2)}</h1>
                        <h3>Jose Rojas</h3>
                    </div>
                    <div className="content__image">
                        <img src="" alt="code" />
                        <h4>9253859023</h4>
                    </div>
                </div>
                <div className="order__menu">
                    <div className="title__order">
                        <h2>Order Menu</h2>
                        <label htmlFor="">
                            View All
                            <button><i className="fas fa-plus"></i></button>
                        </label>
                    </div>
                    <div className="container__orders">
                        {
                            food.length !== 0 ? (food.map(item => {
                                if (item.quantity !== 0) {
                                    return <CardOrder item={item} key={item.id} />
                                }
                            })
                            ) : (
                                <div className='not__products'>
                                    <h2>No se agregaron productos</h2>
                                </div>
                            )
                        }
                    </div>
                    <div className="content__button">
                        <button className='btn__check' onClick={showNotification}>Checkout</button>
                    </div>
                </div>
            </div>
            <div className={`${show?"notification":"hidden"} `} onClick={hideNotification}>
                    <div className="">
                    <h2>Notificación</h2>
                    <h2>Se generó su pedido</h2>
                    </div>
                    <i className="fas fa-bell"></i>
            </div>
        </div>
    )
}
