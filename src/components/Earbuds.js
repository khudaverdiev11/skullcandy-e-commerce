import React from 'react'
import Data from '../MOCK_DATA.json'
import Goods from './Cartcomponents/CartContent'
import Cartshead from './Cartcomponents/CartsHead'
import { useCart } from 'react-use-cart' 

const Earbuds = () => {
    return (
        <div className="container earbuds pe-0 ps-0 pt-5 pb-5">
            <Cartshead head="TRUE WIRELESS" />
            <div className="goods">
                <div className="goodsrow">
                {Data.map(post => {
                        return (
                            <Goods 
                            id={post.id}
                            photo={post.photo}
                            title={post.title}
                            oldprice={post.oldprice}
                            price={post.price}
                            item={post}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Earbuds
