// components/screens/FxExchangeCard.js

import { useState } from 'react';

const FxExchangeCard = () => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const handleExchange = () => {
    // You can implement the logic for currency exchange here
    // For now, let's just assume the conversion is 1:1
    setToAmount(fromAmount);
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
            onChange={(e) => setFromCurrency(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toCurrency">To Currency:</label>
          <input
            id="toCurrency"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toAmount">To Amount:</label>
          <input
            id="toAmount"
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={toAmount}
            readOnly
          />
        </div> */}
      </div>
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fromAmount">From Amount:</label>
          <input
            id="fromAmount"
            type="number"
            className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
          />
        </div>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleExchange}
      >
        Exchange
      </button>
    </div>
  );
};


export default FxExchangeCard;
