async function Calculator(fromCurrency, toCurrency, fromAmount) {
    const resp = await fetch(`/api/exchange-rates?base_currency=${fromCurrency.toUpperCase()}`)
    const data = await resp.json();
    var rates = data.rates;
    return (rates[toCurrency.toUpperCase()]*fromAmount).toFixed(2)
}

export default Calculator;