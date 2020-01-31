import React, { useState, useEffect } from "react";
// import axios from "axios";
import {Link } from "react-router-dom";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);
  
  useEffect(() => {
      axiosWithAuth()
        .get('/colors')
        .then(response => {
          setColorList(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  }, []);
    
  

  return (
    <>
     <Link to="/"> Home </Link> 
      <ColorList colors={colorList} updateColors={setColorList} history={props.history}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
