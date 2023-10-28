'use client';
import React, { useState, useEffect } from 'react';
import { currencies, countries } from './CountryList';
import { getCountryCodeFromCurrency, getExchangeRate } from './CurrencyUtils';
import { CgArrowsExchangeV } from 'react-icons/cg';
import ReactCountryFlag from 'react-country-flag';
const Converter = () => {
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('PKR');
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchnageRate] = useState(0);
    useEffect(() => {
        getExchangeRate(fromCurrency, toCurrency)
            .then((parsedExchangeRate) => {
                setExchnageRate(parsedExchangeRate);
            });
    }, [fromCurrency, toCurrency, amount]);


    return (
        <div>
            <div className='bg-white p-4 rounded-3xl w-[90%] mx-auto flex flex-col gap-4 '>
                <div className='flex flex-col gap-4 w-full'>
                    <label className='text-custom-purple text-xl'>Amount</label>
                    <div className='flex justify-center gap-2'>
                        <ReactCountryFlag
                            countryCode={getCountryCodeFromCurrency(fromCurrency)}
                            svg
                            style={{
                                width: '3em', // You can adjust the size of the flag
                                height: '3em',
                            }}
                        />
                        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}
                            className='text-custom-purple font-semibold border text-xl rounded-md'
                        >
                            {currencies.map((countryCode) => (
                                <option key={countryCode} value={countryCode}>
                                    {countryCode}
                                </option>
                            ))}
                        </select>
                        <div>
                            <input className='border bg-gray-50 text-xl font-semibold px-4 py-2 w-[200px]' value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>

                    </div>
                </div>

                <div className='flex justify-center'>
                    <CgArrowsExchangeV className='text-4xl font-bold bg-custom-purple rounded-full text-white' />
                </div>

                <div className='flex flex-col gap-4 w-full'>
                    <label className='text-xl'>Converted Amount</label>
                    <div className='flex justify-center gap-2'>
                        <ReactCountryFlag
                            countryCode={getCountryCodeFromCurrency(toCurrency)}
                            svg
                            style={{
                                width: '3em',
                                height: '3em',
                            }}
                        />
                        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}
                            className='text-custom-purple font-semibold border text-xl rounded-md'  >
                            {currencies.map((countryCode) => (
                                <option key={countryCode} value={countryCode}>
                                    {countryCode}
                                </option>
                            ))}
                        </select>
                        <p className='text-xl font-semibold bg-custom-purple text-white px-4 py-2 w-[200px] overflow-hidden whitespace-no-wrap'>  {(exchangeRate * amount).toFixed(4)}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col text-xl gap-2 mt-6 w-[90%] mx-auto'>
                <p>Indicative Exchange Rate</p>
                <p className='text-2xl font-bold'>1 <span>{fromCurrency}</span> = <span>{exchangeRate} {toCurrency}</span></p>
            </div>
        </div>
    )
}

export default Converter
