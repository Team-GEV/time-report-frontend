import axios from 'axios';
//import { Redirect } from "react-router-dom";
import authHeader from './AuthHeader';

class SummaryService{
    loadTimesheet(userid){
        let url = "http://localhost:8081/timesheet/summary/TimesheetList/";
        return axios.get( url + userid, { headers: authHeader() });
    }

    summaryClick(date, userid){
        localStorage.setItem('weekending', date);
        console.log("SummaryService: " + userid);
        // alert(weekending)
        window.location.href = "http://localhost:3000/timesheet#/timesheet";
        //return <Redirect to="/timesheet" />;
    }

}

export default new SummaryService();