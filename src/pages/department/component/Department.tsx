import React, {useState} from "react";
import {pageEnum} from "../../employee/modal/Employee.type";
import DepartmentList from "./DepartmentList";
import {IDepartment} from "../modal/Department.type";
import AddDepartment from "./AddDepartment";

const Department = () => {
    const [shownPage, setShowPAge] = useState(pageEnum.list);
    const showListPage = () => {
        setShowPAge(pageEnum.list)
    };

    const onAddEmployeeClickHandler = () => {
        setShowPAge(pageEnum.add);
    };

    const addDepartment = (data:IDepartment) => {
        console.log("location ID : "+data.parentLocation?.locationId);
        fetch('http://localhost:8080/department/add',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            })
    };

    return (
        <>
            <section className="section-content">
                {shownPage === pageEnum.list && (<>
                        <button type="button" value="ADD NEW DEPARTMENT" onClick={onAddEmployeeClickHandler} className="btn btn-warning float-end">ADD DEPARTMENT</button>
                        <DepartmentList /></>
                )}
                {shownPage === pageEnum.add &&
                <AddDepartment onBackBtnClickHandler={showListPage} onSubmitClickHandler={addDepartment}/>}
            </section>
        </>
    )};

export default Department;