import React, {Component} from 'react';
import SummaryService from '../../services/SummaryService';
import Summarybyline from './summarybyline';
import AuthService from "../../services/AuthService.js";
import { Redirect } from "react-router-dom";

class A3 extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            redirect: null,
            isLoaded: false,
            summarys: [],
            showmore: false,
            username: null,
            cap : 2
        }
        this.handleClick = this.handleClick.bind(this);
        // this.summaryClick = this.summaryClick.bind(this);
    }

    componentDidMount () {
        const user = AuthService.getCurrentUser();
        if (!user) this.setState({ redirect: "/login" });
        let userid = user.username;
        SummaryService.loadTimesheet(userid)
            .then( response => {
                console.log(response);

                this.setState({
                    summarys:response.data,
                    username: userid,
                })
            })
    }

    handleClick(e) {
        e.preventDefault();
        
        // alert(this.state.cap === 3)
        if(!this.state.showmore){
            this.setState({
                showmore : true,
                cap : this.state.summarys.length,
            })
        }else{
            this.setState({
                showmore : false,
                cap : 2,
            })
        }
        // this.render();
    }



  render() {
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
    }
    const { username } = this.state;
    return (
    <div class="card">
        
        <div class="card-body table-responsive">
            <table class="table table-hover">
                {
                    this.state.summarys.slice(0,this.state.cap).map((summarybyline)=>{
                        
                        return (<Summarybyline userid={username}
                            weekending={summarybyline.weekending}
                            totalhours={summarybyline.totalhours}
                            submission={summarybyline.submission}
                            approval={summarybyline.approval}
                            option={summarybyline.option}
                            comment={summarybyline.comment}
                            >{summarybyline.userid}</Summarybyline>)
                    })
                }
            </table>
        </div>
        <br/><br/>
        <button onClick={this.handleClick} type="button" id='show' class="btn btn-success">{
            this.state.showmore ? (<span>Show Less</span>) : (<span>Show More</span>)
        }</button>
    </div>
    )
  }
}

export default A3