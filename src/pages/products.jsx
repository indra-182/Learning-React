import React, { useEffect, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button";
import Counter from "../components/fragments/Counter";

const products = [
  {
    id: 1,
    image: "/images/shoes-1.jpg",
    name: "Puma White on Blue",
    price: 1000000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: "/images/shoes-2.jpg",
    name: "Adidas Black on White",
    price: 1500000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: "/images/shoes-3.jpg",
    name: "Nike Ardilla",
    price: 500000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    image: "/images/shoes-4.jpg",
    name: "Converse Chuck Taylor",
    price: 750000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    image: "/images/shoes-5.jpg",
    name: "Yeezy",
    price: 4500000,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    image: "/images/shoes-6.jpg",
    name: "Vans Old Skool",
    price: 899999,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const email = localStorage.getItem("email");

const Products = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  const [cart, setCart] = useState([]);
  const [totalPrice, setPrice] = useState(0);

  useEffect(() => {
    if (cart.length === 0) {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    } else {
      const total = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setPrice(total);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      return setCart(
        cart.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex justify-end h-12 bg-blue-600 text-white items-center px-10 py-5">
        <p className="px-2">{email}</p>
        <Button classname="mt-1 py-1" onClick={handleLogout}>
          Logout
        </Button>
        {/* <div className="flex justify-center py-5">
          <div className="mt-5 flex-justify-center">
            <Counter />
          </div>
        </div> */}
      </div>
      {/* <div className="grid grid-cols-3 gap-y-10 mx-auto py-5 px-10 justify-items-center items-center bg-black gap-3"> */}
      <div className="flex justify-center py-5 bg-black">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          {/* <ul>
            {cart.map((item) => {
              return <li key={item.id}>{item.id}</li>;
            })}
          </ul> */}
          <table className="text-left table-auto border-separate border-spacing-x-5 text-white">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {" "}
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
