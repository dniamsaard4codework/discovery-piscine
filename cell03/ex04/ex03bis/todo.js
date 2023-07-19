$(document).ready(function() {
    const newbtn = $("#new");
    const list = $("#ft_list");
  
    newbtn.click(function() {
      const newTodo = prompt("Enter you new ToDo:");
      if (!newTodo) return;
  
      const todoDiv = $("<div>").html(newTodo).addClass("todo");
      todoDiv.click(function() {
        const confirmation = confirm("Do you want to delete this ToDo?");
        if (confirmation) {
          todoDiv.remove();
          updateCookie();
        }
      });
      list.prepend(todoDiv);
      updateCookie();
    });
  
    function updateCookie() {
      const todos = [];
      list.children().each(function() {
        todos.push($(this).html());
      });
      document.cookie = "todos=" + JSON.stringify(todos);
    }
  
    $(window).on("load", function() {
      const cookie = document.cookie.split("; ").find(row => row.startsWith("todos="));
      if (cookie) {
        const todos = JSON.parse(cookie.split("=")[1]);
        todos.forEach(function(todo) {
          const todoDiv = $("<div>").html(todo).addClass("todo");
          todoDiv.click(function() {
            const confirmation = confirm("Do you want to delete his ToDo?");
            if (confirmation) {
              todoDiv.remove();
              updateCookie();
            }
          });
          list.append(todoDiv);
        });
      }
    });
  });
  