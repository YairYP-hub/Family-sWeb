document.addEventListener('DOMContentLoaded', async () => {
    const cursoTableBody = document.querySelector('#cursoTable tbody');
    const cursos = await getCursos();

    let rowsHTML = '';
    cursos.forEach(function (curso) {
        rowsHTML += `<tr class="${curso.teacher === "" ? 'table-danger' : ''}">
            <td>${curso.id}</td>
            <td>${curso.name}</td>
            <td>${curso.description}</td>
            <td>${curso.credit}</td>
            <td>${curso.teacher}</td>
            <td>
                <button data-curso-id="${curso.id}" type="button" class="js-btn-agregar btn btn-success">
                    Add
                </button>
                <button data-curso-id="${curso.id}" type="button" class="js-btn-eliminar btn btn-danger">
                    Eliminate
                </button>
                <button data-curso-id="${curso.id}" type="button" class="js-btn-actualizar btn btn-success">
                    Update
                </button> 
            </td>
        </tr>`;
    });

    cursoTableBody.innerHTML = rowsHTML;

    // Agregar event listeners a los botones después de insertar el HTML
    const addButtons = document.querySelectorAll(".js-btn-agregar");
    const eliminateButtons = document.querySelectorAll(".js-btn-eliminar");
    
    addButtons.forEach(function (button) {
        button.addEventListener("click", function(event) {
            const cursoId = event.target.dataset.cursoId;
            showTransactionModal(cursoId, 'Agregar');
        });
    });

    eliminateButtons.forEach(function (button) {
        button.addEventListener("click", function(event) {
            const cursoId = event.target.dataset.cursoId;
            showTransactionModal(cursoId, 'Eliminar');
        });
    });
});
