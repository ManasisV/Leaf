const prompts = require('prompts');

module.exports = async (args) => {
        console.log("In order to get a OpenWeatherMap ApiKey please visit https://openweathermap.org/api for further information.")
        const response = await prompts({
            type: 'text',
            name: 'apiKey',
            message: 'Type your OpenWeatherMap API:',
            validate: value => value.length < 32 ? `Please type a valid OpenWeatherMap Api Key:` : true
        })
        
        return response.apiKey
}