import React from 'react';
import './Dashboard.css';
import employeeList from "../data/EmployeeList.json";
import Employee from './Employee';

function DashboardPage() {
  return (
    <div className="employeeContainer">
      {Object.keys(employeeList.user).map((key)=>{
        return <Employee employee ={employeeList.user[key]} key={employeeList.user[key].id}/>
      })}
    </div>
  );
}

export default DashboardPage;