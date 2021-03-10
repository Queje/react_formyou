import Cookies from "js-cookie";

const API_URL = process.env.REACT_APP_API_URL;

export const getPromotions = () => {
  const token = Cookies.get("token");
  console.log("TOKEN", token);
  return fetch(`${API_URL}/promotions`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
};
