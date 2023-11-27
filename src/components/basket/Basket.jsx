import BasketItem from "./BasketItem"
import './Basket.scss'
import { groupBy } from "../../utills";

function Basket(props){
    const {orderedProducts, onProductRemove} = props
    const orderCount = orderedProducts.length;
    const totalCost = orderedProducts.reduce((acc, product) => acc + product.price, 0).toFixed(2)

    const groupedOrderedProducts = Object.entries(
        groupBy(orderedProducts, (product) => product.name
        ));

    function handleButtonClick(productToRemove){
        onProductRemove(productToRemove)
    }
    
    return(
        <div className="basket">
            <header>
                <h5>
                    <span>Busket</span>
                    <span>({orderCount} products)</span>
                </h5>
                <button>x</button>
            </header>
            <div>
                <ul>
                    {groupedOrderedProducts.map(([name, orderedProducts]) => (
                        <BasketItem
                        orderCount={orderedProducts.length}
                        product={orderedProducts[0]} 
                        onProductRemove={handleButtonClick}/>
                    ))}
                </ul>
            </div>
            <footer>
                <button>Buy and Pay {totalCost}$</button>
            </footer>
        </div>
    )
}

export default Basket