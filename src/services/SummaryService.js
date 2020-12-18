import axios from 'axios';

class SummaryService{
    loadTimesheet(userid){
        let url = "http://localhost:8081/timesheet/getTimesheetListByUserid/";
        return axios.get( url + userid);
    }

    summaryClick(weekending){
        localStorage.setItem('weekending', weekending);
        // alert(weekending)
        window.location.href = "http://localhost:3000/timesheet#/timesheet";
    }

}

export default new SummaryService();