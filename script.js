const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".first, .second, .third");

let draggedTask = null;

tasks.forEach((task) => {
    task.addEventListener("dragstart", (e) => {
        draggedTask = e.target;

    });

    task.addEventListener("dragend", () => {
        draggedTask = null;
    });
});

columns.forEach((column) => {

    column.addEventListener("dragover", (e) => {
        e.preventDefault();

    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();

        if (draggedTask) {
            column.querySelector(".card button").before(draggedTask);
        }
    });
});