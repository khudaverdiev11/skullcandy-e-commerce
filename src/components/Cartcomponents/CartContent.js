import React, { useEffect } from 'react'
import { useCart } from 'react-use-cart'

import Aos from "aos";
import "aos/dist/aos.css"

const Goods = (props) => {
    const { addItem } = useCart();
    const added = () => {
        addItem(props.item)
        alert("Item added successfuly!")
    }
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return (
        <div className="goodscol" data-aos="zoom-in">
            <div key={props.key} className="card" style={{ width: '18rem' }}>
                <img src={props.photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"><del>{props.oldprice}</del> ${props.price}</p>
                </div>
                <div className="carts">
                    <div className="carticons">
                        <i class="fas fa-shopping-bag" onClick={added} ></i>
                    </div>
                    <div className="carticons">
                        <i class="far fa-heart"></i>
                    </div>
                    <div className="carticons">
                        <i class="fas fa-sliders-h"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Goods





