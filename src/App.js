import React from 'react'
import Form from './components/Form'
import { BrowserRouter, Route } from 'react-router-dom';
import Table from './components/Table';
import Edit from './components/Edit';
import Delete from './components/Delete';


function App() {
  return (
        <BrowserRouter>
         
          <Route exact path="/" render={props => <Form {...props}/>}/>
          <Route path="/home" render={props => <Table {...props}/>}/>
          <Route path="/edit/:id" render={props => <Edit {...props}/>}/>
          <Route path="/delete/:id" render={props => <Delete {...props}/>}/>
  
      </BrowserRouter>
  )
}

export default App
