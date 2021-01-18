import React from "react";

function Stock({stock, handleStockClick}) {
const {id, ticker, name, type, price} = stock;

  function onClick(){
    handleStockClick(stock)
  }


  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={onClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
