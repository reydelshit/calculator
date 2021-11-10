const topBTN = document.querySelector('.cal__top')
const middleBTN = document.querySelector('.cal__middle')
const bottomBTN = document.querySelector('.cal__bottom')
const inputNumber = document.querySelector('#input__number')
const inputResult = document.querySelector('.input__result')
const operation = document.querySelector('.operation')
const clear = document.querySelector('.clear')


const multi = document.querySelector('.multi')

topBTN.addEventListener('click', (top) =>{
    if(top.target !== top.currentTarget){
        let topp = top.target.value
        inputNumber.textContent += topp
        console.log(topp)
    }
})

// middleBTN.addEventListener('click', (mid) =>{
//     if(mid.target !== mid.currentTarget){
//         let midd = mid.target.value
//         inputNumber.textContent += midd
//         console.log(midd)
//     }
// })

// bottomBTN.addEventListener('click', (bot) =>{
//     if(bot.target !== bot.currentTarget){
//         let bott = bot.target.value
//         inputNumber.textContent += bott
//         console.log(bott)
//     }
// })

function equals(){

    let broo = inputNumber.textContent
    let hey = eval(broo)
    inputResult.textContent = `${Math.floor(hey)}`
    console.log(hey)
}

operation.addEventListener('click', (ope) =>{
    if(ope.target !== ope.currentTarget){
        let operation = ope.target.value
        if(ope.target.id === '='){
            equals()
        }
        inputNumber.textContent += operation
        
    }
})

clear.addEventListener('click', ()=>{
    inputNumber.textContent = ''
    inputResult.textContent = ''
})
