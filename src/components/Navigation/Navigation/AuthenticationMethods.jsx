import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import Accordion from "react-bootstrap/Accordion";
import "../../../App.css";
import { Card, useAccordionButton } from "react-bootstrap";


const AuthenticationMethods = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("https://nlt1.yangasportswater.com/api/Authentication")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  
    return (
        <div className="machines-overview-container add-machines">
        <div className="main-container">
      <header>Authentication Methods</header>
      <div className="container">
            </div>
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <th className="id">
                <h4>ID</h4>
              </th>
              <th className="name name-2">
              <h4>Name</h4>
              </th>
              <th className="type">
              <h4>Type</h4>
              </th>
              <th className="apiLicense">
              <h4>ApiLicense</h4>
              </th>
              <th className="name">
              <h4>URL</h4>
              </th>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item?.IDAuthentication}>
                  <td className="id-num">{item?.IDAuthentication}</td>
                  <td>{item?.Name}</td>
                  <td>{item?.type?.Name}</td>
                  <td>{item?.ApiLicense}</td>
                  <td>{item?.URL}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
     </div>
    );
  };
  
  export default AuthenticationMethods;
  