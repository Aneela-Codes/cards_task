import React from 'react'
import rectangle from "../../src/images/rr.png"
import vector from "../../src/images/Vector.svg"
import shape from "../../src/images/Shape.svg"
import m from "../../src/images/m.png"
import time from "../../src/images/time.png"
import num from "../../src/images/999.png"
import last from "../../src/images/last.png"

const Product = () => {
    return (
        <div className="product_card">
            <div className="header">
                <div className="icons">
                    <img src={vector} alt="" />
                    <h5>245</h5>
                </div>
                <div className="icons">
                    <div className="light">
                    <img src={shape} alt="" />
                    <span>27</span>
                    </div>
                </div>
            </div>
            <div className="body">
                <img src={rectangle} alt="" />
            </div>
            <div className="content">
                <h4>DenzelWashington</h4>
                <h2>Nike Air Jordan 1 OG</h2>
            </div>
            <div className="footer">
                <div className="icons">
                    <img src={time} alt="" />
                </div>
                <div className="icons">
                    <img src= {last} alt="" />
                    <img src= {m} alt="" />
                    <img src= {num} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Product
