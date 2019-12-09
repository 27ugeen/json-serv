axios.defolts.baseURL = 'http://localhost:4040';
axios.defolts.headers.post['Content-Type'] = 'aplication/json';
axios.defolts.headers.common['Authorization'] = AUT_TOKEN;

const fetchUsers = () => {
  return axios
    .get('/users', {
      headers: {
        Authorization: 'Beared super-token',
      },
    })
    .then(console.log)
    .catch(console.warn);
};

const fetchUsersById = userId => {
  return axios
    .get(`/users/${userId}`)
    .then(console.log)
    .catch(console.warn);
};
//POST

const addUser = (name, email) => {
  const body = { name, email };
  return axios
    .post(`/users/${userId}`, bogy)
    .then(console.log)
    .catch(console.warn);
};
//DELETE

const deleteUser = userId => {
  return axios
    .delete(`/users/${userId}`)
    .then(console.log)
    .catch(cosole.warning);
};
//PATCH

const updateUser = (userId, update) => {
  return axios
    .patch(`/users/${userId}`, update)
    .then(console.log)
    .catch(console.warning);
};
