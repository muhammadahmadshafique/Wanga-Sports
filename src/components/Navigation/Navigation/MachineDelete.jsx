import React, { useEffect, useState } from "react";

const MachineDelete = () => {
  const [allMachines, setAllMachines] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState({});

  useEffect(() => {
    fetch("https://nlt1.yangasportswater.com/api/Machines")
      .then((res) => res.json())
      .then((data) => setAllMachines(data));
  }, []);

  const handleSelectedMachine = (machine) => {
    setSelectedMachine(machine);
  };

  const handleDeleteData = () => {
    fetch(
      `https://nlt1.yangasportswater.com/api/Machines/Permanent/${selectedMachine?.IDMachine}`,
      {
        method: "DELETE",
      }
    )
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
              />
              <label>Location</label>
              <input
                placeholder="Location"
                defaultValue={selectedMachine?.Location || ""}
              />
              <label>Authentication</label>
              <input
                placeholder="Authentication"
                defaultValue={selectedMachine?.Authentication || ""}
              />
              <label>Translation Set</label>
              <input
                placeholder="Translation Set"
                defaultValue={selectedMachine?.TranslationSet || ""}
              />
              <label>Media</label>
              <input
                placeholder="Media"
                defaultValue={selectedMachine?.MediaElement || ""}
              />
              <div className="btn-container">
                <button className="cancel-btn" onClick={handleDeleteData}>
                  Delete{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineDelete;
