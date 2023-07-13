// let body=document.querySelector('body')
// let div1=document.createElement('div')
// let div2=document.createElement('div')

// let h1=document.createElement('h1')
// let h2=document.createElement('h2')

// h1.innerText=('welcome')
// div1.appendChild(h1)
// body.appendChild(h1)

// let imgArray=['https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg']


// // let imgArray=['https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg','https://img.freepik.com/free-photo/bottle-with-flowers-flower-it_1340-27075.jpg?size=626&ext=jpg']

// console.log(imgArray)
// let  body1=document.querySelector('body')

// for (let i=0;i<imgArray.length;i++){
//     let img=document.createElement('img')

//     img.style.width='500px';
//     img.style.height='500px';


//     img.src=imgArray[i]
// body.appendChild(img)
// }


// let imgArray1=['https://img.freepik.com/free-photo/bottle-with-flowers-flower-it_1340-27075.jpg?size=626&ext=jpg']
// console.log(imgArray1);
// let body1=document.querySelector('body')
// for(let i=0;i<imgArray1.length;i++){
//     let img=document.createElement('img')
//     img.style.width='500px';
//     img.style.height='500px';
//     img.style.marginLeft='10px';


//     img.src=imgArray1[i]
// body.appendChild(img)
// }



// let h1=document.querySelector('h1')
// h1.addEventListener('click',()=>{
//     h1.style.color='Blue'
//     document.location.href="https://www.google.com"
// })
// let h1=document.querySelector('h1')
// h1.addEventListener('click',()=>{
 
//  h1.style.color='Blue'

// let  body=document.querySelector('body')

// for (let i=0;i<imgArray1.length;i++){
//     let img=document.createElement('img')

//     img.style.width='500px';
//     img.style.height='500px';


//     img.src=imgArray1[i]
// body.appendChild(img)
// }



// console.log('first')
// console.log('second')



// fetch('data.txt')
// .then((res)=>{
//     return res.text()
// }
// )
// .then((dat)=>{
//     console.log(dat)
// })


// fetch('fetch.json')
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data)
// })


// fetch('data.txt')
// .then((res)=>{
//     return res.text()
// }
// )
// .then((data)=>{
//     console.log(data)
//     var parser=new DOMParser()
//     var doc=parser.parseFromString(data,"text/html")
//     console.log(doc.body)


// })


// fetch('data.txt')
// .then((res)=>res.text())
// .then((dat)=>{
//     console.log(dat)
//     var parser=new DOMParser()
//     var doc=parser.parseFromString(dat,"text/html")
//     console.log(doc.head)

// // })

// let body=document.querySelector('body')
// fetch('https://dummyjson.com/products')

// .then((res)=>res.json())
// .then((dat)=>{
//     console.log(dat)
//     call(dat)
// })
// function call (dat){
//     let products=document.createElement('body')
//     for(let i=0;i<products.length;i++){
//         let div=document.createElement('div')
//         console.log(dat.products[7].images[0])
//         let img=document.createElement('img')
//         img.src=dat.products[7].images[0]
// body.appendChild(img)
// }
// }


// // function call(dat){
// //     for(let i=0;i<products.length;i++){
// //         let div=document.createElement('div')
// //         let img=document.createElement('img')
// //     console.log(dat.products[5].images[0])
    
// //    img.className='img'
// // let h1=document.createElement('h1')
    
// //     img.src=dat.products[5].images[0]
// //     body.appendChild(img)
// //     div.appendChild(h1)
// //     body.appendChild(div)
// // }
// // }



// fetch('fetch.json')
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data)
// })


// fetch('data.txt')
// .then((res)=>{
//     return res.text()
// }
// )
// .then((data)=>{
//     console.log(data)
//     var parser=new DOMParser()
//     var doc=parser.parseFromString(data,"text/html")
//     console.log(doc.body)


// })



// let  body1=document.querySelector('body')
// fetch('fetch.json')
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data)
// })

// for (let i=0;i<imgArray1.length;i++){
//     let img=document.createElement('img')

//     img.style.width='500px';
//     img.style.height='500px';


//     img.src=imgArray[i]
// body.appendChild(img)
// }


// function fetchData() {
//     fetch('sample.json')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
  


let body=document.querySelector('.body')
let cartProduct=[]
fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    call(data)
})

function call(data){
    console.log(data.products.length)
    for(let i=0;i<data.products.length;i++){
        let div=document.createElement('div')
        let img=document.createElement('img')
        let button=document.createElement('button')
        button.innerText='Add Cart'

        let h1=document.createElement('h1')
    //console.log(data.products[5].images[0])

    h1.innerText=data.products[i].title
    img.src=data.products[i].images[0]
    

    img.className='img'
    div.className='container'
    h1.className='product-name'
    button.addEventListener('click',()=>{
        console.log(data.products[i])
        cartProduct.push(data.products[i])
        console.log(cartProduct)
    })

    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(button)
    body.appendChild(div)
    
}}
console.log(body)