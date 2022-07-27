const crypto = require('crypto');
const { model } = require('mongoose');

//bug en la libreria
const fetchP = import('node-fetch').then(mod => mod.default)
const fetch = (...args) => fetchP.then(fn => fn(...args))
const {Heroes} = require('../models/heroe')
const { response, application } = require("express");
const Heroe = require('../models/heroe');





const buscarPersonajes= async(req ,res) =>{
    
    fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=5c3b326dc6e40cf22fc57dcd16c278fa&hash=6f141adf0686da6f3544c1443cc0caa9')
    .then(response => response.json())
    .then(body => {
        personajes = body.data.results;
        personajes.forEach(element => {
            const dbHeroes =  new Heroe(name: element.name, avatar: element.thubnail.url);
            const db = await dbHeroes.save();
        });
        
    });
    
   
	
}




module.exports={
    buscarPersonajes
}