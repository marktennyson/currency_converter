// components/screens/FxExchangeCard.js

import { useState } from 'react';
import Calculator from "../calculator"
import currencyCodes from "../../data/currency_codes"
import FetchSpinner from "../FetchSpinner"
import FromCurrencySelect from '../CurrencySelect/FromCurrencySelect';
import ToCurrencySelect from '../CurrencySelect/ToCurrencySelect';

const FxExchangeCard = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const availableCurrencies = Object.values(currencyCodes);

  async function handleExchange() {
    setToAmount(0);
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
    setLoading(true);
    let res = await Calculator(fromCurrency, toCurrency, fromAmount)
    setToAmount(res); // to show the output
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-semibold text-gray-800">Forex Exchange</h2>
      <div className='grid grid-cols-2 gap-2'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fromCurrency">From Currency:</label>
          <FromCurrencySelect defaultVal={'USD'} setFromCurrency={setFromCurrency} setToAmount={setToAmount} ></FromCurrencySelect>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toCurrency">To Currency:</label>
          <ToCurrencySelect defaultVal={'INR'} setToCurrency={setToCurrency} setToAmount={setToAmount} ></ToCurrencySelect>
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
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleExchange}
      >
        Exchange
      </button>
      <FetchSpinner loading={loading} />
      {toAmount && (
        <div className='mt-5'>
          <div className='text-black text-lg mt-5'>
            <p className='mb-4 mt-2'>{`${fromAmount} ${fromCurrency.toUpperCase()} = ${toAmount} ${toCurrency.toUpperCase()}`}</p>
            <p>Currency: {`${fromCurrency.toUpperCase()} to ${toCurrency.toUpperCase()}`}</p>
            {/* <p>From amount: {`${fromAmount} ${fromCurrency.toUpperCase()}`}</p>
            <p>To amount: {`${toAmount} ${toCurrency.toUpperCase()}`}</p> */}
          </div>
        </div>
      )}
    </div>
  );
};


export default FxExchangeCard;