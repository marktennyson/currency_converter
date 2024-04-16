// components/screens/FxExchangeCard.js

import { useState } from 'react';
import Calculator from "../calculator"
import currencyCodes from "../../data/currency_codes"

const FxExchangeCard = () => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  async function handleExchange() {
    const availableCurrencies = Object.values(currencyCodes);
    console.log("availableCurrencies:", availableCurrencies)
    if (!fromCurrency || !availableCurrencies.includes(fromCurrency)){
      alert('Please enter a valid from currency');
      return;
    }else if (!toCurrency || !availableCurrencies.includes(toCurrency)){
      alert('Please enter a valid to currency');
      return;
    }else if (!fromAmount || fromAmount < 1){
      alert('Please enter a valid amount.')
      return;
    }

    let res = await Calculator(fromCurrency, toCurrency, fromAmount)
    setToAmount(res); // to show the output
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-semibold text-gray-800">Forex Exchange</h2>
      <div className='grid grid-cols-2 gap-2'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fromCurrency">From Currency:</label>
          <input
            id="fromCurrency"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={fromCurrency}
            onChange={(e) => {setFromCurrency(e.target.value.toUpperCase()); setToAmount(null);}}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toCurrency">To Currency:</label>
          <input
            id="toCurrency"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={toCurrency}
            onChange={(e) => {setToCurrency(e.target.value.toUpperCase()); setToAmount(null);}}
          />
        </div>

      </div>
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fromAmount">From Amount:</label>
          <input
            id="fromAmount"
            type="number"
            className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={fromAmount}
            onChange={(e) => {setFromAmount(e.target.value); setToAmount(null);}}
          />
        </div>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleExchange}
      >
        Exchange
      </button>
      {toAmount && (
        <div className='mt-5'>
          <div className='text-black text-lg mt-5'>
            <p>Currency: {`${fromCurrency.toUpperCase()} to ${toCurrency.toUpperCase()}`}</p>
            <p>From amount: {`${fromAmount} ${fromCurrency.toUpperCase()}`}</p>
            <p>To amount: {`${toAmount} ${toCurrency.toUpperCase()}`}</p>
            <p>{`${fromAmount} ${fromCurrency.toUpperCase()} = ${toAmount} ${toCurrency.toUpperCase()}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};


export default FxExchangeCard;