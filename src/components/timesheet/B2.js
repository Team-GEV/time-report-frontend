import React, {Component} from 'react';
import axios from 'axios';
import authHeader from '../../services/AuthHeader.js';

class B2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          date: null,
          username: null,
          error: null,
          isLoaded: false,
          timesheet: null,
          dates: [] 
        };
        this.handleClick = this.handleClick.bind(this);
        this.getMonday = this.getMonday.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        // let firstname = "Alice";
        // let url = "http://localhost:8081/timesheet/byFirstname";
        // axios.post(url, {firstname})
        //     .then(response => {
        //         console.log(response);
        //         console.log(response.data);
        //     })
        //     .catch(err => {
        //         console.log(err.response.data.error);
        //     });
    }

    getMonday(inputDate) {
        let d = new Date(inputDate);
        console.log("From B2 getMonday: " + d);
        let out = [];
        
        // set to "Sunday" for the previous week
        d.setDate(d.getDate() - (d.getDay() || 7)); // if getDay is 0 (Sunday), take 7 days
        for (let i = 0; i < 7; i++) { // note, the value of i is unused
          out.push(new Date(d.setDate(d.getDate() + 1))); // increment by one day
        }
        return out;
      }

    componentDidMount () {
        console.log("From B2 props date: " + this.props.date);
        console.log("From B2 props userid: " + this.props.userid);
        const username = this.props.userid;
        const date = this.props.date;
        const dates = this.getMonday(date);
        console.log("From B2 dates: " + dates);
        axios.get( 'http://localhost:8081/timesheet/summary/Timesheet/' + username + '/' + date,
        { 
            headers: authHeader()
        })
            .then( response => {                
                console.log(response);
                this.setState( {
                    timesheet: response.data,
                    username: username,
                    date: date,
                    dates: dates
                });
            } )
            .catch( err => {
                console.log("error is: " + err.data);
                this.setState({
                    error: err,
                });
            } );
    }


    render() {
        const { timesheet, dates } = this.state;
        //console.table(timesheets);
        // {timesheets.map((timesheet) => (
        //     <tr key="{timesheet.weekending}">
        //     <td><label>{timesheet.weekending}</label></td>                              
        //     </tr>
        //     ))}
        return (
            <div class="card">
                <div class="card-header card-header-warning">
                    <h4 class="card-title">Profile</h4>
                </div>
                <div class="card-body">
                    <div class="tab-content">
                        <div class="tab-pane active" id="profile">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td><label>Sunday</label></td>
                                        <td><label>{dates[0]}</label></td>                  
                                    </tr>
                                    <tr>
                                        <td><label>Monday</label></td>
                                        <td><label>{dates[1]}</label></td>                             
                                    </tr>
                                    <tr>
                                        <td><label>Tuesday</label><label>{dates[2]}</label></td>
                                        <td><label>{dates[2]}</label></td>                             
                                    </tr>
                                    <tr>
                                        <td><label>Wednesday</label></td>
                                        <td><label>{dates[0]}</label></td>                              
                                    </tr>
                                    <tr>
                                        <td><label>Thursday</label></td>
                                        <td><label>{dates[0]}</label></td>                           
                                    </tr>
                                    <tr>
                                        <td><label>Friday</label></td>
                                        <td><label>{dates[0]}</label></td>                            
                                    </tr>
                                    <tr>
                                        <td><label>Saturday</label></td>
                                        <td><label>{dates[0]}</label></td>                             
                                    </tr>                        
                                </tbody>
                            </table>
                        </div>  
                        <button onClick={this.handleClick} type="button" class="btn btn-success">Update</button>
                        <button type="button" class="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default B2