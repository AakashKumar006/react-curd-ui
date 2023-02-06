import React, {useState} from "react";
import {pageEnum} from "../../employee/modal/Employee.type";
import LocationList from "./LocationList";
import AddLocation from "./AddLocation";
import {ILocation} from "../modal/ILocation";

const Location = () => {
    const [shownPage, setShowPAge] = useState(pageEnum.list);
    const showListPage = () => {
        setShowPAge(pageEnum.list)
    };

    const onAddEmployeeClickHandler = () => {
        setShowPAge(pageEnum.add);
    };

    const addLocation = (data:ILocation) => {
        fetch('http://localhost:8080/location/add',{
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
                        <button type="button" value="ADD NEW EMPLOYEE" onClick={onAddEmployeeClickHandler} className="btn btn-warning float-end">ADD LOCATION</button>
                        <LocationList /></>
                )}
                {shownPage === pageEnum.add &&
                <AddLocation onBackBtnClickHandler={showListPage} onSubmitClickHandler={addLocation}/>}
            </section>
        </>
    )};

export default Location;