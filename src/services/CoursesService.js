const API_URL = process.env.REACT_APP_API_URL;

export const getCourses = () => {
  return fetch (`${API_URL}/courses`,{
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((response) => response.json())

}