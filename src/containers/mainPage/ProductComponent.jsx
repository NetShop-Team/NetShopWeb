import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./productsPage.module.css"
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <NavLink to={`/product/${id}`}>
          <div className="ui link cards">
            <div className={s.card}>
                <img src={image} alt={title} />
              <div className={s.content}>
                <div className={s.header}>{title}</div>
                <div className={s.price}>$ {price}</div>
                <div className={s.meta}>{category}</div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  });
  return <div className={s.products}>{renderList}</div>;
};

export default ProductComponent;