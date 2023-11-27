import './Basket.scss'
function BasketItem(props){
    const {orderCount, product, onProductRemove} = props
    const {name, price} = product

    function handleButtonClick(){
        onProductRemove(product)
    }

    return(
        <li className="basket-item">
            <div className="info">
                <span>{orderCount}x </span>
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <div className="actions">
                <button onClick={handleButtonClick}>Delete</button>
            </div>
        </li>
    )
}

export default BasketItem