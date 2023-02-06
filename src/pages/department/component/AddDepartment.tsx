import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {ILocation} from "../../location/modal/ILocation";
import {IDepartment} from "../modal/Department.type";

type Props = {
    onBackBtnClickHandler : () => void;
    onSubmitClickHandler : (data: IDepartment) => void;
};

const AddDepartment = (props: Props) => {
    const [departmentName, setDepartmentName] = useState("");
    const [employeeLocationId, setEmployeeLocationId] = useState(0);

    const {onBackBtnClickHandler, onSubmitClickHandler} = props;
    const valueChangedHandler = (e:any) => {
        setDepartmentName(e.target.value);
    };

    const locationChangeHandler = (e:any) => {
        setEmployeeLocationId(e.target.value);
    }

    const onSubmitBtnClickHandler = (event:any) => {
        const data: IDepartment = {
            departmentName: departmentName,
            parentLocation:{
                locationId: employeeLocationId,
            }
        }
        onSubmitClickHandler(data);
    };
    const [locations, setLocations] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/location")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setLocations(data);
            })
    },[])

    return(<>
            <center>
                <form onSubmit={onSubmitBtnClickHandler} className="container ">
                    <header className="h5">Add Department</header>
                    <div className="form-group col-md-6 mt-3">
                        <label htmlFor="inputState">Department Location</label>
                        <select className="form-control form-control-sm" value={employeeLocationId} onChange={locationChangeHandler}>
                            <option value={0}>Select Location</option>
                            {locations.map((location:ILocation) => {
                                return(
                                    <React.Fragment>
                                        <option value={location.locationId}>{location.locationName}</option>
                                    </React.Fragment>
                                );}
                            )}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label >Department Name</label>
                        <input className="form-control" placeholder="Department Name" value={departmentName} onChange={valueChangedHandler}/>
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

export default AddDepartment;