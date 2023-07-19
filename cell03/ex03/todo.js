const newbtn = document.querySelector("#new");
const list = document.querySelector("#ft_list");

newbtn.addEventListener("click", function() {
    const newTodo = prompt("Enter you new ToDo:");
    if (newTodo === null || newTodo ==="") return;

    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = newTodo;
    todoDiv.classList.add("todo");
    todoDiv.addEventListener("click", function() {
        const confirmation = confirm("Do you want to delete this ToDo?");
        if (confirmation) {
            list.removeChild(todoDiv);
            updateCookie();
        }
    });
    list.insertBefore(todoDiv, list.firstChild);
    updateCookie();
});

function updateCookie() {
    const todos = [];
    for (let i = 0; i < list.children.length; i++) {
        todos.push(list.children[i].innerHTML);
    }
    document.cookie = "todos=" + JSON.stringify(todos);
}

window.addEventListener("load", function() {
    const cookie = document.cookie.split("; ").find(row => row.startsWith("todos="));
    if (cookie) {
        const todos = JSON.parse(cookie.split("=")[1]);
        todos.forEach(function(todo) {
            const todoDiv = document.createElement("div");
            todoDiv.innerHTML = todo;
            todoDiv.classList.add("todo");
            todoDiv.addEventListener("click", function() {
                const confirmation = confirm("Do you want to delete his ToDo?");
                if (confirmation) {
                    list.removeChild(todoDiv);
                    updateCookie();
                }
            });
            list.appendChild(todoDiv);
        });
    }
});