const getFirstArtist = () => {
    fetch('http://localhost:3000/api/v1/artists/10')
    .then(r => r.json())
    .then( renderPainting )
}
const paintingImg = document.querySelector('#image')
const paintingName = document.querySelector("#painting-name")
const artistNames = document.querySelector(".artist-name")
const artistButton = document.querySelector(".button")

const renderPainting = paintingObj => {
    paintingImg.src = paintingObj.paintings[1].painting_url
    const name = paintingObj.paintings[1].name
    paintingName.innerHTML = name
    renderAtribute(paintingObj)
    renderArtists(paintingObj)
    for(let id = 10; id === 13; id++ ){
        fetch(`http://localhost:3000/api/v1/artists/${id}`)
            .then(r => r.json())
            .then(console.log)
    }
    
    // renderArtists(paintingObj)

}
const renderArtists = artistObj => {
    const li = document.createElement("li")
    li.textContent = artistObj.name
    artistNames.append(li)
}

const renderAtribute = attributeObj => {
    const attribute = document.querySelector(".attribute")
    const li = document.createElement("li")
    li.textContent = attributeObj.paintings[1].painting_inspiration 
    attribute.append(li)
}

const paintingForm = document.querySelector("#new-painting")
    paintingForm.addEventListener("submit", event => {
        event.preventDefault()
fetch("http://localhost:3000/api/v1/paintings", {
    method: "POST", 
    headers: {
  "Content-Type": "application/json"
},
    body: JSON.stringify ({
    name: event.target.name.value,
    painting_url: event.target.painting_url.value
})
})
    .then(r => r.json())
    .then(newPainting => {
        const name = newPainting.name
        const url = newPainting.painting_url
        paintingName.textContent = name
        paintingImg.src = url

    })


} )



getFirstArtist()
