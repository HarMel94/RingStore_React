import React from 'react';
import "./Products.css"

function Products({product}) {
    return (
        <div className="card">
            {product.map((img) =>
                <div className="card_conteiner">
                    <div className="image_conteiner">
                        <img src={img.body}/> 
                    </div>
                    <div className="card_title">
                        <label>{img.title}</label>
                        <label>{img.price}</label>
                    </div>                                        
                </div>
            )}
        </div>
    );
}

export default Products;