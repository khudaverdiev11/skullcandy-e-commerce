import React from 'react'

const Cartshead = (props) => {
    return (
        <>
            <h1 className="earbudshead">{props.head}</h1>
            <div className="form">
                <label htmlFor="featured">SORT : </label>
                <select className="form-select" name="items" id="items">
                    <option value="FEATURED">FEATURED ITEMS</option>
                    <option value="NEWEST">NEWEST ITEMS</option>
                    <option value="BESTSELLING">BEST SELLING</option>
                    <option value="ATOZ">A TO Z</option>
                    <option value="ZTOA">Z TO A</option>
                </select>
            </div>
        </>
    )
}

export default Cartshead
