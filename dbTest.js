const axios = require('axios')

const Character = require('./models/Character')
const Episode = require('./models/Episode')
const Location = require('./models/Location')

function locationEntry() {
    axios.get('https://rickandmortyapi.com/api/location')
    .then(apiResponse => {
        let data = apiResponse.data.results
        for(let i = 0; i < data.length; i++) {
            Location.create({
                name: data[i].name,
                type: data[i].type,
                dimension: data[i].dimension
            })
        }
})}

locationEntry()