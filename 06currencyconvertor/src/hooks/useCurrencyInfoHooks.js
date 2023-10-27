import axios from "axios";
import React, { useEffect, useState } from "react";

function useCurrencyInfoHooks(currency = "usd") {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
      .then((res) => {
        console.log(res);
        setData((prevItems) => ({
          ...prevItems,
          currency: res.data[currency],
        }));
      })
      .catch(() => console.log("Error"));
  }, [currency]);

  return data.currency;
}

export default useCurrencyInfoHooks;
