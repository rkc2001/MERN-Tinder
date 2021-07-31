/* Package that makes http requests very simple */
import axios from 'axios'

//(a) create an instance
const instance = axios.create({
  baseURL: 'https://tinder-23-backend.herokuapp.com/'
});

export default instance;