let user
let userStorage = sessionStorage.getItem("user")
   console.log(userStorage)

 if(userStorage){
   user = userStorage
   let mes = `Bienvenido ${user}`
   alert(mes)
}else{
   user = prompt("Ingrese su nombre")
   sessionStorage.setItem("user", user)
   let mes = `Hola ${user}, gracias por registrarte`
   alert(mes)
}

const todos = []

window.onload = () => {
   const form = document.getElementById('todo-form')
   form.onsubmit = (e) => {
        e.preventDefault()
        const todo = document.getElementById('todo')
        const todoText = todo.value
        todo.value = ''
        todos.push(todoText)
        render()
   } 
}

const render = () => {
   const todoList = document.getElementById('todo-list')
        const todosTemplate = todos.map(t => `<li> ${t} </li>`)
        todoList.innerHTML = todosTemplate.join('');
        const elementos = document.querySelectorAll('#todo-list li')
        elementos.forEach((elemento, i) => {
         elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1)
            render()
         })
        })
}