import React from 'react'
import Data2 from '../DATA2.json'
import Goods from './Cartcomponents/CartContent'
import Cartshead from './Cartcomponents/CartsHead'

const Headphones = () => {
    return (
        <div className="container earbuds pe-0 ps-0 pt-5 pb-5">
            <Cartshead head="HEADPHONES" />
            <div className="goods">
                <div className="goodsrow">
                {Data2.map(post => {
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

export default Headphones
