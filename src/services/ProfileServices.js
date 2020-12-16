import axios from 'axios';

class ProfileServices{
    loadEmployee(userid){
        let url = "http://localhost:8081/timesheet/getEmployeeByUserid/";
        return axios.get( url + userid);
    }

    updateEmployee(data){
        let url ="http://localhost:8081/timesheet/updateEmployee";
        return axios.post( url,data);
    }
}

export default new ProfileServices();