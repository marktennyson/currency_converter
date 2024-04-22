import React from 'react';
import currencyCodes from "../../data/currency_codes"

const FromCurrencySelect = (props) => {
  return (
    <div className="relative inline-block">
      <select defaultValue={props.defaultVal.toUpperCase()} 
        className="cursor-pointer w-60 bg-lime-500 hover:bg-lime-700 hover:font-black text-black appearance-none border border-gray-300 rounded-md py-2 pl-4 pr-10 text-sm leading-5 focus:outline-none" 
        id='fromCurrency'
        onChange={(e) => {props.setFromCurrency(e.target.value.toUpperCase()); props.setToAmount(null);}}
        >
          {
            Object.entries(currencyCodes).map(([currency, code]) => (
              <option key={code} value={code} className='bg-slate-100 text-black font-black rounded-2'>{code} - {currency}</option>
            ))
          }
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M6 8l4 4 4-4"></path>
        </svg>
      </div>
    </div>
  );
}

export default FromCurrencySelect;
