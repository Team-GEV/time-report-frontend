import axios from 'axios';
class TimesheetB3Service{

    getTimesheet(userid,weekending){
        let url = "http://localhost:8081/timesheet/summary/Timesheet/";
        return axios.get( url+userid+'/'+weekending,{ headers: authHeader() } );
    }

    updateTimesheet(data){
        let url="http://localhost:8081/timesheet/summary/updateTimesheet";
        return axios.post( url,data,{ headers: authHeader() });
    }

    
}
export default new TimesheetB3Service();