/* eslint-disable react/prop-types */

import { useId } from "react";

function InputBox({
    label,
    selectAmount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    // console.log('onAmountChange', onAmountChange, amount)
    console.log('currencyOptions', currencyOptions)

    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2 ">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block ">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 "
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={selectAmount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right ">
                <p className="text-black/40 mb-2 w-full ">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none "
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    // onCurrencyChange is a function passed here which will get "e.target.value" as a parameter and will change the state, and that state is passed to the value as selectCurrency
                    value={selectCurrency}
                    disabled={currencyDisable}
                >
                    {
                        currencyOptions.map((currency) => (// currencyOptions is an array                            
                            <option key={currency} value={currency} >{currency}</option>
                        ))
                    }
                </select>
            </div>
        </div >
    );
}

export default InputBox;

