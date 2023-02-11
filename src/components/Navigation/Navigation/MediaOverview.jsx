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

const MediaOverview = () => {
  const [allMedia, setAllMedia] = useState(true);
  const [balticsMedia, setbalticsMedia] = useState(false);
  const [basicfitMedia, setbasicfitMedia] = useState(false);
  const [DefaultMedia, setdefaultMedia] = useState(false);
  const [frenchMedia, setfrenchMedia] = useState(false);
  const [PromoMedia, setpromoMedia] = useState(false);
  const [UKMedia, setUKMedia] = useState(false);
  const [USAMedia, setUSAMedia] = useState(false);
  const [YangaMedia, setyangaMedia] = useState(false);

  const [allmediaData, setAllMediaData] = useState([]);

  //   HANDLING TABS

  const handleAllmedia = () => {
    setAllMedia(true);
    setbalticsMedia(false);
    setbasicfitMedia(false);
    setdefaultMedia(false);
    setfrenchMedia(false);
    setpromoMedia(false);
    setUKMedia(false);
    setUSAMedia(false);
    setyangaMedia(false);
  };

  const handlebalticsMedia = () => {
    setAllMedia(false);
    setbalticsMedia(true);
    setbasicfitMedia(false);
    setdefaultMedia(false);
    setfrenchMedia(false);
    setpromoMedia(false);
    setUKMedia(false);
    setUSAMedia(false);
    setyangaMedia(false);

  };

  const handlebasicfitMedia = () => {
    setAllMedia(false);
    setbalticsMedia(false);
    setbasicfitMedia(true);
    setdefaultMedia(false);
    setfrenchMedia(false);
    setpromoMedia(false);
    setUKMedia(false);
    setUSAMedia(false);
    setyangaMedia(false);

  };

  const handledefaultMedia = () => {
    setAllMedia(false);
    setbalticsMedia(false);
    setbasicfitMedia(false);
    setdefaultMedia(true);
    setfrenchMedia(false);
    setpromoMedia(false);
    setUKMedia(false);
    setUSAMedia(false);
    setyangaMedia(false);

  };
  const handlefrenchMedia = () => {
    setAllMedia(false);
    setbalticsMedia(false);
    setbasicfitMedia(false);
    setdefaultMedia(false);
    setfrenchMedia(true);
    setpromoMedia(false);
    setUKMedia(false);
    setUSAMedia(false);
    setyangaMedia(false);

  };
  const handlePromoMedia = () => {
    setAllMedia(false);
    setbalticsMedia(false);
    setbasicfitMedia(false);
    setdefaultMedia(false);
    setfrenchMedia(false);
    setpromoMedia(true);
    setUKMedia(false);
    setUSAMedia(false);
    setyangaMedia(false);
  };
  const handleUKMedia = () => {
    setAllMedia(false);
    setbalticsMedia(false);
    setbasicfitMedia(false);
    setdefaultMedia(false);
    setfrenchMedia(false);
    setpromoMedia(false);
    setUKMedia(true);
    setUSAMedia(false);
    setyangaMedia(false);

  };
 /*  const handleUSMedia = () => {
    setAllMedia(false);
    setbalticsMedia(false);
    setbasicfitMedia(false);
    setdefaultMedia(false);
    setfrenchMedia(false);
    setpromoMedia(false);
    setUKMedia(false);
    setUSAMedia(true);
    setyangaMedia(false);
  }; */

  const handleYangaMedia = () => {
    setAllMedia(false);
    setbalticsMedia(false);
    setbasicfitMedia(false);
    setdefaultMedia(false);
    setfrenchMedia(false);
    setpromoMedia(false);
    setUKMedia(false);
    setUSAMedia(false);
    setyangaMedia(true);
  };




  useEffect(() => {
    fetch("https://nlt1.yangasportswater.com/api/Media")
      .then((res) => res.json())
      .then((data) => setAllMediaData(data));
  }, []);

  return (
    <div className="media-overview-container">
      <div className="container">
        <div className="header">
          <h4>Media Packages</h4>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <AiOutlineSearch className="search-icon" />
          </div>
        </div>
        <div className="main">
          <div className="tabs-container">
            <div
              className={allMedia ? "tab active" : "tab"}
              onClick={handleAllmedia}
            >
              All Media ({allmediaData?.length})
            </div>
            <div
              className={balticsMedia ? "tab active" : "tab"}
              onClick={handlebalticsMedia}
            >
              Baltics Media ({allmediaData?.length})
            </div>
            <div
              className={basicfitMedia ? "tab active" : "tab"}
              onClick={handlebasicfitMedia}
            >
              Basic-Fit ({allmediaData?.length})
            </div>
            <div
              className={DefaultMedia ? "tab active" : "tab"}
              onClick={handledefaultMedia}
            >
              Default ({allmediaData?.length})
            </div>

            <div
              className={frenchMedia ? "tab active" : "tab"}
              onClick={handlefrenchMedia}
            >
              French Clubs ({allmediaData?.length})
            </div>

            <div
              className={PromoMedia ? "tab active" : "tab"}
              onClick={handlePromoMedia}
            >
             Promo ({allmediaData?.length})
            </div>

            <div
              className={UKMedia ? "tab active" : "tab"}
              onClick={handleUKMedia}
            >
             UK ({allmediaData?.length})
            </div>
        {/*     <div
              className={USAMedia ? "tab active" : "tab"}
              onClick={handleUSMedia}
            >
             USA ({allmediaData?.length})
            </div> */}
            <div
              className={YangaMedia ? "tab active" : "tab"}
              onClick={handleYangaMedia}
            >
             Yanga ({allmediaData?.length})
            </div>
          </div>
          

          <div className="data-display-container">
            <Accordion>
              {allmediaData?.map((allmediaData, idx) => (
                <div>
                  <h6 className="title">{allmediaData?.Name}</h6>
                  <Card className="card">
                    <Card.Header className="card-header">
                      <CustomToggle eventKey={idx}>Click me!</CustomToggle>
                    </Card.Header>
                    {/* <Accordion.Collapse eventKey={idx}> */}
                      <Card.Body>
                        <div className="body">
                          <div className="body-left">
                            <div className="state-cont">
                              <h6 className="body-title">ID</h6>
                              <p className="m-0">{allmediaData?.media_id}</p>
                            </div>
                            <div className="name-cont">
                              <h6 className="body-title">Name</h6>
                              <p className="m-0">{allmediaData?.name}</p>
                            </div>
                            {/* </div> */}
                          <div className="name-cont">
                              <h6 className="body-title">Source</h6>
                              <p className="m-0">{allmediaData?.source}</p>
                            </div>
                          {/* comment this for source to be aligned to right  */}
                           </div> 
                           {/*  <div className="authentication-cont">
                              <h6 className="body-title">Authentication</h6>
                              <p className="m-0">
                                {allMachineData?.Authentication}
                              </p>
                            </div> */}
                            {/* <div className="media-cont">
                              <h6 className="body-title">Media</h6>
                              <p className="m-0">
                                {allMachineData?.MediaElement}
                              </p>
                            </div> */}
                            {/* <div className="translation-cont">
                              <h6 className="body-title">Translation set</h6>
                              <p className="m-0">
                                {allMachineData?.TranslationSet}
                              </p>
                            </div> */}
                            {/* <div className="online-cont">
                              <h6 className="body-title">Online</h6>
                              <p className="m-0">Couldn't find data</p>
                            </div>
                            <div className="translation-cont">
                              <h6 className="body-title">Version</h6>
                              <p className="m-0">Couldn't find data</p>
                            </div> */}
                          </div>
                      </Card.Body>
                    {/* </Accordion.Collapse> */}
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

export default MediaOverview;
