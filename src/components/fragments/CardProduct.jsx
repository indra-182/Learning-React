import React from "react";
import Button from "../elements/button";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};
const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt="product" className="p-8 rounded-t-lg h-72 w-full" />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)}
        </h5>
        <p className="text-m text-white mt-2">{children.substring(0, 80)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const onDispatch = useDispatch();
  return (
    <>
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">
          ${" "}
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "USD",
          })}
        </span>
      </div>
      <Button
        classname="bg-blue-500 m-2"
        onClick={() => onDispatch(addToCart({ id, qty: 1 }))}
      >
        Add to Cart
      </Button>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
