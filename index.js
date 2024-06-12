const provinces = require('./province.json');
const districts = require('./districts.json');
const dataCar = require('./dataCar.json'); 
module.exports = () => ({
  provinces: provinces,
  districts: districts,
  dataCar: dataCar
});