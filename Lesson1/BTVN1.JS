function element(main, tags){
     return `<${tags}>${main}<${tags}>`
}
document.getElementById(`main`).innerHTML = element(`ducanh`)
 
const urls=`https://60ae0d5e80a61f00173324bc.mockapi.io/products`

function takeApi(url){
     return fetch(url)
     .then(res=>res.json())
     .then(data=> data) 
     
}
let a = takeApi(urls);
a.then(data => console.log(data))
a.then(datas => datas.forEach(data => {
     document.getElementById(`main`).innerHTML += (`
     <img src="${data.image}"></img>
     <div> ${element(data.name,`p` )}</div>
     <div> ${element(data.error,`p` )}</div>
     <div> ${element(data.sku ,`p` )}</div>
     <div> ${element(data.id,`p` )}</div>
     <div> ${element(data.color,`p` )}</div>
     `)
}))



