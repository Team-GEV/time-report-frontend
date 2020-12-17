import React, {Component} from 'react';
import ProfileServices from '../../services/ProfileServices.js';




class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
          //id: this.props.match.params.userid,
          error: null,
          isLoaded: false,
          employee:{
            address:{},
            emergency:{}},
            phone:'',
            email:'',
            line1:'',
            line2:'',
            city:'',
            state:'',
            zipcode:'',
            firstname1: '',
            firstname2: '',
            lastname1: '',
            lastname2: '',
            phone1: '',
            phone2: ''
        };
        
        
    }
    componentDidMount () {
        let userid = "1";
        ProfileServices.loadEmployee(userid)
            .then( response => {                
                console.log(response);
                
                this.setState( {
                    employee:response.data,
                    phone:response.data.phone,
                    email:response.data.email,
                    line1:response.data.address.line1,
                    line2:response.data.address.line2,
                    city:response.data.address.city,
                    state:response.data.address.state,
                    firstname1:response.data.emergency.firstname1,
                    firstname2:response.data.emergency.firstname2,
                    lastname1:response.data.emergency.lastname1,
                    lastname2:response.data.emergency.lastname2,
                    phone1:response.data.emergency.phone1,
                    phone2:response.data.emergency.phone2,
                  
                    

                });
            } )
            .catch( err => {
                console.log("error is: " + err.data);
                this.setState({
                    error: err,
                });
            } );
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
  
     saveProfile = (e) => {
        e.preventDefault();
        // create an object as request body
        let changedEmployee ={id:this.state.employee.id,
                              userid:this.state.employee.userid,
                              phone:this.state.phone,
                              email:this.state.email,
                              address:{line1:this.state.line1,
                                       line2:this.state.line2,
                                       city:this.state.city,
                                       state:this.state.state,
                                       zipcode:this.state.zipcode},
                              emergency:{firstname1:this.state.firstname1,
                                         firstname2:this.state.firstname2,
                                         lastname1:this.state.lastname1,
                                         lastname2:this.state.lastname2,
                                         phone1:this.state.phone1,
                                         phone2:this.state.phone2}
                            }
    
        ProfileServices.updateEmployee(changedEmployee)
            .then(res => {
              alert("Your profile is being updated!")
              console.log("updated");
            });
    }

    render() {
        const employee  = this.state.employee;
        
      
        return (
            <div class="card">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <div class="card-header card-header-warning">
                    <h4 class="card-title">Profile</h4>
                </div>
                </div>
                <div class="card-body">
                    
                    <div class="tab-content">
                    
                        <div class="tab-pane active" id="profile">
                            <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                
                          <form onSubmit={this.saveProfile} >
                          <div class="group">     
                          <label class="form-label">Contact</label>
                                <input
                                class="form-control"
                                  type='text'
                                  name="phone"
                                  defaultValue={employee.phone}
                                  onChange={this.onChange}
                                />
                            </div>   
                        
                                <input
                                class="form-control"
                                  defaultValue={employee.email}                                  
                                  type='email'
                                  name='email'
                                  onChange={this.onChange}
                                />
                                <input
                                class="form-control"
                                  defaultValue={employee.address.line1}
                                  type='text'
                                  name='line1'
                                  onChange={this.onChange}
                                />
                                
                                <input
                                class="form-control"
                                  defaultValue={employee.address.line2}
                                  type='text'
                                  name='line2'
                                  onChange={this.onChange}
                                />

                               <input
                               class="form-control"
                                  defaultValue={employee.address.city}
                                  type='text'
                                  name='city'
                                  onChange={this.onChange}
                                />

                                <input
                                class="form-control"
                                  defaultValue={employee.address.state}
                                  type='text'
                                  name='state'
                                  onChange={this.onChange}
                                />

                                <input
                                class="form-control"
                                  defaultValue={employee.address.zipcode}
                                  type='text'
                                  name='zipcode'
                                  onChange={this.onChange}
                                />

                            <label>Emergency Contact 1</label>
                                <input
                                class="form-control"
                                  defaultValue={employee.emergency.firstname1}
                                  type='text'
                                  name='firstname1'
                                  onChange={this.onChange}
                                />
                                <input
                                class="form-control"
                                  defaultValue={employee.emergency.lastname1}
                                  type='text'
                                  name='lastname1'
                                  onChange={this.onChange}
                                />
                                <div></div>
                                <input
                                class="form-control"
                                  defaultValue={employee.emergency.phone1}
                                  type='text'
                                  name='phone1'
                                  onChange={this.onChange}
                                />

                                <label>Emergency Contact 2</label>
                                <input
                                class="form-control"
                                  defaultValue={employee.emergency.firstname2}
                                  type='text'
                                  name='firstname2'
                                  onChange={this.onChange}
                                />
                                <input
                                class="form-control"
                                  defaultValue={employee.emergency.lastname2}
                                  type='text'
                                  name='lastname2'
                                  onChange={this.onChange}
                                />
                                <div></div>
                                <input
                                class="form-control"
                                  defaultValue={employee.emergency.phone2}
                                  type='text'
                                  name='phone2'
                                  onChange={this.onChange}
                                />
                                <div></div>
                              <button className="btn btn-success" onClick={this.saveProfile}>Update</button>
                          </form>
                        </div>  
                        </div>
                        </div> 
                        
                        
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Info