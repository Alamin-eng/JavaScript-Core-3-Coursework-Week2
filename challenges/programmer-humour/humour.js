let getDiv = document.getElementById('content')

let createImg = document.createElement('img')

fetch(`https://xkcd.now.sh/?comic=latest`)
.then((respose) =>{
    if(respose.ok){
        return respose.json()
    } else {
        throw new Error()
    }
})
.then((body) =>{
    console.log(body)
    createImg.src = body.img
    getDiv.append(createImg)
})