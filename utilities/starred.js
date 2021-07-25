const inquirer = require("../config/cities")
const Conf = require("conf")
const config = new Conf()
const ora = require('ora')
const getWeather = require('../utilities/weather')
const colors = require("colors")

module.exports = async (args) => {
  const cities = config.get('cities')
  const spinner = ora().start()
  
  try {
    // IF cities are not defined then run the askCities func in inquirer.js
    if(cities === undefined || cities === null){
      const run = async () => {
        spinner.stop()
        const credentials = await inquirer.askCities();
      }
      run()
  } else{
    spinner.stop()
    
    //Use the weather utility to get the weather of 5 cities
    const city1 = await getWeather(cities.city1)
    const city2 = await getWeather(cities.city2) 
    const city3 = await getWeather(cities.city3)
    const city4 = await getWeather(cities.city4)
    const city5 = await getWeather(cities.city5)

    function getTemp(path){
      return Math.round(path) + '°C'
    }

    function getHumidity(path){
      return path+ "%"
    }

    function getPressure(path){
      return path + "mb"
    }
 
    var Table = require('cli-table');
    var table = new Table({ head: ["City".blue, cities.city1.white, cities.city2.white, cities.city3.white, cities.city4.white, cities.city5.white]})

    table.push(
        { 'Overall' :[city1.data.weather[0].description, city2.data.weather[0].description, city3.data.weather[0].description, city4.data.weather[0].description, city5.data.weather[0].description,] },
        { 'Temperature': [getTemp(city1.data.main.temp), getTemp(city2.data.main.temp), getTemp(city3.data.main.temp), getTemp(city4.data.main.temp), getTemp(city5.data.main.temp),] }, 
        { 'Humidity': [getHumidity(city1.data.main.humidity), getHumidity(city2.data.main.humidity), getHumidity(city3.data.main.humidity), getHumidity(city4.data.main.humidity), getHumidity(city5.data.main.humidity),] },
        { 'Pressure': [getPressure(city1.data.main.pressure), getPressure(city2.data.main.pressure), getPressure(city3.data.main.pressure), getPressure(city4.data.main.pressure), getPressure(city5.data.main.pressure),] }
    );

    console.log(table.toString());
  }
  } catch (err) {
    spinner.stop()
  }
}