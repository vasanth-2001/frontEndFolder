import React from 'react';
import facebook from '../assets/facebook.png';
import ds from '../assets/Harrirer.jfif';
import commonData from '../shared/constant/constantData';
const MyImagesComp = () => {
  return (<div>
    <h2> This is My Images Component</h2>
    <img src={facebook} alt='FB' height="200px" width="200px"/>
    <img src={ds} alt='Harrier' height="200px" width="200px"/>
    <img src={commonData.insta} alt='insta'height="200px" />
    <video src={commonData.vide} controls ></video>
    </div>
  )
}

export default MyImagesComp