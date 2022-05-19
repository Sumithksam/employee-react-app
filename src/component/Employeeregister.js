import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Employeeregister = () => {
    var [id,setId]=useState("")
    var [ename,setName]=useState("")
    var [desig,setDesig]=useState("")
    var [salary,setSal]=useState("")
    var [cname,setCompany]=useState("")
    var [dob,setDob]=useState("")
    var [email,setEmail]=useState("")
    const subData=()=>{
        const data={"id":id,"ename":ename,"desig":desig,"salary":salary,"cname":cname,"dob":dob,"email":email}
        console.log(data)
            }
    const clearData=()=>{
        const data={"id":"","ename":"","desig":"","salary":"","cname":"","dob":"","email":""}
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">EMP ID:</label>
                    <input onChange={(e)=>{setId(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">EMP NAME:</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">DESIGNATION:</label>
                    <input onChange={(e)=>{setDesig(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">SALARY:</label>
                    <input onChange={(e)=>{setSal(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">COMPANY NAME:</label>
                    <input onChange={(e)=>{setCompany(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">DOB:</label>
                    <input onChange={(e)=>{setDob(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">EMAIL:</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={clearData} className="btn btn-danger">CLEAR</button>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Employeeregister