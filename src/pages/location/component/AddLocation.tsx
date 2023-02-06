import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import useInput from "../../../hooks/use-input";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {ILocation} from "../../location/modal/ILocation";

type Props = {
    onBackBtnClickHandler : () => void;
    onSubmitClickHandler : (data: ILocation) => void;
};

const AddLocation = (props: Props) => {
    const [locationName, setLocationName] = useState("");
    const {onBackBtnClickHandler, onSubmitClickHandler} = props;
    const valueChangedHandler = (e:any) => {
        setLocationName(e.target.value);
    };

    const onSubmitBtnClickHandler = (event:any) => {
        const data: ILocation = {
            locationName: locationName,
        }
        onSubmitClickHandler(data);
    };

    return(<>
            <center>
                <form onSubmit={onSubmitBtnClickHandler} className="container ">
                    <header className="h5">Add Location</header>
                    <div className="form-group col-md-6">
                        <label >Location Name</label>
                        <input className="form-control" placeholder="Location Name" value={locationName} onChange={valueChangedHandler}/>
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

export default AddLocation;