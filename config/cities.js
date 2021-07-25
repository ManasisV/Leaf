const inquirer = require('inquirer');
const Conf = require('conf')
const config = new Conf()

module.exports = {
  askCities: () => {
    console.log("Welcome to the configuration of your starred cities. Starred cities will appear if your type leaf starred.\nIf you want to exit type ctrl+c.\n")
    const questions = [
      {
        name: 'city1',
        type: 'input',
        message: 'Enter your 1st city',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your 1st city';
          }
        }
      },
      {
        name: 'city2',
        type: 'input',
        message: 'Enter your 2nd city',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your 2nd city';
          }
        }
      },
      {
        name: 'city3',
        type: 'input',
        message: 'Enter your 3rd city',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your 3rd city';
          }
        }
      },
      {
        name: 'city4',
        type: 'input',
        message: 'Enter your 4th city',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your 4th city';
          }
        }
      },
      {
        name: 'city5',
        type: 'input',
        message: 'Enter your 5th city',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your 5th city';
          }
        }
      },
      
    ];
    return inquirer.prompt(questions)
  },

};

