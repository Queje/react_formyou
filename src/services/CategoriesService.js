const API_URL = process.env.REACT_APP_API_URL;

export const getCategories = () => {
  return fetch (`${API_URL}/categories`,{
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((response) => response.json())

}