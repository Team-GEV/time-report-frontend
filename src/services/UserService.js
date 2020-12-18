import axios from 'axios';
import authHeader from './AuthHeader.js';

const API_URL2 = 'http://localhost:9999/api/test/';
class UserService {
    getPublicContent() {
      return axios.get(API_URL2 + 'all');
    }
  
    getUserBoard() {
      return axios.get(API_URL2 + 'user', { headers: authHeader() });
    }
  
    getSuperBoard() {
      return axios.get(API_URL2 + 'super', { headers: authHeader() });
    }
  
    getAdminBoard() {
      return axios.get(API_URL2 + 'admin', { headers: authHeader() });
    }
  }
  
  export default new UserService();