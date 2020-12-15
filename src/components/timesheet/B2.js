import React, {Component} from 'react';
import axios from 'axios';

class B2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          //id: this.props.match.params.userid,
          error: null,
          isLoaded: false,
          timesheets: [] 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let firstname = "Test";
        let url = "http://localhost:8081/timesheet/byFirstname";
        axios.post(url, {firstname})
            .then(response => {
                console.log(response);
                console.log(response.data);
            })
            .catch(err => {
                console.log(err.response.data.error);
            });
    }

    componentDidMount () {
        axios.get( 'http://localhost:8081/timesheet/all' )
            .then( response => {                
                console.log(response);
                this.setState( {
                    timesheets: response.data,
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
        const { timesheets } = this.state;
        //console.table(timesheets);

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
                                    {timesheets.map((timesheet) => (
                                        <tr>
                                        <td><label>{timesheet.firstname}</label></td>                              
                                        </tr>
                                        ))}                               
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