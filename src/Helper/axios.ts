import axios from "axios";

 const instance = axios.create({
    baseURL: 'https://task-manager-backend-pramod.herokuapp.com/api/',
    // baseURL:"http://localhost:8000/api/",
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });


export default instance  