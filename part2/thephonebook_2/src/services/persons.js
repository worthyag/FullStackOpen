import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then(res => res.data);
};

const create = (personObj) => {
  return axios.post(baseUrl, personObj).then(res => res.data);
}

const update = (id, personObj) => {
  return axios.put(`${baseUrl}/${id}`, personObj).then(res => res.data);
}

export default { getAll, create, update };