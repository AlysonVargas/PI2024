// script.js
const adminUser = 'admin'; // Defina o usuário administrador
const adminPass = 'admin'; // Defina a senha do administrador



function login() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Simulação de autenticação
    if (usuario === 'admin' && senha === 'admin') {
        document.querySelector('.main-login').classList.add('hidden');
        document.getElementById('menu').classList.remove('hidden');
    } else {
        alert('Usuário ou senha incorretos');
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function registerPlate() {
    const placa = document.getElementById('placa').value;
    if (placa) {
        const table = document.getElementById('registered-plates');
        const tbody = table.querySelector('tbody');
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = placa;
        row.appendChild(cell);
        tbody.appendChild(row);
        table.classList.remove('hidden');
        alert(`Placa ${placa} registrada com sucesso!`);
        document.getElementById('placa').value = '';
    } else {
        alert('Por favor, insira uma placa.');
    }
}

function deletePlate() {
    const placa = document.getElementById('placa-delete').value;
    if (placa) {
        alert(`Placa ${placa} deletada com sucesso!`);
        document.getElementById('placa-delete').value = '';
    } else {
        alert('Por favor, insira uma placa.');
    }
}

function checkStatus() {
    const placa = document.getElementById('placa-status').value;
    if (placa) {
        // Simulação de verificação de status
        const status = Math.random() > 0.5 ? 'permitida' : 'proibida';
        const result = status === 'permitida' ? 
            `A entrada do veículo com a placa ${placa} está permitida.` : 
            `A entrada do veículo com a placa ${placa} está proibida, favor solicitar o cadastro da placa na instituição.`;
        document.getElementById('status-result').innerText = result;
    } else {
        alert('Por favor, insira uma placa.');
    }
}
