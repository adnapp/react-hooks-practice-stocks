import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioList, handlePortfolioRemove}) {






  const stocksObj = portfolioList.map(stock => {
    return <Stock 
      key={stock.id}
      stock={stock} 
      handleStockClick={handlePortfolioRemove}
    />
  })


  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksObj}
    </div>
  );
}

export default PortfolioContainer;
