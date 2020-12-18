import React, {Component} from 'react';
//import "../material-dashboard.css";
import B3 from './B3';


class Timesheet extends Component {

    componentDidMount () {
      ;
    }

    render() {
      return (
        <div class="main-content">
          <div class="container-fluid">
            <div class="row">
              
              <div >
                <B3 />
              </div>
              
             
            </div>
          </div>
        </div>
      )
    }
}

export default Timesheet