const API_URL = process.env.REACT_APP_API_URL;

export const getCategoriesCourses = (id) => {
  return fetch (`${API_URL}/categories/${id}`,{
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((response) => response.json())
}