import React, {useEffect, useState} from "react";
import {IEmployee, pageEnum} from "../models/Employee.type";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Button, Col, Row} from "react-bootstrap";


import Moment from "moment";

type Props = {
    viewEmployeeData: (employee:IEmployee) => void
    viewEmployeeEdit: (employee:IEmployee) => void
}

const EmployeeList = (props:Props) => {
    const onDeleteBtnHandler = (data: IEmployee) => {
        fetch(`http://localhost:8080/employee/delete/${data.employeeId}`,{
            method: 'DELETE',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            })
    }
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/employee")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setEmployees(data);
            })
    })
    return (
        <div>
            <article><h3 className="list-header">LIST OF EMPLOYEES</h3></article>
            <table className="table">
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee Location</th>
                    <th>Date Of Joining</th>
                    <th>Department Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>

                {employees.map((employee:IEmployee) => {
                    return(
                        <tr key={employee.employeeId}>
                            <td>{employee.employeeId}</td>
                            <td>{employee.employeeName}</td>
                            <td>{employee?.location?.locationName}</td>
                            <td>{Moment(employee.dateOfJoining).format('DD/MM/YYYY')}</td>
                            <td>{employee?.department?.departmentName}</td>
                            <td>
                                <div>
                                    <Row>
                                        <Col>
                                            <Button variant="success" onClick={() =>props.viewEmployeeData(employee)}>View</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="primary"  onClick={() => props.viewEmployeeEdit(employee)}>Edit</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="danger"  onClick={() => onDeleteBtnHandler(employee)}>Delete</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </td>
                        </tr>
                    );}
                )}
                </tbody>
            </table>
        </div>);
};
export default EmployeeList;