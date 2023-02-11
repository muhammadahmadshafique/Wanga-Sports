import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import Accordion from "react-bootstrap/Accordion";
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

const MachinesOverview = () => {
  const [allMachines, setAllMachines] = useState(true);
  const [ofMachines, setOfMachines] = useState(false);
  const [installedMachines, setInstalledMachines] = useState(false);
  const [entiresMachines, setEntiresMachines] = useState(false);
  const [allMachinesData, setAllMachinesData] = useState([]);

  //   HANDLING TABS

  const handleAllMachines = () => {
    setAllMachines(true);
    setOfMachines(false);
    setInstalledMachines(false);
    setEntiresMachines(false);
  };

  const handleOfMachines = () => {
    setOfMachines(true);
    setInstalledMachines(false);
    setAllMachines(false);
    setEntiresMachines(false);
  };

  const handleInstalledMachines = () => {
    setInstalledMachines(true);
    setOfMachines(false);
    setAllMachines(false);
    setEntiresMachines(false);
  };

  const handleEntiresMachines = () => {
    setEntiresMachines(true);
    setInstalledMachines(false);
    setOfMachines(false);
    setAllMachines(false);
  };

  useEffect(() => {
    fetch("https://nlt1.yangasportswater.com/api/Machines")
      .then((res) => res.json())
      .then((data) => setAllMachinesData(data));
  }, []);

  return (
    <div className="machines-overview-container">
      <div className="container">
        <div className="header">
          <h4>Hydration Stations</h4>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <AiOutlineSearch className="search-icon" />
          </div>
        </div>
        <div className="main">
          <div className="tabs-container">
            <div
              className={allMachines ? "tab active" : "tab"}
              onClick={handleAllMachines}
            >
              All Machines ({allMachinesData?.length})
            </div>
            <div
              className={ofMachines ? "tab active" : "tab"}
              onClick={handleOfMachines}
            >
              Offline Machines ({allMachinesData?.length})
            </div>
            <div
              className={installedMachines ? "tab active" : "tab"}
              onClick={handleInstalledMachines}
            >
              To Be Installed Machines ({allMachinesData?.length})
            </div>
            <div
              className={entiresMachines ? "tab active" : "tab"}
              onClick={handleEntiresMachines}
            >
              Double Entries ({allMachinesData?.length})
            </div>
          </div>

          <div className="data-display-container">
            <Accordion>
              {allMachinesData?.map((allMachineData, idx) => (
                <div>
                  <h6 className="title">{allMachineData?.Name}</h6>
                  <Card className="card">
                    <Card.Header className="card-header">
                      <CustomToggle eventKey={idx}>Click me!</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={idx}>
                      <Card.Body>
                        <div className="body">
                          <div className="body-left">
                            <div className="state-cont">
                              <h6 className="body-title">State</h6>
                              <div className="box"></div>
                            </div>
                            <div className="name-cont">
                              <h6 className="body-title">Name</h6>
                              <p className="m-0">{allMachineData?.Name}</p>
                            </div>
                          </div>
                          <div className="body-right">
                            <div className="location-cont">
                              <h6 className="body-title">Location</h6>
                              <p className="m-0">{allMachineData?.Location}</p>
                            </div>
                            <div className="authentication-cont">
                              <h6 className="body-title">Authentication</h6>
                              <p className="m-0">
                                {allMachineData?.Authentication}
                              </p>
                            </div>
                            <div className="media-cont">
                              <h6 className="body-title">Media</h6>
                              <p className="m-0">
                                {allMachineData?.MediaElement}
                              </p>
                            </div>
                            <div className="translation-cont">
                              <h6 className="body-title">Translation set</h6>
                              <p className="m-0">
                                {allMachineData?.TranslationSet}
                              </p>
                            </div>
                            <div className="online-cont">
                              <h6 className="body-title">Online</h6>
                              <p className="m-0">Couldn't find data</p>
                            </div>
                            <div className="translation-cont">
                              <h6 className="body-title">Version</h6>
                              <p className="m-0">Couldn't find data</p>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachinesOverview;
