import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import OrderSection from "../OrderSection/OrderSection";
import Footer from "../Footer/Footer";
import ProductModal from "../ProductModal/ProductModal";
import data from '../../data.js';
import "./wrapper.scss";

const Wrapper = () => {
  const [currentData, setCurrentData] = useState(null);
  const [productModalActive, setProductModalActive] = useState(false);
  const [clickedProduct, setClickedProduct] = useState(null);

  useEffect(() => {
    setCurrentData(data);
  }, []);

  const getClickedProduct = (clickedId) => {
    setClickedProduct([currentData.find(item => item.id === clickedId)]);
  }

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Content>
        <div className="products">
          {currentData ? currentData.map(({ id, category, imgUrl, name, price, weight, pieces }) => (
            <div className="card" key={id} onClick={() => {setProductModalActive(true); getClickedProduct(id)}}>
              <div className="card__info">
                <div className="card__img">
                  <img src={imgUrl} alt={name} width={190} />
                </div>
                <div className="card__title">{name}</div>
                <div className="card__about">
                  {weight} {category === "drinks" ? "мл" : "грамм"}, {pieces} шт
                </div>
              </div>
              <div className="buyblock card__buyblock">
                <div className="price card__price">{price} ₴</div>
                <button className="btn card__btn" onClick={e => e.stopPropagation()}>Хочу!</button>
              </div>
            </div>
          )) : <div className="products_empty">Что-то пошло не так...</div>}
        </div>
        <ProductModal isActive={productModalActive} setIsActive={setProductModalActive} array={clickedProduct}/>
      </Content>
      <OrderSection />
      <Footer />
    </div>
  );
};

export default Wrapper;


