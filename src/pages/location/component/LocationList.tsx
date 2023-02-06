import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Button, Col, Row} from "react-bootstrap";
import {ILocation} from "../modal/ILocation";


/*type Props = {
    viewEmployeeEdit: (department:IDepartment) => void
}*/

const LocationList = (props:any) => {
    const onDeleteBtnHandler = (data: ILocation) => {
        fetch(`http://localhost:8080/employee/delete/${data}`,{
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
    const [locations, setLocations] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/location")
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log("location : "+data)
                setLocations(data);
            })
    })
    return (
        <div>
            <section className="section-content">
                <article><h3 className="list-header">LIST OF LOCATION</h3></article>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Location ID</th>
                        <th>Location Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {locations.map((location:ILocation) => {
                        return(
                            <tr key={location.locationId}>
                                <td>{location.locationId}</td>
                                <td>{location.locationName}</td>
                                <td>
                                    <div>
                                        <Row>
                                            <Col>
                                                <Button variant="primary"  onClick={() => props.viewEmployeeEdit(location)}>Edit</Button>
                                            </Col>
                                            <Col>
                                                <Button variant="danger"  onClick={() => onDeleteBtnHandler(location)}>Delete</Button>
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

export default LocationList;