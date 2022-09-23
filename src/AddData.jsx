import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {Add} from "./Action/Actions"

export default function AddData() {

    function refreshPage(){
        window.location.reload(false)
    }

    const orgState = useSelector((state)=>state)
    const dispatch = useDispatch();
    const [obj,Setobj] = useState("")


    const handleChnage =(e) =>{
        Setobj({...obj,[e.target.name]:e.target.value})
    }

    const SubmitFun = (e) =>{
        e.preventDefault();
        dispatch(Add(obj))

    }
  return (
<>

    <div>
    <div className='text-center bg-div'>
        <p className='text-deg'>Employee Registration Form</p>
    </div>
    <form className='margin' onSubmit={SubmitFun}>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" name='Name' value = {obj.Name} onChange={handleChnage} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
  <div className="form-group"> 
    <label for="exampleInputPassword1">Gender</label>
    
    <input type="Dropdown" name='Gender' value = {obj.Gender} onChange={handleChnage} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Gender"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Contact</label>
    <input type="number" name='Contact' value = {obj.Contact} onChange={handleChnage} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Contact"/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Profession</label>
    <input type="text" name='Profession' value = {obj.Profession} onChange={handleChnage} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Proffesion"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">    I'am not a robot</label>
  </div>
  <br></br>
  <button type="submit" className="btn btn-primary" onClick={SubmitFun}>Submit</button>
  <button type="submit" className="btn btn-primary btn-sty" onClick={refreshPage}>Refresh</button>
</form>

        
<br></br>

    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Contact</th>
      <th scope="col">Profession</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{Object.values(orgState).map((e) =>e.Name)}</td>
        <td>{Object.values(orgState).map((e) =>e.Gender)}</td>
        <td>{Object.values(orgState).map((e) =>e.Contact)}</td>
        <td>{Object.values(orgState).map((e) =>e.Profession)}</td>
      {/* <td>{obj.Name}</td>
      <td>{obj.Gender}</td>
      <td>{obj.Contact}</td>
      <td>{obj.Profession}</td> */}

    </tr>
  </tbody>
</table>



    </div>
  
    </>
  )
}
