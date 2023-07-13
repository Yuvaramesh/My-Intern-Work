// // class car{
// //     constructor(model){
// //         this.model=model
// //     }
// // start(){
// //     console.log('start')
// // }
// // }
// // let give=new car('1234')
// // give.start()
// // console.log(give)


// // var global='global'
// // function call(test){
// //     return test
// // }
// // let save=call(global)
// // console.log(save);


// let array=['1','2','3','4','5']
// console.log(array);
// // for(let i=0;i<array.length;i++){
// //     console.log(array[i])
// // }


// // let give =array.filter((item)=>item !=='2')
// // console.log(give)
// // array.push('7')
// // console.log(array)
//              (or)
// let give =array.filter((item)=>item ==='2')
// console.log(give)
// // array.map((item)=>console.log())


// let body=document.getElementsByTagName('body')
// let body1=document.querySelector('.body')
// let h1=document.createElement('h1')
// h1.innerText="JS" 
// body1.appendChild(h1)
// console.log(body1)


// let body1=document.querySelector('.body')
// // let div=document.createElement('h1')
// let h1=document.createElement('h1')
// h1.innerText="JS" 
// h1.style.color='red'
// body1.appendChild(h1)
// console.log(body1)

let body=document.querySelector('body')
// let arr=[1,2,3,4,5,6,7,8,9]
let arr=[{
    name:"yuva",
    clg:'kcet',
    city:'sattur',
},
{
    name:"genga",
    clg:'kcet',   
    city:'sattur',
},
{
    name:"shivani",
    clg:'kcet',
    city:'sattur',
},

]
console.log(arr)
for(let i=0;i<arr.length;i++){

    let h1 =document.createElement('h1')
    let h2=document.createElement('h2')
    let p=document.createElement('p')
    h1.innerText=arr[i]
    body.appendChild(h1)
h1.innerText=arr[i].name
h2.innerText=arr[i].clg
p.innerText=arr[i].city


body.appendChild(h1)
body.appendChild(h2)
body.appendChild(p)
Image.src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg"
}
console.log(body) 
