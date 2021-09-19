import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();


    if (isEmpty) return (
        <>
            <div className="container-fluid pt-5 pb-5 isempty">
                <div className="container" style={{ "maxWidth": "1100px", "textAlign": "center"}}>
                    <h1>SHOPPING CART</h1>
                    <pre style={{ "fontSize": "15px", "color": "#fff" }}>Home  /  <span style={{ "color": "#ff6a28" }}>Shopping Cart</span></pre    >
                </div>
                <div className="container pt-3 pb-3" style={{ "maxWidth": "1100px" ,"textAlign": "center" }}>
                <p className="m-0" style={{
                    "fontSize": "25px",
                    "color": "#fff"
                }}>Your cart is currently empty</p>
                </div>
            </div>
        </>
    )

    return (
        <div className="container-fluid isempty p-0">
            <div className="container-fluid pt-4 pb-4" style={{ "textAlign": "center"}}>
                <div className="container" >
                    <h1>SHOPPING CART</h1>
                    <pre style={{ "font-size": "12px", "color": "#a4a4a4" }}>Home  /  <span style={{ "color": "#ff6a28" }}>Shopping Cart</span></pre    >
                </div>
            </div>
            <div className="container addtocart d-flex flex-column justify-content-center" >
                <table>
                    <thead>
                        <tr className="mb-5">
                            <th className="imghead">Images</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr className="tr-body" key={index}>
                                    <td className="image"><img src={item.photo} alt={item.title} /></td>
                                    <td className="product">{item.title}</td>
                                    <td className="price">${item.price}</td>
                                    <td className="quantity">
                                        <span className="base">
                                            {item.quantity} <span className="flex">
                                                <a onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                    <i className="fas fa-angle-up"></i>
                                                </a>
                                                <a onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                    <i className="fas fa-angle-down"></i>
                                                </a>
                                            </span>
                                        </span>
                                    </td>
                                    <td className="total">${item.price * item.quantity}</td>
                                    <td className="delete"><a onClick={() => removeItem(item.id)}><i className="fas fa-times"></i></a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="clear w-100">
                    <div className="btn-lrg clear-btn" onClick={() => emptyCart()}>Clear Cart</div>
                </div>
            </div>
            <div className="container cart-totals mt-5 pb-5">
                <div className="row main p-0">
                    <div className="col-md-6 left d-flex justify-content-center flex-column align-items-center">
                        <div className="header">
                            <h3>Coupon</h3>
                        </div> <br />
                        <p>Enter your coupon code if you have one.</p>
                        <form className="d-flex flex-column">
                            <input type="text" placeholder="Coupon code" /><br /><br />
                            <button className="btn couponbutton" style={{ "backgroundColor": "#2d2d2d", "color" : "#fff"}}>Apply Coupon</button>
                        </form>
                    </div>
                    <div className="col-md-6 pt-5  right ">
                        <div className="header">
                            <h3>Cart totals</h3>
                        </div>
                        <div className="subtotal">
                            <h4>Subtotal</h4>
                            <p style={{ "font-size": "20px"}}>${cartTotal}</p>
                        </div>
                        <hr />
                        <div className="total">
                            <h4>Total</h4>
                            <p style={{ "font-size": "20px"}}>${cartTotal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
