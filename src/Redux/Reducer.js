import { act } from "react-dom/test-utils"

const ADD_DATA = "ADD_DATA"
const DELETE_DATA = "DELETE_DATA"
const EDIT_DATA = "EDIT_DATA"

const initState  = {
    tableData:[]
}
const addingData = (state = initState, action) => {
    switch(action.type){
        case ADD_DATA:
            let newData = {
                company:action.company,
                location:action.location,
                jobTitle:action.jobTitle,
                opening:action.opening,
                salary:action.salary,
                id:action.id
                

                
            }
     
        return{
            ...state,
            tableData: [...state.tableData, newData]
        }

        case DELETE_DATA:
            return{
                ...state,
               tableData: state.tableData.filter((e)=> e.id !== action.id)
            }

         case EDIT_DATA:
             let newState = {...state}
             console.log('state : ',newState)
             let _data = newState.tableData.filter((e)=> e.id !== action.edit.id)
             _data.push(action.edit)

             return {
                 ...state,
                 tableData: _data
             } 

        default:
            return state
    }
}

export default addingData