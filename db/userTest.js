const axios = require('axios')
const Character = require('../models/Character')

function characterEntry() {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(apiResponse => {
        let data = apiResponse.data.results
        for(let i = 0; i < data.length; i++) {
            Character.create({
                name: data[i].name,
                species: data[i].species,
                status: data[i].status,
                image: data[i].image,
                episodes: data[i].episode,
                origin: data[i].origin.name
            })
        }
})}

characterEntry()