const URL = 'http://localhost:4040/users';
//GET
const fetchUsers = () => {
  return fetch(URL)
    .then(respons => respons.json())
    .then(console.log)
    .catch(console.warn);
};

const fetchUsersById = userId => {
  return fetch(URL + userId)
    .then(respons => respons.json())
    .then(console.log)
    .catch(console.warn);
};

//POST

const addUser = (name, email) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json',
      Accept: 'aplication/json',
    },
    body: JSON.stringify({ name, email }),
  };
  return fetch(URL, options)
    .then(response => response.json())
    .then(console.log)
    .catch(console.warn);
};
//DELETE

const deleteUser = userId => {
  const options = {
    method: 'DELETE',
  };
  return fetch(URL + userId, options)
    .then(response => response.json())
    .then(console.log)
    .catch(cosole.warning);
};
//PUT

//PATCH

const updateUser = (userId, update) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'aplication/json',
    },
    body: JSON.stringify(update),
  };
  return fetch(URL + userId, options)
    .then(response => response.json())
    .then(console.log)
    .catch(console.warning);
};
