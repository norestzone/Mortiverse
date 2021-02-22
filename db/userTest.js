const axios = require('axios')
const Episode = require('../models/Episode')

<<<<<<< HEAD
Episode.updateOne(
    {episode: 'S04E08'},
    {
        synopsis: `Morty challenges Rick to build him the real-life equivalent of a "save game" function to live without consequence. Also, there's a giant vat of acid.`,
        link: 'https://rickandmorty.fandom.com/wiki/The_Vat_of_Acid_Episode'
    }, err => {
    if(err) return console.log(err)
    process.exit()
})


// function locationEntry() {
//     axios.get('https://rickandmortyapi.com/api/location?page=6')
//     .then(apiResponse => {
//         let data = apiResponse.data.results
//         for(let i = 0; i < data.length; i++) {
//             Location.create({
//                 name: data[i].name,
//                 type: data[i].type,
//                 dimension: data[i].dimension
//             })
//         }
// })}

// locationEntry()
=======
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
>>>>>>> 34d383ff3359242a5d13c50ab5c47fa45d29a98a
