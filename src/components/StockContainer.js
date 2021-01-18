import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, handleStockAdd}) {
  
  const stocksObj = stockList.map(stock => {
    return <Stock 
      key={stock.id}
      stock={stock} 
      handleStockClick={handleStockAdd}   
    />
  })
  
  
  return (
    <div>
      <h2>Stocks</h2>
      {stocksObj}
    </div>
  );
}

export default StockContainer;
