import React, {Component} from 'react';
//import "../material-dashboard.css";
import B2 from './B2';
import B3 from './B3';
import B4 from './B4';
import B5 from './B5';

class Timesheet extends Component {

    componentDidMount () {
      ;
    }

    render() {
      return (
        <div class="main-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-md-12">
                <B2 />
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
          </div>
        </div>
      )
    }
}

export default Timesheet