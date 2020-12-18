import axios from 'axios';
class TimesheetB3Service{

    getTimesheet(userid,weekending){
        let url = "http://localhost:8081/timesheet/getTimesheetByUseridAndWeekending/";
        return axios.get( url+userid+'/'+weekending );
    }

    updateTimesheet(data){
        let url="http://localhost:8081/timesheet/updateTimesheet";
        return axios.post( url,data);
    }

    
}
export default new TimesheetB3Service();