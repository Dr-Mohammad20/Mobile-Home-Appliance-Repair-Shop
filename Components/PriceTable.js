import React from 'react';
import style from '../styles/PriceTable.module.css';

import data from '../data/data.json';

function PriceTable() {
  return (
    <div className={style.Container}>
      {data.Prices.map((item) => (
        <div className={style.Table} key={item.No}>
          <div className={style.ItemName}>{item.Name}</div>
          <div className={style.ItemPrice}>
            {item.PriceFrom} تومان {item.PriceTo && `تا ${item.PriceTo} تومان`}
          </div>
        </div>
      ))}
    </div>
  );
}
export default PriceTable;
