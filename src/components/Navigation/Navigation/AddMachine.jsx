import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import "../../../App.css";
import { Card, useAccordionButton } from "react-bootstrap";
import { toNumber } from "lodash";

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

const MachinesOverview = () => {

    //store data in state
    const [data, setData] = useState([]);
    const [flavor, setFlavor] = useState([])
    const [location, setLocation] = useState([])
    const [language, setLanguage] = useState([])
    const [debtor, setDebtor] = useState([])


    //update the fields data
    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    //API calling 
    const submit = (e) => {
        console.log("🚀 ~ file: AddMachine.jsx:40 ~ submit ~ submit", data)

        e.preventDefault()
        fetch('https://nlt1.yangasportswater.com/api/Machines', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            // body: JSON.stringify({

            //     "IDMachine": 0, "Name": data?.rversion, "IDLocation": data?.IDLocation, "Location": data?.lname, "IDAuthentication": 11, "Authentication": "string", "URL": "string", "ApiLicense": "string", "IDTranslationSet": 1, "TranslationSet": "string", "IDMediaElement": 1, "MediaElement": "string", "IDFlavorSet":parseInt(data?.flavor), "FlavorSet":parseInt(data?.flavor), "idCardList": 0, "IDDebtor": 1

            // })
            body: JSON.stringify({

                "IDMachine": 0,
                 "Name": data?.rversion,
                  "IDLocation": parseInt(data?.location),
                   "Location": "string", 
                   "IDAuthentication": 11,
                    "Authentication": "string",
                     "URL": "string", 
                     "ApiLicense": "string",
                      "IDTranslationSet": 1,
                       "TranslationSet": "string", 
                       "IDMediaElement": 1, 
                       "MediaElement": "string",
                        "IDFlavorSet": parseInt(data?.flavor),
                         "FlavorSet": "string",
                          "idCardList": 0, "IDDebtor": parseInt(data?.debtor)
            }),
        })

    }

    useEffect(() => {
        fetch("https://nlt1.yangasportswater.com/api/FlavorSet")
            .then((res) => res.json())
            .then((data) => {
                setFlavor(data)
            })

        fetch("https://nlt1.yangasportswater.com/api/Locations")
            .then((res) => res.json())
            .then((data) => {
                console.log("🚀 ~ file: AddMachine.jsx:77 ~ .then ~ data", data)
                setLocation(data)
            })

            fetch("https://nlt1.yangasportswater.com/api/Debtor")
            .then((res) => res.json())
            .then((data) => {
                console.log("🚀 ~ file: AddMachine.jsx:77 ~ .then ~ data", data)
                setDebtor(data)
            })


        fetch("https://nlt1.yangasportswater.com/api/Language")
            .then((res) => res.json())
            .then((data) => {
                console.log("🚀 ~ file: AddMachine.jsx:77 ~ .then ~ data", data)
                setLanguage(data)
            })
    }, []);

    return (
        <div className="machines-overview-container add-machines">
            <div className="container">
                <div className="header">
                    <h4>Create Machines</h4>
                </div>

                <div className="main-div">
                    <form onSubmit={submit}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 d-flex">
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Running Version:</label><br />
                                    <input type="text" onChange={updateData} id="fname" name="rversion" className="input-text" />
                                    
                                </div>
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Debtor/Relation Number:</label><br />
                                    <input type="text" onChange={updateData} id="fname" name="rnumber" className="input-text" />
                                   
                                </div>
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Language Set:</label><br />
                                    <select onChange={updateData} id="language" name="language" className="input-text" >
                                        {language.map(res =>
                                            <option value={res.Name}>{res.Name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Machine State:</label><br />
                                    <input type="text" onChange={updateData} id="fname" name="machSet" className="input-text" />
                                   
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-12 col-md-12 d-flex mt-45">
                                <div className="col-lg-3 col-md-3 ">
                                    <label for="fname">Local ID</label><br />
                                    <input type="number" onChange={updateData} id="fname" name="id" className="input-text" />
                                    
                                </div>
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Deployment Tier</label><br />
                                    <input type="text" onChange={updateData} id="fname" name="deployment" className="input-text" />
                                    
                                </div>
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Location</label><br />
                                    <select onChange={updateData} id="location" name="location" className="input-text" >
                                        {location.map(res =>
                                            <option value={res.IDLocation}>{res.Name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Title Field</label><br />
                                    <input type="text" onChange={updateData} id="fname" name="field" className="input-text" />
                                   
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-lg-12 col-md-12 d-flex mt-45">
                                <div className="col-lg-3 col-md-3 ">
                                    <label for="fname">Debtor</label><br />
                                    <select onChange={updateData} id="location" name="location" className="input-text" >
                                        {debtor.map(res =>
                                            <option value={res.IDDebtor}>{res.Name}</option>
                                        )}
                                        </select>
                                    
                                </div>
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Flavor Set</label><br />
                                    <select onChange={updateData} id="fname" name="flavor" className="input-text" >
                                        {flavor.map(res =>
                                            <option value={res.id}>{res.name + "" + res.id}</option>)}
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Promo Video</label><br />
                                    <input type="text" onChange={updateData} id="fname" name="promo" className="input-text" />
                                    
                                </div>
                                <div className="col-lg-3 col-md-3">
                                    <label for="fname">Title Field</label><br />
                                    <input type="text" onChange={updateData} id="fname" name="tfield" className="input-text" />
                                    
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

export default MachinesOverview;
