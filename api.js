// function dataLoad(){
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(sumon => sumon.json()) //parameters name could be anything
//       .then(shahin => console.log(shahin)) // parameters name could be anything 
// }


// function loadUsers(){
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => displayUsers(data))
// }

//     function displayUsers(data){

//         for (const user of data) {
//             console.log(user.email);            
//         }

//     }


function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayData(data))

}

function displayData(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
        const li = document.createElement('li');
        li.innerHTML = user.name + '</br>' + user.email;
        ul.appendChild(li);        
    }
}


