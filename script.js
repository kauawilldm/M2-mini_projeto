const form = document.getElementById('crud-form');
const recordsContainer = document.getElementById('records');
const recordCount = document.getElementById('record-count');
let count = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const genreInput = document.getElementById('genre');

    const name = nameInput.value;
    const genre = genreInput.value;

    if (name.trim() === '' || genre.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const record = document.createElement('div');
    record.classList.add('record');
    record.innerHTML = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Gênero:</strong> ${genre}</p>
        <button class="edit-btn">Editar</button>
        <button class="delete-btn">Excluir</button>
    `;

    recordsContainer.appendChild(record);

    nameInput.value = '';
    genreInput.value = '';

    count++;
    updateRecordCount();

    record.querySelector('.delete-btn').addEventListener('click', function() {
        record.remove();
        count--;
        updateRecordCount();
    });

    record.querySelector('.edit-btn').addEventListener('click', function() {
        const newName = prompt('Digite o novo nome do anime:', name);
        const newGenre = prompt('Digite o novo gênero do anime:', genre);

        if (newName && newGenre) {
            record.querySelector('p:nth-child(1)').innerHTML = `<strong>Nome:</strong> ${newName}`;
            record.querySelector('p:nth-child(2)').innerHTML = `<strong>Gênero:</strong> ${newGenre}`;
        }
    });
});

function updateRecordCount() {
    recordCount.textContent = `${count} anime${count !== 1 ? 's' : ''} adicionado${count !== 1 ? 's' : ''}`;
}
