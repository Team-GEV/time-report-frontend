import React, {Component} from 'react';
import TimesheetB3Service from '../../services/TimesheetB3Service.js';


const startOption = [
    { label: "", value: -1},
    { label: "N/A", value: -1},
    { label: "0:00", value: 0 },
    { label: "1:00", value: 1 },
    { label: "2:00", value: 2 },
    { label: "3:00", value: 3 },
    { label: "4:00", value: 4 },
    { label: "5:00", value: 5 },
    { label: "6:00", value: 6 },
    { label: "7:00", value: 7 },
    { label: "8:00", value: 8 },
    { label: "9:00", value: 9 },
    { label: "10:00", value: 10 },
    { label: "11:00", value: 11 },
    { label: "12:00", value: 12 },
    { label: "13:00", value: 13 },
    { label: "14:00", value: 14 },
    { label: "15:00", value: 15 },
    { label: "16:00", value: 16 },
    { label: "17:00", value: 17 },
    { label: "18:00", value: 18 },
    { label: "19:00", value: 19 },
    { label: "20:00", value: 20 },
    { label: "21:00", value: 21 },
    { label: "22:00", value: 22 },
    { label: "23:00", value: 23 }
  ];

  const endOption = [
    { label: "", value: -1},
    { label: "N/A", value: -1},
    { label: "1:00", value: 1 },
    { label: "2:00", value: 2 },
    { label: "3:00", value: 3 },
    { label: "4:00", value: 4 },
    { label: "5:00", value: 5 },
    { label: "6:00", value: 6 },
    { label: "7:00", value: 7 },
    { label: "8:00", value: 8 },
    { label: "9:00", value: 9 },
    { label: "10:00", value: 10 },
    { label: "11:00", value: 11 },
    { label: "12:00", value: 12 },
    { label: "13:00", value: 13 },
    { label: "14:00", value: 14 },
    { label: "15:00", value: 15 },
    { label: "16:00", value: 16 },
    { label: "17:00", value: 17 },
    { label: "18:00", value: 18 },
    { label: "19:00", value: 19 },
    { label: "20:00", value: 20 },
    { label: "21:00", value: 21 },
    { label: "22:00", value: 22 },
    { label: "23:00", value: 23 },
    { label: "00:00", value: 24 },
  ];
    
  function caculateTotalHour(starttime,endtime) {
    const total= endtime-starttime
    if (total<0){
         
        alert("invalid time! please check your option.")
        return 0
    }else{
        return total
    }
  };

  function compensatedhours(){
  }

  function totalhours(day1Total,day2Total,day3Total,day4Total,day5Total,day6Total,day7Total){
      const Total = day1Total+day2Total+day3Total+day4Total+day5Total+day6Total+day7Total;
      return Total
}

  
class B3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            timesheet:{ptos:[],day1:{},day2:{},day3:{},day4:{},day5:{},day6:{},day7:{}},
            day1Start:-1, day1End:-1, day1Total:"",day1usefloating:"",day1usevacation:"",
            day2Start:9, day2End:18, day2Total:"",day2usefloating:"",day2usevacation:"",
            day3Start:9, day3End:18, day3Total:"",day3usefloating:'',day3usevacation:"",
            day4Start:9, day4End:18, day4Total:"",day4usefloating:"",day4usevacation:"",
            day5Start:9, day5End:18, day5Total:"",day5usefloating:"",day5usevacation:"",
            day6Start:9, day6End:18, day6Total:"",day6usefloating:"",day6usevacation:"",
            day7Start:-1, day7End:-1, day7Total:"",day7usefloating:"",day7usevacation:"",
            totalhours:0, 
            totalcompensatedhours:0
        }
    };

    componentDidMount () {
        let userid = "base";
        let weekending ="2020-12-12";
        TimesheetB3Service .getTimesheet(userid,weekending)
        .then( response => {                
            console.log(response);
            this.setState({
                timesheet:response.data,
                totalhours:response.data.totalhours,
                totalcompensatedhours:response.data.totalcompensatedhours,

                day1Start:response.data.day1.starttime,
                day1End:response.data.day1.endtime,
                day1Total:response.data.day1.total,
                day1usefloating:response.data.day1.usefloating,
                day1usevacation:response.data.day1.usevacation,

                day2Start:response.data.day2.starttime,
                day2End:response.data.day2.endtime,
                day2Total:response.data.day2.total,
                day2usefloating:response.data.day2.usefloating,
                day2usevacation:response.data.day2.usevacation,

                day3Start:response.data.day3.starttime,
                day3End:response.data.day3.endtime,
                day3Total:response.data.day3.total,
                day3usefloating:response.data.day3.usefloating,
                day3usevacation:response.data.day3.usevacation,

                day4Start:response.data.day4.starttime,
                day4End:response.data.day4.endtime,
                day4Total:response.data.day4.total,
                day4usefloating:response.data.day4.usefloating,
                day4usevacation:response.data.day4.usevacation,

                day5Start:response.data.day5.starttime,
                day5End:response.data.day5.endtime,
                day5Total:response.data.day5.total,
                day5usefloating:response.data.day5.usefloating,
                day5usevacation:response.data.day5.usevacation,

                day6Start:response.data.day6.starttime,
                day6End:response.data.day6.endtime,
                day6Total:response.data.day6.total,
                day6usefloating:response.data.day6.usefloating,
                day6usevacation:response.data.day6.usevacation,

                day7Start:response.data.day7.starttime,
                day7End:response.data.day7.endtime,
                day7Total:response.data.day7.total,
                day7usefloating:response.data.day7.usefloating,
                day7usevacation:response.data.day7.usevacation,
            })

        })  
        .catch( err => {
            console.log("error is: " + err.data);
            this.setState({
                error: err,
            });
        } );
        
      };

      handleCheckChange =(event) =>{
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
      console.log(name,value)
    }

    handleSelectChange=(event) =>{ 
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name,event.target.value)
    }

    saveTimesheet = (e) =>{
        e.preventDefault();
        let changedTimesheet={
            id: this.state.timesheet.id,
            userid:this.state.timesheet.userid,
            weekending: this.state.timesheet.weekending,
            totalhours: totalhours(this.state.day1Total,this.state.day2Total,this.state.day3Total,this.state.day4Total,this.state.day5Total,this.state.day6Total,this.state.day7Total),
            totalcompensatedhours: this.state.timesheet.totalcompensatedhours,
            submission: this.state.timesheet.submission,
            approval: this.state.timesheet.approval,
            option: this.state.timesheet.option,
            comment: this.state.timesheet.comment,
            day1:{
                starttime:this.state.day1Start,
                endtime:this.state.day1End,
                total:caculateTotalHour(this.state.day1Start,this.state.day1End),
                usefloating:this.state.day1usefloating,
                usevacation:this.state.day1usevacation,
                year:this.state.timesheet.day1.year
            },
            day2:{
                starttime:this.state.day2Start,
                endtime:this.state.day2End,
                total:caculateTotalHour(this.state.day2Start,this.state.day2End),
                usefloating:this.state.day2usefloating,
                usevacation:this.day2usevacation,
                year:this.state.timesheet.day2.year
            },
            day3:{
                starttime:this.state.day3Start,
                endtime:this.state.day3End,
                total:caculateTotalHour(this.state.day3Start,this.state.day3End),
                usefloating:this.state.day3usefloating,
                usevacation:this.state.day3usevacation,
                year:this.state.timesheet.day3.year
            },
            day4:{
                starttime:this.state.day4Start,
                endtime:this.state.day4End,
                total:caculateTotalHour(this.state.day4Start,this.state.day4End),
                usefloating:this.state.day4usefloating,
                usevacation:this.state.day4usevacation,
                year:this.state.timesheet.day4.year
            },
            day5:{
                starttime:this.state.day5Start,
                endtime:this.state.day5End,
                total:caculateTotalHour(this.state.day5Start,this.state.day5End),
                usefloating:this.state.day5usefloating,
                usevacation:this.state.day5usevacation,
                year:this.state.timesheet.day5.year
            },
            day6:{
                starttime:this.state.day6Start,
                endtime:this.state.day6End,
                total:caculateTotalHour(this.state.day6Start,this.state.day6End),
                usefloating:this.state.day6usefloating,
                usevacation:this.state.day6usevacation,
                year:this.state.timesheet.day6.year
            },
            day7:{
                starttime:this.state.day7Start,
                endtime:this.state.day7End,
                total:caculateTotalHour(this.state.day7Start,this.state.day7End),
                usefloating:this.state.day7usefloating,
                usevacation:this.state.day7usevacation,
                year:this.state.timesheet.day7.year
            }

        }
        TimesheetB3Service.updateTimesheet(changedTimesheet)
        .then(res => {
          alert("Your profile is being updated!")
          console.log("updated");
        });
        
    }
    
    
       
  render() {
    
    return (
    
    


    <div class="card">
        <div class="card-header card-header-warning">
            <h4 class="card-title">B3</h4>
        </div>
        <div class="card-body table-responsive">
            <li>Total Compensated Hour: {this.state.totalcompensatedhours}</li>
            <li>Total Billing Hour: {totalhours(this.state.day1Total,this.state.day2Total,this.state.day3Total,this.state.day4Total,this.state.day5Total,this.state.day6Total,this.state.day7Total)}</li>
        </div>
        <div class="card-body table-responsive">
        <table >
            <tr>
                <th>Starting Time</th>
                <th>Ending Time</th>
                <th>Total Hours</th>
                <th>Floating Day</th>
                <th>Vacation</th>
                <th>Holiday</th>
            </tr>
            <tbody>
                
                <tr>
                    <td> {this.state.day1Start}:00
                        <select name="day1Start" value="this.day1Start" onChange={this.handleSelectChange}>
                            {startOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {this.state.day1End}:00
                        <select name="day1End" value="this.day1End" onChange={this.handleSelectChange}>
                            {endOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> 
                        {caculateTotalHour(this.state.day1Start,this.state.day1End)}
                    </td>
                    <td>
                    <input type ="checkbox" name="day1usefloating" 
                            checked={this.state.day1usefloating}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                    <td>
                    <input type ="checkbox" name="day1usevacation"
                            checked={this.state.day1usevacation}
                            onChange={this.handleCheckChange}
                            />
                    </td>

                </tr>

                <tr>
                    <td> {this.state.day2Start}:00
                    <select name="day2Start" value="this.day2Start" onChange={this.handleSelectChange}
                    >
                    {startOption.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                    </select>
                    </td>
                    <td> {this.state.day2End}:00
                        <select name="day2End" value="this.day2End" onChange={this.handleSelectChange}>
                            {endOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {caculateTotalHour(this.state.day2Start,this.state.day2End)}</td>
                    <td>
                    <input type ="checkbox" name="day2usefloating" 
                            checked={this.state.day2usefloating}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                    <td>
                    <input type ="checkbox" name="day2usevacation"
                            checked={this.day2usevacation}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                </tr>
                <tr>
                <td> {this.state.day3Start}:00
                        <select name="day3Start" value="this.day3Start" onChange={this.handleSelectChange}>
                            {startOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {this.state.day3End}:00
                        <select name="day3End" value="this.day3End" onChange={this.handleSelectChange}>
                            {endOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {caculateTotalHour(this.state.day3Start,this.state.day3End)}</td>
                    <td>
                    <input type ="checkbox" name="day3usefloating" 
                            checked={this.state.day3usefloating}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                    <td>
                    <input type ="checkbox" name="day3usevacation"
                            checked={this.state.day3usevacation}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                </tr>
                <tr>
                <td> {this.state.day4Start}:00
                        <select name="day4Start" value="this.day4Start" onChange={this.handleSelectChange}>
                            {startOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {this.state.day4End}:00
                        <select name="day4End" value="this.day4End" onChange={this.handleSelectChange}>
                            {endOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {caculateTotalHour(this.state.day4Start,this.state.day4End)}</td>
                    <td>
                    <input type ="checkbox" name="day4usefloating" 
                            checked={this.state.day4usefloating}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                    <td>
                    <input type ="checkbox" name="day4usevacation"
                            checked={this.state.day4usevacation}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                </tr>
                <tr>
                <td> {this.state.day5Start}:00
                        <select name="day5Start" value="this.day5Start" onChange={this.handleSelectChange}>
                            {startOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {this.state.day5End}:00
                        <select name="day5End" value="this.day5End" onChange={this.handleSelectChange}>
                            {endOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {caculateTotalHour(this.state.day5Start,this.state.day5End)}</td>
                    <td>
                    <input type ="checkbox" name="day5usefloating" 
                            checked={this.state.day5usefloating}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                    <td>
                    <input type ="checkbox" name="day5usevacation"
                            checked={this.state.day5usevacation}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                </tr>
                <tr>
                <td> {this.state.day6Start}:00
                        <select name="day6Start" value="this.day6Start" onChange={this.handleSelectChange}>
                            {startOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {this.state.day6End}:00
                        <select name="day6End" value="this.day6End" onChange={this.handleSelectChange}>
                            {endOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {caculateTotalHour(this.state.day6Start,this.state.day6End)}</td>
                    <td>
                    <input type ="checkbox" name="day6usefloating" 
                            checked={this.state.day6usefloating}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                    <td>
                    <input type ="checkbox" name="day6usevacation"
                            checked={this.state.day6usevacation}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                </tr>
                <tr>
                <td> {this.state.day7Start}:00
                        <select name="day7Start" value="this.day7Start" onChange={this.handleSelectChange}>
                            {startOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {this.state.day7End}:00
                        <select name="day7End" value="this.day7End" onChange={this.handleSelectChange}>
                            {endOption.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </td>
                    <td> {caculateTotalHour(this.state.day7Start,this.state.day7End)}</td>
                    <td>
                    <input type ="checkbox" name="day7usefloating" 
                            checked={this.state.day7usefloating}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                    <td>
                    <input type ="checkbox" name="day7usevacation"
                            checked={this.state.day7usevacation}
                            onChange={this.handleCheckChange}
                            />
                    </td>
                </tr>
            </tbody>
        </table>
        <button className="btn btn-success" onClick={this.saveTimesheet}>Save</button>
        </div>
    </div>
    )
  }
}

export default B3