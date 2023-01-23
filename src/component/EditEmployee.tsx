import {IEmployee} from "../models/Employee.type";
import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";

type Props = {
    data: IEmployee;
    onSubmitEditForm : (employeeData :IEmployee) => void;
    onBackBtnClickHandler : () => void;
}

const EditEmployee = (props: Props) =>  {
    const {data, onSubmitEditForm, onBackBtnClickHandler} = props
    const [employeeName, setEmployeeName] = useState(data.employeeName);
    const [employeeLocationId, setEmployeeLocation] = useState(data.location?.locationId);
    const [employeeSalary, setEmployeeSalary] = useState(data.employeeSalary);
    const [departmentId, setDepartmentName] = useState(data.department?.departmentId);
    const employeeId  = data.employeeId;
    const onEmployeeNameChangeHandler = (e:any) => {
        setEmployeeName(e.target.value);
    }
    const onEmployeeLocationHandler = (e:any) => {
        setEmployeeLocation(e.target.value);
    }
    const onEmployeeSalaryHandler = (e:any) => {
        setEmployeeSalary(e.target.value);
    }
    const onDepartmentNameHandler = (e:any) => {
        setDepartmentName(e.target.value);
    }
    const onSubmitBtnClickHandler = () => {
        const data: IEmployee = {
            employeeId: employeeId,
            employeeName: employeeName,
            employeeSalary: employeeSalary,
            department:{
                departmentId:departmentId,
            },
            location:{
                locationId:employeeLocationId
            }
        }
        onSubmitEditForm(data);
    }

    return(<>
            <center>
                <form onSubmit={onSubmitBtnClickHandler} className="container">
                    <header className="h5">Update Employee</header>
                    <div className="form-group col-md-6">
                        <label>Employee Name</label>
                        <input className="form-control" placeholder="Employee Name" value={employeeName} onChange={onEmployeeNameChangeHandler}/>
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label htmlFor="inputState">Employee Location</label>
                        <select className="form-control form-control-sm" value={employeeLocationId} onChange={onEmployeeLocationHandler}>
                            <option value={0}>Select Location</option>
                            <option value={1}>Gurugram</option>
                            <option value={2}>Pune</option>
                            <option value={3}>Bangalore</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label >Employee Salary</label>
                        <input className="form-control " placeholder="Employee Salary" value={employeeSalary} onChange={onEmployeeSalaryHandler}/>
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label htmlFor="inputState">Employee Department</label>
                        <select className="form-control form-control-sm" value={departmentId} onChange={onDepartmentNameHandler}>
                            <option value={0}>select Department</option>
                            <option value={1}>Production</option>
                            <option value={2}>Research and Development</option>
                            <option value={3}>Purchasing</option>
                            <option value={4}>Marketing</option>
                        </select>
                    </div>
                    <div className="form-group col-md-10 mt-3">
                        <Row>
                            <Col>
                                <Button variant="success" onClick={onBackBtnClickHandler}>Back</Button>
                            </Col>
                            <Col>
                                <Button type="submit" variant="primary">Submit</Button>
                            </Col>
                        </Row>
                    </div>
                </form>
            </center>
        </>


    )};

export default EditEmployee;