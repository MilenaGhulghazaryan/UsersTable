//import { useState } from 'react/cjs/react.development';
//import { useState } from 'react';
import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./users/users";
import Users from './users/users';
import data from './mock-data.json';
//import {nanoid} from 'nanoid';



function Myelement(){
  const [showForm, setShowForm] = useState(false);

  const show = () => {
    setShowForm(!showForm);
  }
  const hide = showForm ? "hide" : "hide1";
  
  const[contacts,setContacts]=useState(data);
  const[button,setbutton]=useState(true);
  
  

         
 
return(
  <>
  
  <div className={`myelement ${hide}`}>
  {show && <Users/>}
  </div>
  <button onClick={show}>Create</button>

  <table>
 <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
      {contacts.map((contact)=>(
        <tr>
          <td>{contact.id}</td>
          <td>{contact.fullName}</td>
          <td>{contact.action}{button}<button>Edit</button><button>Delete</button> </td>
        </tr>
      ))}
      
     
     
    
    
    
    </tbody>
   
 </table>

 
  </>
  
      
      
);
      
    
      }



  


ReactDOM.render(<Myelement/>, document.getElementById('root'));

/*
 const [data, setData] = useState([]);
  
  
  const [addFormData, setAddFormData] = useState({
    fullName:'',
     })

const handleAddFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData ={...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit =(event)=>{
    event.preventDefault();

    const newContact ={
      id: nanoid(),
      fullName:addFormData.fullName
    };

    const newContacts=[...contacts,newContact];
    setContacts(newContacts);
  };*/