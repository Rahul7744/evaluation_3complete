import React from 'react'
import Form from './components/Form'
import { BrowserRouter, Route } from 'react-router-dom';
import Table from './components/Table';
import Edit from './components/Edit';



function App() {
  return (
        <BrowserRouter>
         
          <Route exact path="/" render={props => <Form {...props}/>}/>
          <Route path="/home" render={props => <Table {...props}/>}/>
          <Route path="/edit/:id" render={props => <Edit {...props}/>}/>
    
      </BrowserRouter>
  )
}

export default App
