document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".inputTareas").addEventListener("keyup", event => {
        if (event.keyCode === 13) { // Aquí le dices que solo actue en caso de presionar enter
            if (event.target.value.length == 0) {
                return alert("You must write something! 😒 ");
            }
            // Crear tarea
            let tarea = document.createElement("div"); // Aquí creas el div
            let titulo = document.createElement("span");
            titulo.innerText = event.target.value; // Asignas el texto del input al span del div que has creado
            titulo.setAttribute("contenteditable", "true"); // Permite editar el input introducido
            event.target.value = "" // Limpiamos el input
            
            /////// Creamos botón Empezar   

            let startedButton = document.createElement("button");
            startedButton.innerText = "💪"; // Asignas el texto al input del div
            startedButton.addEventListener("click", event => { // Poner el botón completed a la escucha
                completedButton.style.display="inline-block";
                document.querySelector("#doingList .tareas").appendChild(event.target.parentNode);
                event.target.setAttribute("style", "display:none");
            });

            /////// Creamos botón Completar   

            let completedButton = document.createElement("button");
            completedButton.innerText = "👋";
            completedButton.style.display="none"
            completedButton.addEventListener("click", event => { // Poner el botón completed a la escucha
                event.target.parentNode.classList.toggle("completed"); //quita o pone la clase completed dependiendo de si esta o no presente en el nodo padre
                document.querySelector("#doneList .tareas").appendChild(event.target.parentNode);
                event.target.setAttribute("style", "display:none");
                inputSubTareas.style.display="none";
            });
            
            /////// Creamos botón Eliminar

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "🗑️";
            deleteButton.addEventListener("click", event => {
                if (confirm("Are you sure you want to delete this task? 😱 ")) {
                    tarea.remove()
                }
            })

            let subTareas = document.createElement("ul");
            subTareas.setAttribute("style", "list-style:none")
            let inputSubTareas = document.createElement("input");
            inputSubTareas.setAttribute("placeholder", "Something else?")
            inputSubTareas.addEventListener("keyup", event => {
                if (event.keyCode === 13) {
                    if (event.target.value.length == 0) {
                        return alert("You didn't write anything! 🙄 ");
                    }
                    let subTarea = document.createElement("li"); // Aquí creas el div
                    subTarea.innerText = "✔️ " + event.target.value; // Asignas el texto del input al div
                    event.target.value = "";
                    let subeDeleteButton = document.createElement("button");
                    subeDeleteButton.innerText = "🗑️";
                    subeDeleteButton.addEventListener("click", event => {
                        console.log(event.target.parentNode)
                        subTarea.remove()
                    })
                    subTarea.appendChild(subeDeleteButton)
                    subTareas.appendChild(subTarea);

                }
            })

            tarea.appendChild(titulo);
            tarea.appendChild(startedButton); // Añado el botón completar a la tarea
            tarea.appendChild(completedButton);
            tarea.appendChild(deleteButton);
            tarea.appendChild(subTareas);
            tarea.appendChild(inputSubTareas);
            document.querySelector(".Tareas").appendChild(tarea) // Añades la tarea al DOM
        }
    });
});