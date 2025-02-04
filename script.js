document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const volumeRange = document.getElementById('volumeRange');
    const muteButton = document.getElementById('muteButton');

    // Atualiza o volume ao mover a barra de volume
    volumeRange.addEventListener('input', function () {
        videoPlayer.volume = volumeRange.value / 100;
        updateMuteButtonState();
    });

    // Alterna entre mutar e desmutar ao clicar no botão de mute
    muteButton.addEventListener('click', function () {
        videoPlayer.muted = !videoPlayer.muted;
        updateMuteButtonState();
    });

    // Atualiza o estado do botão de mute com base no estado atual do vídeo
    function updateMuteButtonState() {
        if (videoPlayer.muted) {
            muteButton.textContent = 'Unmute';
        } else {
            muteButton.textContent = 'Mute';
        }
    }
});

// Função para calcular a diferença entre duas datas
function calcularDiferencaData(dataAlvo) {
    const agora = new Date();
    const alvo = new Date(dataAlvo);

    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = alvo - agora;

    // Calcula dias, horas, minutos e segundos a partir da diferença em milissegundos
    const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
}

// Função para atualizar o contador
function atualizarContador() {
    const dataAlvo = '2025-06-28'; // Substitua pela sua data alvo
    const diferenca = calcularDiferencaData(dataAlvo);

    // Exibe a contagem regressiva
    document.getElementById('days').textContent = diferenca.dias;
    document.getElementById('hours').textContent = diferenca.horas;
    document.getElementById('min').textContent = diferenca.minutos;
    document.getElementById('sec').textContent = diferenca.segundos;

    // Atualiza a cada segundo
    setTimeout(atualizarContador, 1000);
}

// Inicia a contagem regressiva
atualizarContador();
