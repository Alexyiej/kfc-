import "./Product.scss"
import BuyModal from '../buyModal/BuyModal.jsx'
import React, { useState } from 'react';

function Product(props) {
    const { product, onProductSelect, orderedProducts } = props;
    const { name, price, description, imageUrl } = product;
    const [showModal, setShowModal] = useState(false);

    function handleButtonClick() {
        setShowModal(false);
        setShowModal(true);
    }

    function isOrdered() {
        return orderedProducts.some((orderedProduct) => orderedProduct.id === product.id);
    }

    function orderCount() {
        return orderedProducts.filter((orderedProduct) => orderedProduct.id === product.id).length;
    }

    return (
        <>
            {showModal && (
                <BuyModal product={product} setShowModal={setShowModal} onProductSelect={onProductSelect} />
            )}
            <article className="product" style={{ border: isOrdered() ? "1px solid green" : "none" }}>
                <div>
                    <img src={imageUrl} alt={name} />
                </div>
                <div>
                    <header>
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </header>
                    <footer>
                        <strong>{price}</strong>
                        <button onClick={handleButtonClick} style={isOrdered() ? { fontSize: '16px', background: "#8ea604", color: "white" } : {}}>
                            {isOrdered() ? orderCount() : "+"}
                        </button>
                    </footer>
                </div>
            </article>
        </>
    )
};

export default Product;