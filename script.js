const h2El = document.getElementById('browser');

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

h2El.innerText = screenWidth;

const tabEl = document.getElementById('tab');
tabEl.addEventListener('click', ()=>{
    window.close();
});

const naviEl = document.getElementById('navi');
naviEl.addEventListener('click', ()=>{
    window.history.go(-2);
});


const locate = window.location.pathname
const home = document.getElementById('home');
if(locate === "/javascript/bom/index.html"){
    home.classList.add('active')
}
const navie = window.navigator.onLine;
console.log(navie);

// window.alert("Hello Kingsley");

// const value = window.confirm('Are you a Male');
// console.log(value)

// const namee = window.prompt("Enter your name", 'Kingsley');
// console.log(namee);

// alert("Hello \nHow are you")

const numel = document.getElementById('num');
console.log(numel.innerText *2)

// const myInterval = setInterval(()=>{
//     numel.innerText *= 2;
// },1000)

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    clearInterval(myInterval)
})

// document.cookie = "user=kingsley"

// const myCookie = document.cookie
// console.log(myCookie);
// console.log(myCookie.split(';'));

const student = {
    name:"Kingsley",
    email: "kingsley@gmail"
}

localStorage.setItem('user', JSON.stringify(student));
const user = JSON.parse(localStorage.getItem('user'))
console.log(user.email);


// fetch('https://fakestoreapi.com/products', {
//     method: "GET",
// })
//     .then((response) => {
//         if(!response.ok)
//             return "Something went wrong"

//         return response.json()
//     })
//     .then(data =>{
//         products = data;
//         console.log(data);

//         products.map(product => {
//             const innerEl = `
//             <div class="product">
//                 <p>${product.title}</p>
//                 <img src=${product.image} alt="">
//                 <p>${product.price}</p>
//             </div>
//             `

//             productsEl.innerHTML += innerEl;
//         })
        
//     })
//     .catch(err => console.log(err));


let products = [];
const productsEl = document.getElementById('productId');

const fetchData = async () => {
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        products = data;

        products.map(product => {
            const innerEl = `
            <div class="product">
                <p>${product.title}</p>
                <img src=${product.image} alt="">
                <p>${product.price}</p>
            </div>
            `

            productsEl.innerHTML += innerEl;
        })
    }
    catch(err){
        console.log("The error is: " + err.message);
    }
}

fetchData()