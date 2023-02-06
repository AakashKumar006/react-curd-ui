import "../style/Home.style.css";
import React, {useState} from "react";
import {IEmployee, pageEnum} from "../pages/employee/modal/Employee.type";
import '../style/Home.style.css'
import EmployeeList from "../pages/employee/component/EmployeeList";
import AddEmployee from "../pages/employee/component/AddEmployee";
import EmployeeModal from "../pages/employee/component/EmployeeModal";
import EditEmployee from "../pages/employee/component/EditEmployee";

const Home = () => {
    const [shownPage, setShowPAge] = useState(pageEnum.list);
    const [editEmployeeData, setEditEmployeeData] = useState({});
    const [employeeData, setEmployeeData] = useState(null as IEmployee | null);
    const [showModal, setShowModal] = useState(false);

    const onAddEmployeeClickHandler = () => {
        setShowPAge(pageEnum.add);
    };
    const changeModalState = (data:IEmployee) => {
        setShowModal(true);
        setEmployeeData(data);
    };

    const onCloseModal = () => {
        setShowModal(false);
    };

    const showListPage = () => {
        setShowPAge(pageEnum.list)
    };

    const viewEmployeeEdit = (data: IEmployee) => {
        setShowPAge(pageEnum.edit);
        setEditEmployeeData(data);
    };

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
    };

    return (
        <>
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