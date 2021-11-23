console.log("users: ", window.users);
console.log("todos: ", window.todos);

const checkLetter = prompt("Please, enter a letter:");
if(Number(checkLetter)){
    alert("You have to enter a letter");
}else{
    let usersNames = findUsersName(users,checkLetter);
    console.log(usersNames)
    greetUser(usersNames);
}


let userId = Number(prompt("Now, please enter your ID: "));
if(isNaN(userId) || userId === null){
    alert("You enter an incorrect id")
} else {
    console.log(getIncompletedTodosTitle(todos,userId));
}


//Greetings every 2 sec
function greetUser(usersNames){
    let variable = usersNames.length;
    const intervalID = setInterval(function(){
    console.log("Hi "+usersNames[variable-1]);
    variable--;
    if(variable<1){
        clearInterval(intervalID);
    }
    },2000)
}


function findUsersName(users,inputLetter){
    let usersNames  = users.filter(function(user){
    if(user['name'].includes(inputLetter.toUpperCase()) || user['name'].includes(inputLetter.toLowerCase()) )
    return true;
    })
    .map(function(user){
    return user.name;
    });
    return usersNames;
}


function getIncompletedTodosTitle(todos,userId){
    let userTodos = todos.filter(function(todo){
        if(todo['userId'] === userId)
        return todo.completed === false;
      
    })
    .map(function(todo){
        return todo.title;
    })
    return userTodos;
}