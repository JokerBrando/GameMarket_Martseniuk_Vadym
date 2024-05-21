
console.log('Перевірка підключеного файлу скриптів market.js')

//визначення масиву товарів

// let itemsArray = [

//     {
//         firstName: "Зеро",
//         lastName: "Саб",
//         power: "freeze",
//         famous:  "S+ Tear",
//         photo : "https://i.redd.it/rr1ri29i6msb1.jpg"
//     },

//     {
//         firstName: "Скорпіон",
//         lastName: "Улюбленець Саб Зеро",
//         power: "fire",
//         famous:  "S+ Tear",
//         photo : "https://upload.wikimedia.org/wikipedia/ru/thumb/9/95/Scorpion_in_MK1.png/411px-Scorpion_in_MK1.png"
//     },
//     {
//         firstName: "Рейден",
//         lastName: "Не вертає долги",
//         power: "electric",
//         famous:  "A+ Tear",
//         photo : "https://wiki.supercombo.gg/images/thumb/d/db/Mk1_raiden_portrait.png/450px-Mk1_raiden_portrait.png"
//     }
//     ,
//     {
//         firstName: "він хоче себе проявити, щоб його запомнили",
//         lastName: "Смоук -",
//         power: "smoke",
//         famous:  "F Tear",
//         photo : "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c5/Smoke_in_MK1.png/411px-Smoke_in_MK1.png"
//     }
// ]

// let itemsDiv = document.getElementById("items");

// if (itemsDiv){
//     itemsArray.forEach((item, index) =>{
//         // console.log(item)
//         itemsDiv.innerHTML += 
//         `
//         <div class = "item">
//         <h2>Персонаж №${index+1} з ${itemsArray.length}</h2>
//         <p>${item.lastName} ${item.firstName}</p>
//         <p><img src="${item.photo}" alt="${item.lastName} ${item.firstName}" class="user-photo"></p>
//         <p>power: ${item.power}<p>
//         <p>famous: ${item.famous}</p>
//         </div>
//         `
//     })

// } else {
//     console.log('Блок товарів не знайдено')
// }


let itemsArray =[
    {
        title1_1:"Мотокоса 3000",
        title1_2:"https://cdn.27.ua/sc--media--prod/default/0e/2b/cb/0e2bcbfe-04ce-4fd0-b14f-580bddec354a.jpg",
        title1_3:"https://th.bing.com/th/id/OIP.MuBGFZpCweYeml-Mh8tjlgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
        title1_4:"https://ukrpublic.com/images/2021/08/06/image_large.jpg",
        title1_5: "5499 грн",
        title1_6: "4497 грн",
        title1_7:"Ціна за купоном 4395 грн",


    },
    {
        title1_1:"Мотокоса 3465",
        title1_2:"https://th.bing.com/th/id/OIP.lxJWJ5Tghwcbm_18j1ltdQHaIG?w=171&h=187&c=7&r=0&o=5&pid=1.7",
        title1_3:"https://th.bing.com/th/id/OIP.MuBGFZpCweYeml-Mh8tjlgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
        title1_4:"https://ukrpublic.com/images/2021/08/06/image_large.jpg",
        title1_5: "5499 грн",
        title1_6: "4497 грн",
        title1_7:"Ціна за купоном 4395 грн",


    },
    {
        title1_1:"Мотокоса 9494",
        title1_2:"https://th.bing.com/th/id/OIP.Yrb9Bl1asb4RROM9jrThNwHaLb?w=121&h=187&c=7&r=0&o=5&pid=1.7",
        title1_3:"https://th.bing.com/th/id/OIP.MuBGFZpCweYeml-Mh8tjlgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
        title1_4:"https://ukrpublic.com/images/2021/08/06/image_large.jpg",
        title1_5: "5499 грн",
        title1_6: "4497 грн",
        title1_7:"Ціна за купоном 4395 грн",


    },
    {
        title1_1:"Мотокоса 949432",
        title1_2:"https://images.ua.prom.st/570224242_w640_h640_motokosa-stihl-fs.jpg",
        title1_3:"https://th.bing.com/th/id/OIP.MuBGFZpCweYeml-Mh8tjlgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
        title1_4:"https://ukrpublic.com/images/2021/08/06/image_large.jpg",
        title1_5: "5499 грн",
        title1_6: "4497 грн",
        title1_7:"Ціна за купоном 4395 грн",


    },
]

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
         itemsArray.forEach((item, index) =>{
             // console.log(item)
             itemsDiv.innerHTML += 
             `
             <div id="item" class="item">

             <div class="item-title">${item.title1_1}</div>
             
                <div><img src="${item.title1_2}" class= "user-photo"></div>

                <div class="parts-pay">
                    <div><img src="${item.title1_3}" class= "user-photo1"></div>
                    <div><img src="${item.title1_4}" class= "user-photo2"></div>
                </div>

                <div class="prise">
                    <div class="kdkd">${item.title1_5}</div>
                    <div>${item.title1_6}</div>
                </div>

                <div class="prise bonus">
                    <div class="txt122">${item.title1_7}</div>
                </div>

                
            </div>
             `
         })
    
     } else {
         console.log('Блок товарів не знайдено')
     }




















//     console.log(itemsDiv)

    
//     // console.log('Поле classList: ', itemsDiv.classList)
//     // console.log('Поле id: ', itemsDiv.id)
//     // console.log('Поле clientWidth: ', itemsDiv.clientWidth)
//     // console.log('Поле innerHTML: ', itemsDiv.innerHTML)

//     // itemsDiv.innerText = 'Програмно доданий текст'
//     // itemsDiv.innerText += ' Другий Програмно доданий текст'
// for(let i = 0; i< 100; i++){
//     itemsDiv.innerHTML += '<div class = "item"></div>'
    
// }

// }else {
//     console.log('Блок товарів не знайдено')
// }


// itemsArray = itemsArray.sort()

//  for (let i=0; i < itemsArray.length; i++){
//      console.log(i + 1, itemsArray[i])
//  }

//  itemsArray.sort().forEach((item) => {
//      console.log(item + 1, item)
//  })
//  let itemsArray = [
//  'Газонокосарка 43',
//  'Електричний тример 110',
//  'Електрична газонокосарка 32',
//  'Акумуляторний оприскувач 12 N',
//  'Газонокосарка 430',
//  'Електричний тример 130',
// 'Електрична газонокосарка 320',
//  'Акумуляторний оприскувач 12 E',
// ]

 


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