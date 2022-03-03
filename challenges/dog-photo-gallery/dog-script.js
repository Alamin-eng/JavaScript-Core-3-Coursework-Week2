

let getDiv = document.getElementById('content')
let getUl = document.getElementById('ul')
let getButton = document.getElementById('button')
// if we remove these same following commented out code from inside promise then it will only show 1 image at a time without adding another as second li item
/*let createLi = document.createElement('li')
let createImg = document.createElement('img')
//style of the img
createImg.style.height = '400px'
createImg.style.width = '300px'
createImg.style.objectFit = 'contain'*/

// fetch random image function 
function randomImg(){
fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => {
    if(response.ok){
        return response.json()
    } else { 
        throw new Error()
    }
})
.then((body) =>{
    let createLi = document.createElement('li')
    let createImg = document.createElement('img')
    //style of the img
    createImg.style.height = '400px'
    createImg.style.width = '300px'
    createImg.style.objectFit = 'contain'
    // assigning values and appending
    createImg.src = body.message
    getUl.append(createLi)
    createLi.append(createImg)

})
.catch((error) => console.log('Image not found'))
}

//add event listner for button
getButton.addEventListener('click',randomImg)

getDiv.style.textAlign = 'center'
