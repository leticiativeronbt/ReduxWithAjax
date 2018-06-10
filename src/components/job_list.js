import React, {Component} from 'react';
export default class JobList extends Component{
    renderList(){
        this.props.jobs.map((job) => {
            return (
                <li key = {job.id} className='list-group-item'> {job.title} </li>
            )
        } );
    }
    
    render(){
        return(
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        );
    }
}