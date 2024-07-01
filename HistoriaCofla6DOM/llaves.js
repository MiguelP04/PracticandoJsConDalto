const container = document.querySelector(".container")

let createKey = (number, model, price)=>{
    let imgKeys = document.createElement("img")
    imgKeys.setAttribute("src", "img/llave.jpg")
    let numberKeys = document.createElement("h1")
    let textNodeNumberKeys = document.createTextNode(`Llave ${number}`)
    numberKeys.appendChild(textNodeNumberKeys)
    let modelKeys = document.createElement("h3")
    let textNodeModelKeys = document.createTextNode(`Modelo ${model}`)
    modelKeys.appendChild(textNodeModelKeys)
    let priceKeys = document.createElement("p")
    let textNodePriceKeys = document.createTextNode(`Precio <b>$${price}</b>`)
    priceKeys.appendChild(textNodePriceKeys)
    return [imgKeys, numberKeys, modelKeys, priceKeys]
}

let fragment = document.createDocumentFragment()

const submitModel = (number)=>{
    document.querySelector(".key-data").value = number;
}

for(i = 1; i <= 20; i++){
    let modelKey = parseInt(Math.random()*10000)
    let priceKey = parseInt(Math.random()*10+30)
    let div = document.createElement("div")
    div.classList.add("flex-items", `items-${i}`)
    div.tabIndex = i;
    let createdKey = createKey(i, modelKey, priceKey)
    div.addEventListener("click", ()=>{submitModel(modelKey)})
    div.innerHTML = createdKey[0].outerHTML + createdKey[1].outerHTML + createdKey[2].outerHTML + createdKey[3].textContent
    console.log(div)

    fragment.appendChild(div)

}

container.appendChild(fragment)

