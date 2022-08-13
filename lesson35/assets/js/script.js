const API = "https://jsonplaceholder.typicode.com";
const APIUSER = "https://jsonplaceholder.typicode.com";



let postsHtml = document.getElementById("posts");
let post = document.getElementById("post");
let details = document.getElementById("details");
let user = document.getElementById("user");
let container = document.getElementById("container");







// name1()





function apiFunction(){
    // fetch(`${API}/users`)
    fetch(`${API}/posts`)
.then(response => response.json())
.then(posts =>{

    // let postsHtml = document.getElementById("posts");
    // let post = document.getElementById("post");
    // let details = document.getElementById("details");
    // let user = document.getElementById("user");
    // let container = document.getElementById("container");



    // let postsDiv = document.createElement("div");
    // let postElement = document.createElement("div");
    // let postDescription = document.createElement("div");

    for (let i = 0; i < 10; i++){
        let postsDiv = document.createElement("div");
        postsDiv.classList.add("posts");
        container.appendChild(postsDiv);
        console.log("First working");
// ________________________________________________________
        let postElement = document.createElement("div");
        postElement.classList.add("post");
        postsDiv.appendChild(postElement);
        console.log("Second working");
// ________________________________________________________
        let postDescription = document.createElement("div");
        postDescription.classList.add("post__details");
        postElement.appendChild(postDescription);

        let descriptionTitle = document.createElement("h2");
        descriptionTitle.textContent = posts[i].title;
        postDescription.appendChild(descriptionTitle);

        let descriptionBody = document.createElement("p");
        descriptionBody.textContent = posts[i].body;
        postDescription.appendChild(descriptionBody);
        console.log("Third/FIN working");
// ________________________________________________________

        fetch(`${API}/users`)
    .then(users =>{
        
        for (let i2 = 0; i2 < 10; i2++){
            let userDiv = document.createElement("div");
            userDiv.classList.add("post__user");
            postElement.appendChild(userDiv)
// ________________________________________________________

            let userName = document.createElement("h2")
            userName.textContent = users[i2].name
            userDiv.appendChild(userName)

            let userCustomName = document.createElement("h2")
            userCustomName.textContent = users[i2].username
            userDiv.appendChild(useruserCustomNameName)
        }
})


    }

})
// fetch(`${API}/users`)
//     .then(users =>{
        
//         for (let i = 0; i < 10; i++){
//             let userDiv = document.createElement("div");
//             userDiv.classList.add("post__user");
//             userDiv.textContent = users[i]
//             postElement.appendChild(userDiv)
//         }
// })



};



// let postsDiv = document.createElement("div")
// postsDiv.classList.add("posts")
// postsDiv.textContent = posts[i].title
// console.log(postsDiv);
// postsHtml.appendChild(postsDiv)

// apiFunction()


// function name(params) {
    
// }
















function apiFunction2(){
    // fetch(`${API}/users`)
    fetch(`${API}/users`)
.then(response => response.json())
.then(users =>{

    // let postsHtml = document.getElementById("posts");
    // let post = document.getElementById("post");
    // let details = document.getElementById("details");
    // let user = document.getElementById("user");
    // let container = document.getElementById("container");



    // let postsDiv = document.createElement("div");
    // let postElement = document.createElement("div");
    // let postDescription = document.createElement("div");

    for (let i = 0; i < 10; i++){
        let postsDiv = document.createElement("div");
        postsDiv.classList.add("posts");
        container.appendChild(postsDiv);
        console.log("First working");
// ________________________________________________________
        let postElement = document.createElement("div");
        postElement.classList.add("post");
        postsDiv.appendChild(postElement);
        console.log("Second working");
// ________________________________________________________
        let postDescription = document.createElement("div");
        postDescription.classList.add("post__details");
        postElement.appendChild(postDescription);

        let descriptionTitle = document.createElement("h2");
        descriptionTitle.textContent = users[i].name;
        postDescription.appendChild(descriptionTitle);

        let descriptionBody = document.createElement("p");
        descriptionBody.textContent = users[i].username;
        postDescription.appendChild(descriptionBody);
        console.log("Third/FIN working");
// ________________________________________________________

//         fetch(`${API}/users`)
//     .then(users =>{
        
//         for (let i2 = 0; i2 < 10; i2++){
//             let userDiv = document.createElement("div");
//             userDiv.classList.add("post__user");
//             postElement.appendChild(userDiv)
// // ________________________________________________________

//             let userName = document.createElement("h2")
//             userName.textContent = users[i2].name
//             userDiv.appendChild(userName)

//             let userCustomName = document.createElement("h2")
//             userCustomName.textContent = users[i2].username
//             userDiv.appendChild(useruserCustomNameName)
//         }
// })


    }

})
// fetch(`${API}/users`)
//     .then(users =>{
        
//         for (let i = 0; i < 10; i++){
//             let userDiv = document.createElement("div");
//             userDiv.classList.add("post__user");
//             userDiv.textContent = users[i]
//             postElement.appendChild(userDiv)
//         }
// })



};


apiFunction2()