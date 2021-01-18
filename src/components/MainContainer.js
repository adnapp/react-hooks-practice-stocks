import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
const [stockList, setStockList] = useState([])
const [portfolioList, setPortfolioList] = useState([])
const [sortBy, setSortBy] = useState("")
const [filterBy, setFilterBy] = useState("")

useEffect(() => {
  fetch(`http://localhost:3001/stocks`)
  .then(response => response.json())
  .then(data => {
    setStockList(data)
})
},[])

function handleStockAdd(stock){

  const stockInPortfolio = portfolioList.find(s => (
    s.id == stock.id
  ))
  if (!stockInPortfolio){
    setPortfolioList([...portfolioList, stock])
  }
}

function handlePortfolioRemove(stock){
  console.log(stock)
  const filteredPortfolio = portfolioList.filter(s => {
    return s.id !== stock.id
  })
  setPortfolioList(filteredPortfolio)
}

function sortStocksBy(sort){
  setSortBy(sort)
}

const sortedStocks = stockList.sort((stockA, stockB) => {
  if (sortBy === "Price"){
    return stockA.price-stockB.price
  }
  if (sortBy == "Alphabetically"){
    return stockA.name.localeCompare(stockB.name)
  }
})

console.log(filterBy)

const filteredStocks = sortedStocks.filter((stock) => (
    stock.type === filterBy
))



  return (
    <div>
      <SearchBar 
        sortStocksBy={sortStocksBy}
        filterStocksBy={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stockList = {filteredStocks} 
            handleStockAdd={handleStockAdd}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolioList = {portfolioList} 
            handlePortfolioRemove = {handlePortfolioRemove}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
