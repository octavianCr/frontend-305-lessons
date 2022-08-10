// const API = "https://jsonplaceholder.typicode.com"

// fetch(`${API}/posts`)
// .then(response => response.json())
// .then(posts =>{

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// })

// .catch(error => console.log(error))


// let item1 = document.createElement("p")
// item1.textContent = posts[1].title
// display.appendChild(item1)

// ____________________________________________________________


const API = "https://jsonplaceholder.typicode.com"
let button = document.getElementById("btn")
let display = document.getElementById("insert")



// fetch(`${API}/posts`)
// .then(response => response.json())
// .then(posts =>{
//     // console.log(posts[1]);

//     for (let i = 0; i < 10; i++) {
        
//         let item1 = document.createElement("p")
//         item1.textContent = posts[i].title
//         display.appendChild(item1)
        
//     }

// })

function fff(){
    fetch(`${API}/posts`)
    .then(response => response.json())
    .then(posts =>{
        // console.log(posts[1]);
    
        for (let i = 0; i < 10; i++) {
            
            let item1 = document.createElement("p")
            item1.textContent = posts[i].title
            display.appendChild(item1)
            
        }
    
    })
}
