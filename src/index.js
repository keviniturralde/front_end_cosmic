const getFirstArtist = () => {
    fetch('http://localhost:3000/api/v1/artists/10')
    .then(r => r.json())
    .then( renderArtist )
}

const renderArtist = artistObj => {
    const paintingImg = document.querySelector('#image')
    paintingImg.src = artistObj.paintings[1].painting_url
        

}
getFirstArtist()