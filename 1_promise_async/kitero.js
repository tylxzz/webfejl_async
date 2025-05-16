function buyApple1(num) {
    if(num < 5) {
        return Promise.resolve('Van ' + num + ' almánk')
    }
    else {
        return Promise.reject('Nincs ' + num + ' almánk')
    }
}

const apple = buyApple1(4)
console.log(apple)
apple.then((value) => {
    console.log(value)
})

buyApple1(6).catch((error) => {
    console.log(error)
})

buyApple1(6).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})

function buyApple2(num) {
    return new Promise((resolve, reject) => {
        if(num < 5) {
            resolve('Van ' + num + ' almánk')
        }
        else {
            reject('Nincs ' + num + ' almánk')
        }
    })
}

buyApple2(4).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})

function buyApple3(num) {
    return new Promise((resolve, reject) => {
        if(num < 5) {
            setTimeout(() => {resolve('Van ' + num + ' almánk')}, 1000)
        }
        else {
            setTimeout(() => {reject('Nincs ' + num + ' almánk')}, 1000)
        }
    })
}

buyApple3(4).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})