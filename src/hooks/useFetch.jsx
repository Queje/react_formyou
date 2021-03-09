import { useState } from "react";

const useFetch = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = (path, next = false, previousResults) => {
    setIsLoading(true);
    setError(null);

    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setError("Une erreur est survenue");
        }
      })
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    data,
    error,
    isLoading,
    get,
  };
};
export default useFetch;
