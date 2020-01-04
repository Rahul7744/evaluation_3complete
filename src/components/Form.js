import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addData} from './../Redux/Action'
import {Link} from 'react-router-dom'
class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             company:'',
             location:'',
             jobTitle:'',
             opening:'',
             salary:'',
             id:""
        }
    }
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
     handleSubmit = (e) => {
         e.preventDefault();
         console.log(this.state);
             
             
         let temp ={
            company:this.state.company,
            location:this.state.location,
            jobTitle:this.state.jobTitle,
            opening:this.state.opening,
            salary:this.state.salary,
            id:this.state.id
            // status:true
        }
       
        
        this.props.addComment(temp)
     }
    render() {
        
        return (
            <React.Fragment>
                  <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <form onSubmit={this.handleSubmit} className="text-center">

                        <div className="form-group">
                                    <label>id</label>
                                    <input type="text" className="form-control" name="id"  value={this.state.id} onChange={this.handleInput}/> 

                                    
                                </div>
                                <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" className="form-control" name="company"  value={this.state.company} onChange={this.handleInput}/> 

                                    
                                </div>
                                <div className="form-group">
                                    <label>Location</label>
                                    <input type="text" className="form-control"  name="location"  value={this.state.location} onChange={this.handleInput}/>
                                    
                                </div>

                                <div className="form-group">
                                    <label>Job Title</label>
                                    <input type="text" className="form-control"  name="jobTitle" value={this.state.jobTitle} onChange={this.handleInput}/>
                                </div>

                                <div className="form-group">
                                    <label>Opening</label>
                                    <input type="text" className="form-control"  name="opening" value={this.state.opening} onChange={this.handleInput}/>
                                </div>

                                <div className="form-group">
                                    <label>Salary</label>
                                    <input type="text" className="form-control"  name="salary" value={this.state.salary} onChange={this.handleInput}/>
                                </div>
                                
                                <button type="submit" className="btn btn-primary ">Post</button>
                                <Link to="/home" type="submit" className="btn btn-success ml-5">Show Table</Link>
                        </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToState = (dispatch) => {
    return {
      addComment: (commentData) => dispatch(addData(commentData))
    }
}



export default connect(null, mapDispatchToState) (Form);