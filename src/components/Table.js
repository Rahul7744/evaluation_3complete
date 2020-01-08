import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {removeData} from './../Redux/Action'
import Navbar from './Navbar';
class Table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            allData:[],
            page:1,
            per_page:5,
            total:'',
            companyFilter:''
        }
    }



    handleDelete = (id) => {
       // console.log(e.target.id);
        this.props.removeData(id)
    }

    handleOpening = (e) => {
    let x = this.state.allData.reduce((e, ab) => e + Number(ab.opening),0)
    console.log(x)
    this.setState({total: x})
    }
// *******************************************************************************filter company*
    handleFilter = (e) => {
        let x = this.state.allData.filter(e => e.company)
        this.setState({comp:x})
    }
    
    // *************************************************************************************

    handleClick2 = ()=>{
        let x = this.state.allData.sort((a,b)=>(a.salary- b.salary))
        this.setState({
            allData:x
        })
    }

    handleClick = (pageNo) => {
        this.setState({page:pageNo})
      }

    rowChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
      
    }
 
      
      // Function of Next and Prev
      // a is page no
      handleNext = (a) => {
        if (a <= this.state.allData.length) {
            this.setState({
                page: a + 1
            })
        }
      }
      
      handlePrev = (a) => {
        if (a > 1) {
            this.setState({
                page: a - 1
            })
        }
      }


      
    render() {
        this.state.allData  = this.props.allData.tableData   
        var pageNo = this.state.page
        var per_page_no = this.state.per_page
        var toatalData = this.state.allData
       //    console.log(toatalData)
        var total_pages = Math.ceil(toatalData.length/per_page_no)

        let start = (pageNo-1)*per_page_no  //10
        let end = start + per_page_no // 10
        let slicedData = toatalData.slice(start,end)
       //   console.log(slicedData)

       var pageNumbers = []
       for(var i=1; i<=total_pages; i++){
             pageNumbers.push(i)
       }
       // console.log(pageNumbers)

       var button = pageNumbers.map(btn => {
           return(
           <button className="btn btn-danger" onClick={() =>this.handleClick(btn)}>{btn}</button>
           )
       })
       var nextButton = () => {
        if (this.state.page !== this.state.allData.length) {
            return (
                <button className="btn btn-primary ml-3" onClick={() => this.handleNext(this.state.page)}> Next</button>
            )
      
        }
        else {
            return (
                <button className="btn btn-primary" disabled>Next</button>
            )
        }
      }
      var prevButton = () => {
        if (this.state.page !== 1) {
            return (
                <button className="btn btn-success ml-3" onClick={() => this.handlePrev(this.state.page)}>Prev</button>
            )
        }
        else {
            return (
                <button className="btn btn-success "  disabled>Prev</button>
            )
        }
      }
      
    
       
    // *****************************************************************************************
        //console.log(this.props.allData.tableData);
        let showData = slicedData.map( e => {
            return(
                <tbody>
                    <tr>
                    <td>{e.id}</td>
                        <td>{e.company}</td>
                        <td>{e.location}</td>
                        <td>{e.jobTitle}</td>
                        <td>{e.opening}</td>
                        <td>{e.salary}</td>
                        {/* <td><button onClick={this.handleEdit} edit={e.id} className="btn btn-primary">Edit</button></td> */}
                        <td><Link to={`/edit/${e.id}`} className="btn btn-primary">Edit</Link></td>
                        {/* <td><button className="btn btn-danger" onClick={this.handleDelete} id={e.id}> Delete</button></td> */}
                        <td><button className="btn btn-danger" onClick={()=>{this.handleDelete(e.id)}}> Delete</button></td>
                    </tr>
                </tbody>
            )
        })
            
        return (
            <React.Fragment>
                <Navbar/>
               <div className="container mt-5 mr-5">
                   <div className="row">
                       <div>
                           <div> {prevButton()} {button} {nextButton()} </div>
        
                      <button className="btn btn-success" onClick={this.handleClick2}>Sort Salary</button>   

                      <button className="btn btn-success" onClick={this.handleOpening}>Total Job:{this.state.total}</button>
                      {/* ******************************** */}
                      <button className="btn btn-success" onClick={this.handleFilter}> Filter Company</button>

                <select className="form-control offset-5 mb-5 btn btn-primary"style={{width:"120px"}} onChange={this.rowChange} name="per_page">
                    <option value="" selected>Per Page</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>     
                       <table class="table mt-2">
                            <thead>
                                 <tr>               
                                    <th scope="col">id</th>      
                                    <th scope="col">Company</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Job Title</th>
                                    <th scope="col">Opening</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                 </tr>
                           </thead>
                    {showData}
                       </table>
                       </div>
                   </div>
               </div>
              

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        allData :state.data
    }
}

const mapDispatchToState = (dispatch) => {
    return {
      removeData: (commentData) => dispatch(removeData(commentData))
    }
}

export default connect(mapStateToProps,mapDispatchToState) (Table);