import "../style/EmployeeForm.style.css"
import React, {useState} from "react";
import {IEmployee} from "../models/Employee.type";
import {Button, Col, Row} from "react-bootstrap";
import useInput from "../hooks/use-input";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

type Props = {
    onBackBtnClickHandler : () => void;
    onSubmitClickHandler : (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
    const {
        value: employeeName,
        hasError: employeeNameHasError,
        valueChangedHandler: employeeChangeHandler,
        inputBlurHandler: employeeBlurHandler,
        reset: resetEmployeeNameInput,
        inputClass: employeeNameInputClass,
        errorMessage: employeeNameErrorMessage
    } = useInput("employeeName");

    const {
        id: employeeLocationId,
        hasError: employeeLocationHasError,
        valueChangedHandler: locationChangeHandler,
        inputBlurHandler: locationBlurHandler,
        resetId: resetLocationInput,
        inputClass: employeeLocationInputClass,
    } = useInput("employeeLocation");

    const {
        value: employeeSalary,
        hasError: employeeSalaryHasError,
        valueChangedHandler: employeeSalaryChangeHandler,
        inputBlurHandler: employeeSalaryBlurHandler,
        reset: resetEmployeeSalary,
        inputClass: employeeSalaryInputClass,
        errorMessage: employeeSalaryErrorMessage
    } = useInput("employeeSalary");

    const {
        id: employeeDepartmentId,
        hasError: employeeDepartmentHasError,
        valueChangedHandler: departmentChangeHandler,
        inputBlurHandler: departmentBlurHandler,
        resetId: resetDepartmentInput,
        inputClass: employeeDepartmentInputClass,
    } = useInput("employeeDepartment")

    const {onBackBtnClickHandler, onSubmitClickHandler} = props;
    let formIsValid = false;
    if(
        employeeNameHasError === false &&
        employeeLocationHasError === false &&
        employeeSalaryHasError === false &&
        employeeDepartmentHasError === false) {
        formIsValid = true;
    }

    const onSubmitBtnClickHandler = (event:any) => {
        if(!formIsValid) {
            return;
        }
        resetEmployeeNameInput();
        resetLocationInput();
        resetEmployeeSalary();
        resetDepartmentInput();
        const data: IEmployee = {
            employeeName: employeeName,
            employeeSalary: employeeSalary,
            department:{
                departmentId:employeeDepartmentId,
            },
            location:{
                locationId:employeeLocationId
            }
        }
        onSubmitClickHandler(data);
    };

    return(<>
            <center>
                <form onSubmit={onSubmitBtnClickHandler} className="container ">
                    <header className="h5">Add Employee</header>
                    <div className="form-group col-md-6">
                        <label >Employee Name</label>
                        <input className={employeeNameInputClass} placeholder="Employee Name" value={employeeName} onChange={employeeChangeHandler} onBlur={employeeBlurHandler} />
                        {employeeNameHasError && <p className="text-danger">{employeeNameErrorMessage}</p>}

                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label htmlFor="inputState">Employee Location</label>
                        <select className={employeeLocationInputClass} value={employeeLocationId} onChange={locationChangeHandler} onBlur={locationBlurHandler}>
                            <option value={0}>Select Location</option>
                            <option value={1}>Gurugram</option>
                            <option value={2}>Pune</option>
                            <option value={3}>Bangalore</option>
                        </select>
                        {employeeLocationHasError && <p className="text-danger">Select employee location.</p>}
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label >Employee Salary</label>
                        <input className={employeeSalaryInputClass} placeholder="Employee Salary" value={employeeSalary} onChange={employeeSalaryChangeHandler} onBlur={employeeSalaryBlurHandler}/>
                        {employeeSalaryHasError && <p className="text-danger">{employeeSalaryErrorMessage}</p>}
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label htmlFor="inputState">Employee Department</label>
                        <select className={employeeDepartmentInputClass} value={employeeDepartmentId} onChange={departmentChangeHandler} onBlur={departmentBlurHandler}>
                            <option value={0}>select Department</option>
                            <option value={1}>Production</option>
                            <option value={2}>Research and Development</option>
                            <option value={3}>Purchasing</option>
                            <option value={4}>Marketing</option>
                        </select>
                        {employeeDepartmentHasError && <p className="text-danger">Select employee department.</p>}
                    </div>
                    <div className="form-group col-md-10 mt-3">
                        <Row>
                            <Col>
                                <Button variant="success" onClick={onBackBtnClickHandler}>Back</Button>
                            </Col>
                            <Col>
                                <Button type="submit" variant="primary" disabled={!formIsValid}>Submit</Button>
                            </Col>
                        </Row>
                    </div>
                </form>
            </center>
        </>
    )};

export default AddEmployee