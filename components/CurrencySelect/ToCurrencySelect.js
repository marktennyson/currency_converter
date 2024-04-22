import React from 'react';
import currencyCodes from "../../data/currency_codes"

const ToCurrencySelect = (props) => {
  return (
    <div className="relative inline-block">
      <select 
        defaultValue={props.defaultVal.toUpperCase()} 
        className="w-60 cursor-pointer appearance-none border bg-cyan-400 text-black hover:bg-cyan-600 hover:font-black border-gray-300 rounded-md py-2 pl-4 pr-10 text-sm leading-5 focus:outline-none" 
        id='toCurrncy'
        onChange={(e) => {props.setToCurrency(e.target.value.toUpperCase()); props.setToAmount(null);}}
        >
          {
            Object.entries(currencyCodes).map(([currency, code]) => (
              <option key={code} value={code} className='bg-slate-100 text-black font-black'>{code} - {currency}</option>
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

export default ToCurrencySelect;
