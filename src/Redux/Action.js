const ADD_DATA = "ADD_DATA"
const DELETE_DATA = "DELETE_DATA"
const EDIT_DATA = "EDIT_DATA"

const addData = (e) => {
    console.log(e)
    return{
      type:ADD_DATA,
            company:e.company,
            location:e.location,
            jobTitle:e.jobTitle,
            opening:e.opening,
            salary:e.salary,
            id:e.id,
            // status:true

            // company_n:e.company_n,
            // location_n:e.location_n
    }

    
    
}

const removeData = (e) => {
     return {
       type:DELETE_DATA,
       id:e
     }
}

const editData = (e) => {
  return{
    type:EDIT_DATA,
    edit:e
  }
}


export {addData, removeData, editData} 

