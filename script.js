const senhaCorreta = "minha_senha_secreta";  // Substitua pela senha desejada

function login() {
    const senha = document.getElementById("password").value;
    if (senha === senhaCorreta) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("content").style.display = "block";
        carregarPacientes();
        carregarCalendario();
    } else {
        alert("Senha incorreta!");
    }
}

// Exemplo de pacientes
const pacientes = [
    { nome: 'João Silva', idade: 30, telefone: '99999-1234' },
    { nome: 'Maria Oliveira', idade: 25, telefone: '98888-5678' },
];

// Exemplo de calendário
const calendario = [
    { data: '2025-03-01', paciente: 'João Silva', horario: '14:00' },
    { data: '2025-03-02', paciente: 'Maria Oliveira', horario: '15:00' },
];

function carregarPacientes() {
    const listaPacientes = document.getElementById('lista-pacientes');
    pacientes.forEach(paciente => {
        const li = document.createElement('li');
        li.textContent = `${paciente.nome}, ${paciente.idade} anos, Tel: ${paciente.telefone}`;
        listaPacientes.appendChild(li);
    });
}

function carregarCalendario() {
    const calendarioContainer = document.getElementById('calendario-container');
    calendario.forEach(evento => {
        const div = document.createElement('div');
        div.textContent = `${evento.data} - ${evento.paciente} - ${evento.horario}`;
        calendarioContainer.appendChild(div);
    });
}
