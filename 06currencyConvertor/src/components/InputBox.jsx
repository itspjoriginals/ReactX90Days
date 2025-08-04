import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white/80 p-4 rounded-lg text-sm flex items-end gap-4 shadow-sm ${className}`}>
      {/* Amount Input */}
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-gray-700 font-medium mb-1 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-gray-100 text-gray-900 px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      {/* Currency Dropdown */}
      <div className="w-1/2">
        <label className="text-gray-700 font-medium mb-1 inline-block">
          Currency
        </label>
        <select
          className="w-full bg-gray-100 text-gray-900 px-3 py-2 rounded-md border border-gray-300 cursor-pointer focus:ring-2 focus:ring-blue-500"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
