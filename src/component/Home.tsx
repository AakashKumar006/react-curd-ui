import "../style/Home.style.css";
import EmployeeList from "./EmployeeList";
import React, {useState} from "react";
import AddEmployee from "./AddEmployee";
import {IEmployee, pageEnum} from "../models/Employee.type";
import EditEmployee from "./EditEmployee";
import EmployeeModal from "./EmployeeModal";

const Home = () => {
    const [shownPage, setShowPAge] = useState(pageEnum.list);
    const [editEmployeeData, setEditEmployeeData] = useState({});
    const [employeeData, setEmployeeData] = useState(null as IEmployee | null);
    const [showModal, setShowModal] = useState(false);
    const onAddEmployeeClickHandler = () => {
        setShowPAge(pageEnum.add);
    }
    const changeModalState = (data:IEmployee) => {
        setShowModal(true);
        setEmployeeData(data);
    };

    const onCloseModal = () => {
        setShowModal(false);
    }
    const showListPage = () => {
        setShowPAge(pageEnum.list)
    }

    const viewEmployeeEdit = (data: IEmployee) => {
        setShowPAge(pageEnum.edit);
        setEditEmployeeData(data);
    }
    const updateEmployee = (data: IEmployee) => {
        fetch('http://localhost:8080/employee/update',{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            })
    }
    const addEmployee = (data:IEmployee) => {
        fetch('http://localhost:8080/employee/add',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            })
    }
    return (
        <>
            <article className="article-header">
                <header>
                    <h1>Employee Management System</h1>
                </header>
            </article>
            <section className="section-content">
                {shownPage === pageEnum.list && (<>
                        <button type="button" value="ADD NEW EMPLOYEE" onClick={onAddEmployeeClickHandler} className="btn btn-warning float-end">ADD EMPLOYEE</button>
                        <EmployeeList viewEmployeeEdit={(employee:IEmployee)=>viewEmployeeEdit(employee)} viewEmployeeData={(employee:IEmployee)=>changeModalState(employee)}/></>
                )}
                {shownPage === pageEnum.add &&
                <AddEmployee onBackBtnClickHandler={showListPage} onSubmitClickHandler={addEmployee}/>}

                {showModal && employeeData !== null && (
                    <EmployeeModal onClose={onCloseModal} data={employeeData}/>
                )}
                {shownPage === pageEnum.edit && (<EditEmployee data={editEmployeeData}  onSubmitEditForm={(employee:IEmployee)=>updateEmployee(employee)} onBackBtnClickHandler={showListPage}/>)}
            </section>
        </>
    )};

export default Home;