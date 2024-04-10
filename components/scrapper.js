import cheerio from 'cheerio'
import currencyCodes from "../data/currency_codes"

export default class CurrencyRates {
    constructor(options) {
        options.base_currency = options.base_currency || "INR";
        this.options = options;
        this.url = `https://www.x-rates.com/table/?from=${this.options['base_currency']}&amount=1`;
    }

    extract = async () => {
        var _rates = {};
        const resp = await fetch(this.url);
        const html = await resp.text();
        const $ = cheerio.load(html);
        $(".tablesorter.ratesTable tbody tr").each(function() {
            let currency = $(this).find("td:eq(0)").text();
            let rate = $(this).find("td:eq(1)").text();
            _rates[currencyCodes[currency.trim()]] = parseFloat(rate);
        })
        _rates[this.options.base_currency] = 1.00
        return {
            base_currency: this.options.base_currency,
            rates: _rates
        }
    }
}