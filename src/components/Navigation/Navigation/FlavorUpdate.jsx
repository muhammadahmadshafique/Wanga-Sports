import React, { useEffect, useState } from "react";

const FlavorUpdate = () => {
  const [allFlavors, setAllFlavors] = useState([]);
  const [name, setName] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState({});

  useEffect(() => {
    fetch("https://nlt1.yangasportswater.com/api/Flavors")
      .then((res) => res.json())
      .then((data) => setAllFlavors(data));
  }, []);

  const handleChangeName = (e) => {
    const updatedName = e.target.value;
    const updatedFlavor = {
      name: updatedName
    
    };
    setSelectedFlavor(updatedFlavor);
  };

 

  const handleSelectedFlavor = (flavor) => {
    setSelectedFlavor(flavor);
  };

  const handleUpdateData = () => {

     console.log(selectedFlavor.id,name)
     
    fetch(`https://nlt1.yangasportswater.com/api/Flavors/${selectedFlavor.id}`, {

      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"name": name}),
    })
      .then((res) => {
        console.log(res);
        window.location.reload(true)
         // log the response here
       
      })
      .then((data) => window.location.reload(true))
      .catch((error) => console.error(error));
  };
  
  
  
  
  

  return (
    <div className="machine-update-container">
      <div className="container-2">
        <div className="header">
          <h4>Update Yanga Flavors</h4>
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
              </thead>
              <tbody>
                {allFlavors?.map((flavor) => (
                  <tr
                    key={flavor?.id}
                    onClick={() => handleSelectedFlavor(flavor)}
                  >
                    <td>{flavor?.id}</td>
                    <td>{flavor?.name}</td>
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
                defaultValue={selectedFlavor?.id || ""}
                readOnly
              />
              <label>Name</label>
              <input
                placeholder="Name"
                defaultValue={selectedFlavor?.name || ""}
                onChange={(e)=>setName(e.target.value)}
              />
            
              <div className="btn-container">
                <button className="update-btn" onClick={handleUpdateData}>
                  Update
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setSelectedFlavor(null)}
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

export default FlavorUpdate;
