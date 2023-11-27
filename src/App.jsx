import { useState } from 'react'
import Product from './components/product/Product.jsx'
import products from './mocks/products.json'
import Basket from './components/basket/Basket.jsx'

function App() {
  const [orderedProducts, setOrderedProducts] = useState([]) 

  function handleProductSelect(productsList) {
    setOrderedProducts([...orderedProducts, ...productsList])
  }

  function removeProduct(productToRemove){
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== productToRemove.id)
    )
  }

  return (
    <>
    <Basket 
      orderedProducts={orderedProducts} 
      onProductRemove={removeProduct}
      />
      <main>
        <header>
          <h1>Welcome!</h1>
        </header>
        <hr/>
        <section style={{display: "flex", gap: "1.5rem", flexWrap: "wrap"}}>
          {products.map((product) => (
            <Product 
            product={product} 
            onProductSelect={handleProductSelect}
            orderedProducts={orderedProducts}
            />
          ))}

        </section>
      </main>
    </>
    )
}

export default App
