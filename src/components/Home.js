import React from "react";
export default function Home(){
    return(
        <div>
            <h1>Home component</h1>
            <div className="add-to-cart">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"  alt="#"/>
            </div>
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img src="/Users/mohitchauhan/Desktop/redux-learning/iphone.png" alt="iphone"></img>
                </div>
                <div className="text-wrapper">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.0
                    </span>
                </div>
                <div className="btn-wrapper">
                        <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}