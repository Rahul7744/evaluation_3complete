import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editData} from './../Redux/Action'
import {Link} from 'react-router-dom'
class Edit extends Component {
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
    
    componentDidMount() {
        this.props.editData.tableData.map(each => {
            if(each.id == this.props.match.params.id){
                this.setState({company: each.company, location:each.location, jobTitle:each.jobTitle, opening:each.opening ,salary:each.salary, id:each.id })
            }
        })
    }

    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
      
        this.props.update(this.state)

        this.props.history.push('/home')
        
    }
    
    render() {
       // console.log(this.props.match.params.id);
        
      //  console.log(this.props.editData.tableData);
        
        return (
           <React.Fragment>
                     <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <form onSubmit={this.handleSubmit} className="text-center">
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
                                
                                <button type="submit"    className="btn btn-primary ">Update</button>
                                <Link to="/home" type="submit" className="btn btn-success ml-5">Cancel</Link>
                        </form>
                        </div>
                    </div>
                </div>
           </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        editData : state.data
    }
}


const mapDispatchToState = (dispatch) => {
    return {
      update: (payload) => dispatch(editData(payload))
    }
}


export default connect(mapStateToProps,mapDispatchToState) (Edit);