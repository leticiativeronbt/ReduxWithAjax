import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectJob } from '../actions/index';
import { bindActionCreators } from 'redux';

class JobList extends Component{
    renderList(){
        this.props.jobs.map((job) => {
            return (
                <li 
                    key={job.id} 
                    onClick={() => this.prop.selectJob(job)}
                    className='list-group-item'>
                    {job.title}
                </li>
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

function mapStateToProps(state){
    return {
        jobs: state.jobs
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectJob: selectJob }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);