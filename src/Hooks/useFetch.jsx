import { useState } from "react";
import Cookies from "js-cookie";

const useFetch = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = (query) => {
    setIsLoading(true);
    setError(null);

    fetch(API_URL + query, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setError("An expected error occurred.");
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

  const patch = (query, userData) => {
    setIsLoading(true);
    setError(null);

    fetch(API_URL + query, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setError("An expected error occurred.");
        }
      })
      .then((response) => {
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
    patch,
  };
};
export default useFetch;