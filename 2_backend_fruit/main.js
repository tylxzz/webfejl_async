const form = document.getElementById('fruitform')
const input1 = document.getElementById('fruit')
const input2 = document.getElementById('price')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const obj = {
        fruit: input1.value,
        price: input2.value
    }
})

fetch("http://127.0.0.1:63013/fruits", {method:'post', headers:{'Content-Type':'application/json'}, body:JSON.stringify(obj)}).then(response => {
    const response1 = response.json()
    response1.then(data => {
        console.log(data)
    })
})