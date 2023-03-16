import { useContext, useState } from 'react'
import { ShopContext } from './context';

export function ShopComponent() {
  const { products, addProductToCart, removeProductFromCart } = useContext(ShopContext);
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState(0)

  function addProduct() {
    if (!productName || !productPrice) return

     addProductToCart({
        name: productName,
        price: productPrice
     })
     setProductName('')
     setProductPrice(0)
  }

  return (
    <div>
      <input type="text" placeholder='product name' value={productName} onChange={(e) => setProductName(e.target.value)} />
      <br />
      <input type="number" placeholder='price' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
      <br />
      <button type='button' onClick={addProduct}>Add Product</button>
      <ul>
        {products.map(product => (
            <li key={product.name}>
                {product.name} - {product.price} ----- <button type='button' onClick={() => removeProductFromCart(product)}>Remove</button>
            </li>            
        ))}
      </ul>
    </div>
  )
}
