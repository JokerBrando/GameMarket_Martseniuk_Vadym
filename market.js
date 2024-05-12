
console.log('Перевірка підключеного файлу скриптів market.js')


let itemsDiv = document.getElementById("items");

if (itemsDiv){
    console.log(itemsDiv)
    // console.log('Поле classList: ', itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    // console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    // itemsDiv.innerText = 'Програмно доданий текст'
    // itemsDiv.innerText += ' Другий Програмно доданий текст'
for(let i = 0; i< 100; i++){
    itemsDiv.innerHTML += '<div class = "item"></div>'
}

}else {
    console.log('Блок товарів не знайдено')
}


// let itemsArray = [
// 'Газонокосарка 43',
// 'Електричний тример 110',
// 'Електрична газонокосарка 32',
// 'Акумуляторний оприскувач 12 N',
// 'Газонокосарка 430',
// 'Електричний тример 130',
// 'Електрична газонокосарка 320',
// 'Акумуляторний оприскувач 12 E',
// ]

// itemsArray = itemsArray.sort()

// for (let i=0; i < itemsArray.length; i++){
//     console.log(i + '-й елемент: ', itemsArray[i])
// }

// itemsArray.sort().forEach((item) => {
//     console.log(item + '-й елемент: ', item)
// })


// let itemsArray = [
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     ]

// itemsArray.forEach((item) =>{
//     console.log(item)
// })


// if (itemsDiv){
//     itemsArray.forEach((item) =>{
//         console.log(item)
//     })
// } else {
//     console.log('Блок товарів не знайдено')
// }

// let itemsArray = [
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
// ]

// let itemsDiv = document.getElementById("items");

// if (itemsDiv) {
//     itemsArray.forEach((item) => {
//         console.log(item)
//     })
// } else {
//     console.log('Блок товарів не знайдено')
// }



// if (itemsDiv) {
//     itemsArray.forEach((item) => {
//         itemsDiv.innerHTML += 
//         `
//         <div class = "item">
//         <h2>Товар №${index}</h2>
//         <p>${item}</p>
//         </div>
//         `
//     })
// } else {
//     console.log('Блок товарів не знайдено')
// }