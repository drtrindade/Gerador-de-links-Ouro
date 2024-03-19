// Função para gerar um resultado aleatório
function generateRandomResult() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let result = '';

    for (let i = 0; i < 5; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return result;
}

// Função para exibir o resultado aleatório
function displayRandomResult() {
    const linkResult = document.getElementById('linkResult');
    const result = generateRandomResult();
    linkResult.textContent = `https://meet.jit.si/${result}`;
    
    // Exibe o botão de confirmação
    document.getElementById('confirmBtn').style.display = 'inline';
}

// Função para confirmar o resultado
function confirmResult() {
    // Lógica para garantir que o resultado nunca mais ocorra
    alert('Resultado confirmado! Este resultado não ocorrerá novamente.');
    // Oculta o botão de confirmação
    document.getElementById('confirmBtn').style.display = 'none';
}

// Adiciona event listener para o botão de geração de link
document.getElementById('generateBtn').addEventListener('click', displayRandomResult);

// Adiciona event listener para o botão de confirmação
document.getElementById('confirmBtn').addEventListener('click', confirmResult);
