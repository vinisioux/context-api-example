import { createContext, useState } from 'react';

export const ShopContext = createContext({});

export function ShopProvider({ children }) {
  const [products, setProducts] = useState([{name: 'produto 1', price:2.20},{name: 'produto 2', price:50.99},{name: 'produto 3', price:5.00}]);

  function addProductToCart(product) {
    setProducts([...products, product]);
  }

  function removeProductFromCart(product) {
    setProducts((items) => items.filter((item) => item.name !== product.name));
  }

  return (
    <ShopContext.Provider
      value={{
        products,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
