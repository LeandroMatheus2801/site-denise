let pacientes = [];
let calendario = [];

function carregarPacientes() {
    const listaPacientes = document.getElementById('lista-pacientes');
    listaPacientes.innerHTML = ''; // Limpar a lista antes de recarregar
    pacientes.forEach(paciente => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${paciente.nome}</td>
            <td>${paciente.status}</td>
            <td>${paciente.email}</td>
            <td>${paciente.telefone}</td>
            <td>${paciente.dataCadastro}</td>
            <td><button>Ações</button></td>
        `;
        listaPacientes.appendChild(tr);
    });
}

function carregarCalendario() {
    const calendarioContainer = document.getElementById('calendario-container');
    calendarioContainer.innerHTML = ''; // Limpar o calendário antes de recarregar
    calendario.forEach(evento => {
        const div = document.createElement('div');
        div.textContent = `${evento.data} - ${evento.paciente} - ${evento.horario}`;
        calendarioContainer.appendChild(div);
    });
}

function salvarPaciente() {
    const nome = document.getElementById('nome').value;
    const status = document.getElementById('status').value;
    const email = document.getElementById('email').value;
    const dataCadastro = new Date().toLocaleDateString('pt-BR');

    if (nome && status && email) {
        pacientes.push({ nome, status, email, telefone: '', dataCadastro });
        carregarPacientes();
        document.getElementById('nome').value = '';
        document.getElementById('status').value = '';
        document.getElementById('email').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function salvarEvento() {
    const data = document.getElementById('data').value;
    const paciente = document.getElementById('paciente').value;
    const horario = document.getElementById('horario').value;

    if (data && paciente && horario) {
        calendario.push({ data, paciente, horario });
        carregarCalendario();
        document.getElementById('data').value = '';
        document.getElementById('paciente').value = '';
        document.getElementById('horario').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarPacientes();
    carregarCalendario();
});
