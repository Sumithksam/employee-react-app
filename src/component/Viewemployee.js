import React from 'react'
import Navbar from './Navbar'

const Viewemployee = () => {
var emplist=[{"epmid":1,"empname":"sumith","epmdesig":"associate"},{"epmid":2,"empname":"sam","epmdesig":"associate"},{"epmid":3,"empname":"vani","epmdesig":"associate"}]
  return (
    <div>
        <Navbar/>
        <div className="container">
        <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">EMP ID:</th>
      <th scope="col">EMPLOYEE NAME</th>
      <th scope="col">DESIGNATION</th>
    </tr>
  </thead>
  <tbody>
        
            {emplist.map((value,key)=>{
return <tr>
      <th scope="row">1</th>
      <td>{value.epmid}</td>
      <td>{value.empname}</td>
      <td>{value.epmdesig}</td>
    </tr>
   
            })}

              </tbody>
</table>

        </div>
        </div>
        </div>
        </div>
    
  )
}

export default Viewemployee