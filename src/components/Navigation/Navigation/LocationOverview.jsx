import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import Accordion from "react-bootstrap/Accordion";
import "../../../App.css";
import { Card, useAccordionButton } from "react-bootstrap";



const LocationOverview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://nlt1.yangasportswater.com/api/Locations")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="machines-overview-container add-machines">
            <div className="container">
                <div className="header">
                    <h4>Location</h4>
                </div>
                </div>

      <div className="container">
        <table cellPadding={0} cellSpacing={0}>
          <thead>
            <th className="id">
              <h4>ID</h4>
            </th>
            <th className="name">
              <h4>Name</h4>
            </th>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item?.IDLocation}>
                <td className="id-num">{item?.IDLocation}</td>
                <td>{item?.Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default LocationOverview;