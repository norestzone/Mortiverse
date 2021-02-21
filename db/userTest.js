const axios = require('axios')
const Episode = require('../models/Episode')

function createEpisode(e) {
        console.log(e)
        e.forEach(episode => {
            Episode.create({
                name: episode.name,
                episode: episode.episode,
                date: episode.air_date,
                characters: [episode.characters]
            })
        })
}

function episodeEntry() {
    axios.get('https://rickandmortyapi.com/api/episode?page=3')
    .then(apiResponse => {
        createEpisode(apiResponse.data.results)
})}

episodeEntry()