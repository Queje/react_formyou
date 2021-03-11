import { useState } from "react";
import Cookies from "js-cookie";
import {
  displaySuccess,
} from "stores/Flashmessages/flashMiddleware";
import { useDispatch } from "react-redux";

const useFetch = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

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
          setError("An unexpected error occurred.");
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
          dispatch(displaySuccess("Edit successfull!"));
          return response.json();
        } else {
          setError("An unexpected error occurred.");
        }
      })
      .then((response) => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const destroy = (query) => {
    setIsLoading(true);
    setError(null);

    fetch(API_URL + query, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(displaySuccess("Delete successfull!"));
          return response.json();
        } else {
          setError("Une erreur est survenue");
        }
      })
      .then((response) => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const post = (query, userData) => {
    setIsLoading(true);
    setError(null);

    fetch(API_URL + query, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(displaySuccess("Creation successfull!"));
          return response.json();
        } else {
          setError("Une erreur est survenue");
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
    destroy,
    post,
  };
};
export default useFetch;
