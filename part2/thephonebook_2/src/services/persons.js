import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const p = {
    name: "uknown",
    number: "839",
    id: "3993"
  }
  return axios.get(baseUrl).then(res => res.data.concat(p));
};

const create = (personObj) => {
  return axios.post(baseUrl, personObj).then(res => res.data);
}

const update = (id, personObj) => {
  return axios.put(`${baseUrl}/${id}`, personObj).then(res => res.data);
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
              .then(res => res.data)
              .catch(error => console.log(error));
}

export default { getAll, create, update, deletePerson };