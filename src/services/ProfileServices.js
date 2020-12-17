import axios from 'axios';
import authHeader from './AuthHeader';

class ProfileServices{
    loadEmployee(userid){
        let url = "http://localhost:8081/timesheet/getEmployeeByUserid/";
        return axios.get( url + userid, { headers: authHeader() });
    }

    updateEmployee(data){
        let url ="http://localhost:8081/timesheet/updateEmployee";
        return axios.post(url,data, { headers: authHeader() });
    }
}

export default new ProfileServices();