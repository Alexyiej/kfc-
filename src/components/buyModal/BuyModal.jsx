import './BuyModal.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState } from 'react';
import products from '../../mocks/products.json'
import ModalItem from '../modalItem/ModalItem';


const responsive = {
superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


function BuyModal(props){
    const [productCount, setProductCount] = useState(1);
    let {product, setShowModal, onProductSelect} = props;
    let {name, price, description, imageUrl} = product;

    function hideModal(){
        setShowModal(false);
    }


    function handleDecrement() {
        if (productCount > 1) {
            setProductCount(prevCount => prevCount - 1);
        }
    }

    function handleIncrement() {
        setProductCount(prevCount => prevCount + 1);
    }

    function handleButtonClick(){
        hideModal();
        let productList = [];
        for (let i = 0; i < productCount; i++)
            productList.push(product);

        onProductSelect(productList);
    }

    function createRecomendedProducts(){
        let recomendedProducts = products.slice(0, 4)
        return recomendedProducts
    }

    return(
        <>
        <div className='dark-bg' onClick={hideModal}></div>
        <article className="buy-modal">
            <header>
                <i class="fa-solid fa-arrow-left" onClick={hideModal}></i>
                <i class="fa-regular fa-heart"></i>
            </header>
            <div>
                <img src={imageUrl} alt=""/>
            </div>
            <section>
                <div>
                    <h2>{name}</h2>
                    <h2>{price}</h2>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </section>
            <section>
                <header>
                    <span>DODAJ TO CO LUBISZ</span>
                    <div>
                        <i class="fa-solid fa-arrow-left"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </header>
                <Carousel responsive={responsive}>
                {createRecomendedProducts().map((product) => (  
                    <ModalItem product={product} />
                ))}
                </Carousel>
            </section>
            <footer>
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <span>{productCount}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <button onClick={handleButtonClick}>Dodaj do koszyka 12.99</button>
            </footer>
        </article>
        </>
       
    )
}
export default BuyModal;