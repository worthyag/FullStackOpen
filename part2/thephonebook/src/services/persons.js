import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = (createdObj) => {
  const request = axios.post(baseUrl, createdObj);
  return request.then(response => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data).catch(error => console.log(error));
};

const updateNumber = (id, createdObj) => {
  const request = axios.put(`${baseUrl}/${id}`, createdObj);
  return request.then(response => response.data);
}

export default { getAll, create, deletePerson, updateNumber };