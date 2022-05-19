import React, { useState } from 'react'
import Navbar from './Navbar'

const Employeesearch = () => {
    var [empid,setId]=useState("")
    const viewName=()=>{
        const data={"empid":empid}
        console.log(data)
      }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">EMP ID:</label>
                <input onChange={(e)=>{setId(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={viewName} className="btn btn-success">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Employeesearch