import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import "../../../App.css";
import { Card, useAccordionButton } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log("totally custom!")
    );

    return (
        <button type="button" className="custom-toggle" onClick={decoratedOnClick}>
            {/* {children} */}
            <IoIosArrowForward />
        </button>
    );
}

const LocationOverview = () => {

    //store data in state
    const [data, setData] = useState([]);
    const [mediatype, setMediaType] = useState([])


    //update the fields data
    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        fetch('https://nlt1.yangasportswater.com/api/Locations', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "IDLocation": 0,
                "Name":  "string",
                "LandCode": "string",
            
            }),
        })

    }
    useEffect(() => {
        fetch("https://nlt1.yangasportswater.com/api/Locations")
            .then((res) => res.json())
            .then((data) => {
                setMediaType(data)
            })
        }, []);

        return (
            <div className="machines-overview-container add-machines">
                <div className="container">
                    <div className="header">
                        <h4>Add Location</h4>
                    </div>
    
                    <div className="main-div">
                        <form onSubmit={submit}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 d-flex">
                                    <div className="col-lg-3 col-md-3">
                                        <label for="fname">Name:</label><br />
                                        <input type="text" onChange={updateData} id="fname" name="rversion" className="input-text" />
                                        {/* <AiOutlineEye size={22} className="eye-icon" /> */}
                                    </div>
                                    <div className="row ">
                            <div className="col-lg-12 col-md-12 d-flex mt-45 justify-content-center">
                                <button >submit</button>
                            </div>
                                    </div>
                                    </div>
                        </div>

                    </form>
                </div>

            </div>
        </div>
            );
        };
        
        export default LocationOverview;
