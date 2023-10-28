import { currencies, countries } from "./CountryList";

export function getCountryCodeFromCurrency(currencyCode) {
    for (const code in currencies) {
        if (currencies[code] === currencyCode) {
            return countries[code];
        }
    }
    return null;
}

export function getExchangeRate(fromCurrency, toCurrency) {
    const url = `https://v6.exchangerate-api.com/v6/8472b3b2c7c46f83023abb41/latest/${fromCurrency}`;
    return fetch(url)
        .then((res) => {
            if (res.status !== 200) {
                console.log("Failed to Load Data");
            }
            return res.json();
        })
        .then((result) => {
            const Rate = result.conversion_rates[toCurrency];
            return parseFloat(Rate);
        })
        .catch((error) => {
            console.error('Error fetching currency data:', error);
        });
}
