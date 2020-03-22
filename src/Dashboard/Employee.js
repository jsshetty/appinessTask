import React from 'react';
import './Dashboard.css';

function Employee(props) {
  return (
    <div className="employeeCard">
      <div>Name: {props.employee.name}</div>
      <div>Age: {props.employee.age}</div>
      <div>Gender: {props.employee.gender}</div>
      <div>Email: {props.employee.email}</div>
      <div>Phone No: {props.employee.phoneNo}</div>
    </div>
  );
}

export default Employee;