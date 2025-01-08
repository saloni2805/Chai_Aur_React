import { useState } from "react";
import { useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    console.log('curency', currency)
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    console.log('dataaa', data)

    return data;
}

export default useCurrencyInfo;