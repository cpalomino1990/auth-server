const axios = require('axios');
const Heroe = require('../models/heroe');
const { response } = require("express");
const express = require('express');

const api_marvel = async(res, req = response)=>{
    
  try{  
    axios.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=5c3b326dc6e40cf22fc57dcd16c278fa&hash=6f141adf0686da6f3544c1443cc0caa9')
    .then((response)=>{
        
        console.log(response.json());
    })
        
    }catch(error){
         console.error(error);
    };




    
}   




module.exports={
    api_marvel
}  