import React, { useEffect, useState } from "react";

const MachineUpdate = () => {
  const [allMachines, setAllMachines] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState({});

  useEffect(() => {
    fetch("https://nlt1.yangasportswater.com/api/Machines")
      .then((res) => res.json())
      .then((data) => setAllMachines(data));
  }, []);

  const handleChangeName = (e) => {
    const updatedName = e.target.value;
    const updatedMachine = {
      Name: updatedName,
      Location: selectedMachine?.Location,
      Authentication: selectedMachine?.Authentication,
      TranslationSet: selectedMachine?.TranslationSet,
      MediaElement: selectedMachine?.MediaElement,
    };
    setSelectedMachine(updatedMachine);
  };

  const handleChangeLocation = (e) => {
    const updatedLocation = e.target.value;
    const updatedMachine = {
      Name: updatedLocation,
      Location: selectedMachine?.Location,
      Authentication: selectedMachine?.Authentication,
      TranslationSet: selectedMachine?.TranslationSet,
      MediaElement: selectedMachine?.MediaElement,
    };
    setSelectedMachine(updatedMachine);
  };

  const handleChangeAuthentication = (e) => {
    const updatedAuthentication = e.target.value;
    const updatedMachine = {
      Name: updatedAuthentication,
      Location: selectedMachine?.Location,
      Authentication: selectedMachine?.Authentication,
      TranslationSet: selectedMachine?.TranslationSet,
      MediaElement: selectedMachine?.MediaElement,
    };
    setSelectedMachine(updatedMachine);
  };

  const handleChangeTranslationSet = (e) => {
    const updatedTranslationSet = e.target.value;
    const updatedMachine = {
      Name: updatedTranslationSet,
      Location: selectedMachine?.Location,
      Authentication: selectedMachine?.Authentication,
      TranslationSet: selectedMachine?.TranslationSet,
      MediaElement: selectedMachine?.MediaElement,
    };
    setSelectedMachine(updatedMachine);
  };

  const handleChangeMediaElement = (e) => {
    const updatedMediaElement = e.target.value;
    const updatedMachine = {
      Name: updatedMediaElement,
      Location: selectedMachine?.Location,
      Authentication: selectedMachine?.Authentication,
      TranslationSet: selectedMachine?.TranslationSet,
      MediaElement: selectedMachine?.MediaElement,
    };
    setSelectedMachine(updatedMachine);
  };

  const handleSelectedMachine = (machine) => {
    setSelectedMachine(machine);
  };

  const handleUpdateData = () => {
    fetch(`https://nlt1.yangasportswater.com/api/Machines`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedMachine),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="machine-update-container">
      <div className="container-2">
        <div className="header">
          <h4>Update Yanga Machines</h4>
        </div>
        <div className="main-container-2">
          <div className="main-container-left">
            <table>
              <thead>
                <th>
                  <p>ID</p>
                </th>
                <th>
                  <p>Name</p>
                </th>
                <th>
                  <p>Location</p>
                </th>
                <th>
                  <p>Authentication</p>
                </th>
                <th>
                  <p>Translation set</p>
                </th>
                <th>
                  <p>Media</p>
                </th>
              </thead>
              <tbody>
                {allMachines?.map((machine) => (
                  <tr
                    key={machine?.IDMachine}
                    onClick={() => handleSelectedMachine(machine)}
                  >
                    <td>{machine?.IDMachine}</td>
                    <td>{machine?.Name}</td>
                    <td>{machine?.Location}</td>
                    <td>{machine?.Authentication}</td>
                    <td>{machine?.TranslationSet}</td>
                    <td>{machine?.MediaElement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="main-container-right">
            <div className="form-container">
              <label>ID</label>
              <input
                placeholder="ID"
                defaultValue={selectedMachine?.IDMachine || ""}
                readOnly
              />
              <label>Name</label>
              <input
                placeholder="Name"
                defaultValue={selectedMachine?.Name || ""}
                onChange={handleChangeName}
              />
              <label>Location</label>
              <input
                placeholder="Location"
                defaultValue={selectedMachine?.Location || ""}
                onChange={handleChangeLocation}
              />
              <label>Authentication</label>
              <input
                placeholder="Authentication"
                defaultValue={selectedMachine?.Authentication || ""}
                onChange={handleChangeAuthentication}
              />
              <label>Translation Set</label>
              <input
                placeholder="Translation Set"
                defaultValue={selectedMachine?.TranslationSet || ""}
                onChange={handleChangeTranslationSet}
              />
              <label>Media</label>
              <input
                placeholder="Media"
                defaultValue={selectedMachine?.MediaElement || ""}
                onChange={handleChangeMediaElement}
              />
              <div className="btn-container">
                <button className="update-btn" onClick={handleUpdateData}>
                  Update
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setSelectedMachine(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineUpdate;
