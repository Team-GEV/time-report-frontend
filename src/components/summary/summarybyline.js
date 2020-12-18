import React, {Component} from 'react';
import SummaryService from '../../services/SummaryService'


const summarybyline = (props) => {

    return(
        
        <thead class="text-warning">
            <th key={props.weekending} onClick={() => SummaryService.summaryClick(props.weekending)}>{props.weekending}</th>
            <th>{props.totalhours}</th>
            <th>{props.submission}</th>
            <th>{props.approval}</th>
            <th>{props.option}</th>
            <th>{props.comment}</th>
        </thead>
    )
}



export default summarybyline;