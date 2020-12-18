import React, {Component} from 'react';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
//import "../material-dashboard.css";
import B2 from './B2';
import B3 from './B3';
import B4 from './B4';
import B5 from './B5';
import AuthService from "../../services/AuthService.js";

class Timesheet extends Component {

    constructor(props) {
      super(props);
      this.state = {
        date: null,
        currentUser: { username: "" },
        error: null,
        isLoaded: false,
        timesheet: null,
        dates: []
      };
      this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(startDate) {
      //e.preventDefault();
      //console.log("timesheet date change: " + date);
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
      this.setState({
        //date: startDate,
      });
    }

    componentDidMount () {
      const currentUser = AuthService.getCurrentUser();
      if (!currentUser) this.setState({ redirect: "/login" });
      //console.log("From Timesheet props: " + this.props.date);
      console.log("From Timesheet state: " + this.state.date);

      // axios.get( 'http://localhost:8081/timesheet/summary/Timesheet/' + username + '/' + date,
      //   { 
      //       headers: authHeader()
      //   })
      //       .then( response => {                
      //           console.log(response);
      //           this.setState( {
      //               timesheet: response.data,
      //               username: username,
      //               date: date,
      //           });
      //       } )
      //       .catch( err => {
      //           console.log("error is: " + err.data);
      //           this.setState({
      //               error: err,
      //           });
      //       } );

      this.setState({
        currentUser: currentUser,
        isLoaded: true,
        date: "2020-12-12"
      });
    }

    render() {
      const { currentUser, date } = this.state;
      const startDate = new Date(date);
      //startDate.setDate(startDate.getDate() + 1);
      return (
        <div class="main-content">
          <div class="container-fluid">
            
            <div class="row">
              <div class="col-lg-3 col-md-12">
                <B2 date={2020-12-12} userid={currentUser.username} />
              </div>
              <div class="col-lg-3 col-md-12">
                <B3 />
              </div>
              <div class="col-lg-2 col-md-12">
                <B4 />
              </div>
              <div class="col-lg-3 col-md-12">
                <B5 />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-12">
                <div/>
                <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={this.handleDateChange} />
              </div>
            </div>

          </div>
        </div>
      )
    }
}

export default Timesheet