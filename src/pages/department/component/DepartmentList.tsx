import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Button, Col, Row} from "react-bootstrap";
import {IDepartment} from "../modal/Department.type";

/*type Props = {
    viewEmployeeEdit: (department:IDepartment) => void
}*/

const DepartmentList = (props:any) => {
    const onDeleteBtnHandler = (data: IDepartment) => {
        fetch(`http://localhost:8080/employee/delete/${data.departmentId}`,{
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
    const [departments, setDepartment] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/department")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDepartment(data);
            })
    },[])
    return (
        <div>
            <section className="section-content">
                <article><h3 className="list-header">LIST OF DEPARTMENT</h3></article>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Location</th>
                        <th>Department Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {departments.map((department:IDepartment) => {
                        return(
                            <tr key={department.departmentId}>
                                <td>{department.departmentId}</td>
                                <td>{department.parentLocation?.locationName}</td>
                                <td>{department.departmentName}</td>
                                <td>
                                    <div>
                                        <Row>
                                            <Col>
                                                <Button variant="primary"  onClick={() => props.viewEmployeeEdit(department)}>Edit</Button>
                                            </Col>
                                            <Col>
                                                <Button variant="danger"  onClick={() => onDeleteBtnHandler(department)}>Delete</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </td>
                            </tr>
                        );}
                    )}
                    </tbody>
                </table>
            </section>
        </div>);
};

export default DepartmentList;