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

const AuthenticationMethods = () => {

    //store data in state
    const [data, setData] = useState([]);
    const [authenticationtype, setAuthenticationType] = useState([])


    //update the fields data
    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
     //API calling
     
     const submit = (e) => {
        e.preventDefault()
        fetch('https://nlt1.yangasportswater.com/api/Authentication', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "IDAuthentication": 0, 
                "Name": data?.rversion,
                "ApiLicense": "string",
                "URL": "string", 
                "type": parseInt(data?.authenticationtype)
            
            }),
        })
    }

useEffect(() => {
        fetch("https://nlt1.yangasportswater.com/api/AuthenticationType")
            .then((res) => res.json())
            .then((data) => {
                setAuthenticationType(data)
            })
        }, []);

    return (
        <div className="machines-overview-container add-machines">
            <div className="container">
                <div className="header">
                    <h4>Add Media</h4>
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
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">URL:</label><br />
                                    <input type="text" onChange={updateData} id="fname" name="rversion" className="input-text" />
                                    {/* <AiOutlineEye size={22} className="eye-icon" /> */}
                                </div>
                               
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-lg-12 col-md-12 d-flex mt-45">
                            <div className="col-lg-3 col-md-3">
                                    <label for="fname">Authentication Type</label><br />
                                    <select onChange={updateData} id="fname" name="authenticationtype" className="input-text" >
                                        {authenticationtype.map(res =>
                                            <option value={res.IDAuthenticationType}>{res.Name + "" + res.IDAuthenticationType}</option>)}
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Api License </label><br />
                                    <input type="text" onChange={updateData} id="fname" name="rversion" className="input-text" />
                                </div>
                        
                        </div>                                      
                    </div>                               
                        <div className="row ">
                            <div className="col-lg-12 col-md-12 d-flex mt-45 justify-content-center">
                                <button >submit</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AuthenticationMethods;
