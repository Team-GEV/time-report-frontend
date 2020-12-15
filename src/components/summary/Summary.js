import React, {Component} from 'react';
import axios from 'axios';

class Summary extends Component {

  componentDidMount () {
    ;
  }

  render() {
    return (
      <div class="main-content">
       <h2>Summary component</h2>
       <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="card">
                  <div class="card-header card-header-warning">
                      <h4 class="card-title">Emergency Contacts</h4>
                  </div>
                  <div class="card-body table-responsive">
                      <table class="table table-hover">
                          <thead class="text-warning">
                              <th>Name</th>
                              <th>Phone</th>
                              <th>Email</th>
                          </thead>
                          <tbody>
                              <tr>
                              </tr>                              
                          </tbody>
                      </table>
                  </div>
              </div>
            </div>
       </div>
      </div>
    )
  }
}

export default Summary