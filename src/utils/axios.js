import axios from 'axios';

let token = localStorage.getItem("token");

const instance = axios.create({
    baseURL: 'http://test-alpha.reestrdoma.ru/api',
});

instance.interceptors.request.use((config) => {
     config.headers.Authorization = token ? 'Bearer '+token : '';
     return config;
},err => console.log(err));

// instance.interceptors.response.use((config) => {
//      document.getElementById('')
//      return config;
// },err => console.log(err));


export default instance;