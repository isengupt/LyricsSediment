
let jsonData = require('./song.json');

console.log(jsonData.songs[0])
function organizeData(item) {
let songPoint = {
    rootDate: Date.parse(item.root_date),
    title: item.information.title,
    url: item.information.path,
    
    recordLoc: item.information.record_loc,
    pubDate: Date.parse(item.information.date),
    lyrics: item.information.lyrics,
    location: {
        lng: item.location.lng,
        lat: item.location.lat
    }
}



let keywords = []
for (id of Object.keys(item['raked_words'])) {
    for (word of item['raked_words'][id]) {
        console.log(word)
        keywords.push({phrase: word[0], score: word[1]})
    }
}
songPoint['keywords'] = keywords
console.log(songPoint)

}
for (sg of jsonData.songs) {
    organizeData(sg)
}

