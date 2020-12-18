import React, {Component} from 'react';
import A3 from './A3';


class Summary extends Component {

  componentDidMount () {
    ;
  }

  render() {
    return (
      <div class="main-content">
       <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            {/* col-lg-6 col-md-12 */}
              <div class="card">
                  <div class="card-header card-header-warning">
                      <h4 class="card-title">Summary</h4>
                  </div>
                  <div class="card-body table-responsive">
                      <table class="table table-hover">
                          <thead class="text-warning">
                              <th>WeekEnding</th>
                              <th>Total Hours</th>
                              <th>Submission Status</th>
                              <th>Approval Status</th>
                              <th>Option</th>
                              <th>Comment</th>
                          </thead>
                          
                          {/* <tbody>
                              <tr>
                              </tr>                              
                          </tbody> */}
                      </table>
                      {/* <A3 />
                      <A5 /> */}
                  </div>
                  <A3 />
                  {/* <A3 />
                  <A5 /> */}
              </div>
            </div>
       </div>
      </div>
    )
  }
}

export default Summary