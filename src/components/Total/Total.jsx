import React from 'react';
import { useSelector } from 'react-redux';

import './total.scss';

const Total = () => {
  const { totalPrice, totalItems } = useSelector((state) => state.cart);

  return (
    <div className="total">
      <p>
        Всего продуктов: <span className="price">{totalItems}</span>
      </p>
      <p>
        Cумма заказа: <span className="price">{totalPrice} ₴</span>
      </p>
    </div>
  );
};

export default Total;
